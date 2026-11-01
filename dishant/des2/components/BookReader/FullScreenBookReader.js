/**
 * TECHNOVATION STORY ARCHIVES - FULL-VIEWPORT BOOK READER ENGINE
 * Replaces center 3D book models with an authentic 100vw × 100vh physical sheet experience.
 * Manages full-screen page lifecycles, 3D paper curling & turning physics,
 * gesture controls, audio rustle feedback, and keyboard shortcuts.
 */

import { FULLSCREEN_DEPARTMENT_PAGES } from '../../data/fullScreenDepartmentPages.js?v=2.2';
import { FullScreenPages } from './FullScreenPages.js?v=2.2';
import { PageTurnAnimator } from './PageTurnAnimator.js?v=2.2';

export class FullScreenBookReaderEngine {
  constructor() {
    this.isOpen = false;
    this.currentDeptKey = 'technical';
    this.deptData = null;
    this.currentPageIndex = 0; // 0-indexed (0 = Page 1)
    this.totalPages = 7;

    this.containerEl = null;
    this.stageEl = null;
    this.animator = null;
    this.hudEl = null;
    this.leftNavBtn = null;
    this.rightNavBtn = null;

    this.onCloseCallback = null;
    this.onReturnShelfCallback = null;

    // Gesture tracking state
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchStartTime = 0;
    this.isTouchActive = false;

    // Bound event handlers
    this.onKeyDown = this.handleKeyDown.bind(this);
    this.onResize = this.handleResize.bind(this);
  }

  /**
   * Initializes the full-viewport reader container and UI controls
   */
  initDOM() {
    if (this.containerEl) return;

    this.containerEl = document.createElement('div');
    this.containerEl.id = 'fullscreen-book-reader';
    this.containerEl.className = 'fullscreen-book-reader';
    this.containerEl.setAttribute('role', 'dialog');
    this.containerEl.setAttribute('aria-modal', 'true');
    this.containerEl.setAttribute('aria-label', 'Technovation Full-Screen Story Archive');
    this.containerEl.style.display = 'none';

    this.containerEl.innerHTML = `
      <!-- 3D Perspective Stage -->
      <div class="fsp-stage" id="fsp-stage">
        <!-- Physical 3D layers injected by PageTurnAnimator -->
      </div>

      <!-- Edge Navigation Chevrons -->
      <button class="fsp-edge-nav fsp-nav-left" id="fsp-nav-left" aria-label="Previous Page" title="Previous Page (←)">
        <svg viewBox="0 0 24 24" class="fsp-nav-icon">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button class="fsp-edge-nav fsp-nav-right" id="fsp-nav-right" aria-label="Next Page" title="Next Page (→)">
        <svg viewBox="0 0 24 24" class="fsp-nav-icon">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <!-- Top Controls Bar -->
      <div class="fsp-top-controls">
        <div class="fsp-sound-toggle-btn" id="fsp-sound-btn" title="Toggle Paper Sounds" aria-label="Toggle Sound">
          <svg viewBox="0 0 24 24" class="fsp-icon-sound-on" id="fsp-sound-icon-on">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
          <svg viewBox="0 0 24 24" class="fsp-icon-sound-off" id="fsp-sound-icon-off" style="display:none;">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        </div>

        <button class="fsp-close-btn" id="fsp-close-btn" aria-label="Close Reader" title="Exit to Department (ESC)">
          <span class="fsp-close-label">ESC</span>
          <svg viewBox="0 0 24 24" class="fsp-close-icon">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Bottom Floating Folio HUD -->
      <div class="fsp-bottom-hud" id="fsp-bottom-hud">
        <span class="fsp-hud-dept" id="fsp-hud-dept">Technical Wing</span>
        <span class="fsp-hud-separator">·</span>
        <span class="fsp-hud-folio" id="fsp-hud-folio">PAGE 01 / 07</span>
      </div>
    `;

    document.body.appendChild(this.containerEl);

    this.stageEl = this.containerEl.querySelector('#fsp-stage');
    this.leftNavBtn = this.containerEl.querySelector('#fsp-nav-left');
    this.rightNavBtn = this.containerEl.querySelector('#fsp-nav-right');
    this.hudEl = this.containerEl.querySelector('#fsp-bottom-hud');

    // Instantiate 3D Page Turn Animator on stage
    this.animator = new PageTurnAnimator(this.stageEl, {
      onTurnComplete: (direction) => {
        this.updateHUD();
      }
    });

    // Wire Navigation Button Clicks
    this.leftNavBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.prevPage();
    });

    this.rightNavBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.nextPage();
    });

    // Wire Close Button
    const closeBtn = this.containerEl.querySelector('#fsp-close-btn');
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.close();
    });

    // Wire delegated clicks for Book Completed page action buttons
    this.containerEl.addEventListener('click', (e) => {
      const returnDeptBtn = e.target.closest('#fsp-btn-return-dept');
      if (returnDeptBtn) {
        e.stopPropagation();
        this.close();
        return;
      }

      const returnShelfBtn = e.target.closest('#fsp-btn-return-shelf');
      if (returnShelfBtn) {
        e.stopPropagation();
        this.closeToShelf();
        return;
      }
    });

    // Wire Sound Toggle
    const soundBtn = this.containerEl.querySelector('#fsp-sound-btn');
    const soundIconOn = this.containerEl.querySelector('#fsp-sound-icon-on');
    const soundIconOff = this.containerEl.querySelector('#fsp-sound-icon-off');
    soundBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.animator.soundEnabled = !this.animator.soundEnabled;
      if (this.animator.soundEnabled) {
        soundIconOn.style.display = 'block';
        soundIconOff.style.display = 'none';
        this.animator.playRustleSound();
      } else {
        soundIconOn.style.display = 'none';
        soundIconOff.style.display = 'block';
      }
    });

    // Edge Click Detection: clicking the outer 6% of viewport turns page
    this.stageEl.addEventListener('click', (e) => {
      if (this.animator.isAnimating) return;
      const x = e.clientX;
      const w = window.innerWidth;
      if (x < w * 0.08) {
        this.prevPage();
      } else if (x > w * 0.92) {
        this.nextPage();
      }
    });

    // Touch / Swipe Gestures for Mobile
    this.containerEl.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1) return;
      this.touchStartX = e.touches[0].clientX;
      this.touchStartY = e.touches[0].clientY;
      this.touchStartTime = performance.now();
      this.isTouchActive = true;
    }, { passive: true });

    this.containerEl.addEventListener('touchend', (e) => {
      if (!this.isTouchActive || e.changedTouches.length !== 1) return;
      this.isTouchActive = false;

      const deltaX = e.changedTouches[0].clientX - this.touchStartX;
      const deltaY = e.changedTouches[0].clientY - this.touchStartY;
      const elapsed = performance.now() - this.touchStartTime;

      // Ensure horizontal swipe dominant over vertical scroll
      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5 && elapsed < 600) {
        if (deltaX < 0) {
          this.nextPage(); // Swiped left -> next page
        } else {
          this.prevPage(); // Swiped right -> prev page
        }
      }
    }, { passive: true });

    // Listen for theme attribute changes on <html>
    if (!this.themeObserver) {
      this.themeObserver = new MutationObserver(() => {
        if (this.isOpen && this.deptData && this.containerEl) {
          const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
          this.containerEl.style.setProperty('--fsp-dept-theme-color', isDark ? (this.deptData.accentColor || '#38BDF8') : (this.deptData.color || '#1F3FB0'));
        }
      });
      this.themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    }
  }

  /**
   * Normalizes department key to valid dataset key
   */
  normalizeDepartmentKey(key) {
    if (!key) return 'about';
    const clean = String(key).toLowerCase().trim();
    if (clean === 'tech' || clean === 'technical' || clean === 'green') return 'technical';
    if (clean === 'graphics' || clean === 'design') return 'graphics';
    if (clean === 'about' || clean === 'council' || clean === 'amber') return 'about';
    if (clean === 'production' || clean === 'storm' || clean === 'hardware') return 'production';
    if (clean === 'events' || clean === 'pink') return 'events';
    if (clean === 'pr' || clean === 'bluehour' || clean === 'public') return 'pr';
    if (clean === 'team' || clean === 'observer') return 'team';
    if (clean === 'legacy' || clean === 'door') return 'legacy';
    return FULLSCREEN_DEPARTMENT_PAGES[clean] ? clean : 'about';
  }

  /**
   * Opens the full-viewport reading experience for a given department
   * @param {string} departmentKey - Department identifier
   * @param {Object} options - Callbacks: onClose, onReturnShelf
   */
  open(departmentKey, options = {}) {
    if (this.isOpen) return;
    this.isOpen = true;

    this.initDOM();

    this.currentDeptKey = this.normalizeDepartmentKey(departmentKey);
    this.deptData = FULLSCREEN_DEPARTMENT_PAGES[this.currentDeptKey] || FULLSCREEN_DEPARTMENT_PAGES.technical;
    this.currentPageIndex = 0;
    // 7 rich editorial department pages + 1 Book Completed page
    this.totalPages = (this.deptData.pages || []).length + 1;

    this.onCloseCallback = options.onClose || null;
    this.onReturnShelfCallback = options.onReturnShelf || null;

    // Apply department color tokens
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    this.containerEl.style.setProperty('--fsp-dept-color', this.deptData.color || '#1F3FB0');
    this.containerEl.style.setProperty('--fsp-dept-accent', this.deptData.accentColor || '#38BDF8');
    this.containerEl.style.setProperty('--fsp-dept-theme-color', isDark ? (this.deptData.accentColor || '#38BDF8') : (this.deptData.color || '#1F3FB0'));

    // Render Page 1 into base page
    const page1Data = this.getPageData(0);
    const page1Html = FullScreenPages.renderPage(page1Data, this.deptData, this.totalPages);
    this.animator.renderBasePage(page1Html);

    // Show reader container
    this.containerEl.style.display = 'block';
    this.containerEl.classList.remove('fsp-closing');
    this.containerEl.classList.add('fsp-active');

    // Update folio & navigation controls
    this.updateHUD();

    // Bind keyboard and window resize listeners
    window.addEventListener('keydown', this.onKeyDown, { capture: true });
    window.addEventListener('resize', this.onResize);

    // Play subtle opening rustle
    this.animator.playRustleSound();
  }

  /**
   * Returns page data object for a given page index
   * If index equals the length of pages, returns the Book Completed page data
   */
  getPageData(index) {
    if (!this.deptData) return null;
    const pages = this.deptData.pages || [];
    if (index < pages.length) {
      return pages[index];
    }
    // Final Completed Page
    return {
      pageNumber: pages.length + 1,
      type: 'completed',
      chapterLabel: 'CHAPTER ARCHIVE CONCLUDED'
    };
  }

  /**
   * Advances to next full-screen page with 3D physical page curling animation
   */
  nextPage() {
    if (!this.isOpen || this.animator.isAnimating) return;

    if (this.currentPageIndex >= this.totalPages - 1) {
      // Already on completed page: DO NOT redirect or close!
      return;
    }

    const currentIdx = this.currentPageIndex;
    const nextIdx = currentIdx + 1;

    const currentHtml = FullScreenPages.renderPage(this.getPageData(currentIdx), this.deptData, this.totalPages);
    const nextHtml = FullScreenPages.renderPage(this.getPageData(nextIdx), this.deptData, this.totalPages);

    this.currentPageIndex = nextIdx;
    this.updateHUD();

    this.animator.turnForward(currentHtml, nextHtml, this.deptData, 820);
  }

  /**
   * Returns to previous full-screen page with 3D reverse page curling animation
   */
  prevPage() {
    if (!this.isOpen || this.animator.isAnimating) return;

    if (this.currentPageIndex <= 0) {
      return; // Already on first page
    }

    const currentIdx = this.currentPageIndex;
    const prevIdx = currentIdx - 1;

    const currentHtml = FullScreenPages.renderPage(this.getPageData(currentIdx), this.deptData, this.totalPages);
    const prevHtml = FullScreenPages.renderPage(this.getPageData(prevIdx), this.deptData, this.totalPages);

    this.currentPageIndex = prevIdx;
    this.updateHUD();

    this.animator.turnBackward(currentHtml, prevHtml, this.deptData, 820);
  }

  /**
   * Updates folio HUD and navigation button visibility
   */
  updateHUD() {
    if (!this.containerEl) return;

    const pNum = this.currentPageIndex + 1;
    const formattedNum = String(pNum).padStart(2, '0');
    const formattedTotal = String(this.totalPages).padStart(2, '0');

    // Update Folio text
    const folioEl = this.containerEl.querySelector('#fsp-hud-folio');
    if (folioEl) {
      if (this.currentPageIndex >= this.totalPages - 1) {
        folioEl.textContent = `PAGE ${formattedNum} / ${formattedTotal} · COMPLETED`;
      } else {
        folioEl.textContent = `PAGE ${formattedNum} / ${formattedTotal}`;
      }
    }

    const deptEl = this.containerEl.querySelector('#fsp-hud-dept');
    if (deptEl) {
      deptEl.textContent = this.deptData.department || 'Technovation';
    }

    // Update Left Nav Button
    if (this.leftNavBtn) {
      if (this.currentPageIndex === 0) {
        this.leftNavBtn.classList.add('is-disabled');
      } else {
        this.leftNavBtn.classList.remove('is-disabled');
      }
    }

    // Update Right Nav Button: on completed page, disable so user stays on completion screen
    if (this.rightNavBtn) {
      if (this.currentPageIndex >= this.totalPages - 1) {
        this.rightNavBtn.classList.add('is-disabled');
        this.rightNavBtn.setAttribute('title', 'Book Completed');
      } else {
        this.rightNavBtn.classList.remove('is-disabled');
        this.rightNavBtn.setAttribute('title', 'Next Page (→)');
      }
    }
  }

  /**
   * Closes the reader and returns directly to the main 3D bookshelf
   */
  closeToShelf() {
    if (!this.isOpen) return;
    this.isOpen = false;

    this.containerEl.classList.add('fsp-closing');
    this.containerEl.classList.remove('fsp-active');

    window.removeEventListener('keydown', this.onKeyDown, { capture: true });
    window.removeEventListener('resize', this.onResize);

    setTimeout(() => {
      this.containerEl.style.display = 'none';
      this.containerEl.classList.remove('fsp-closing');

      if (this.onReturnShelfCallback) {
        this.onReturnShelfCallback();
      }
    }, 350);
  }

  /**
   * Closes the full-screen reader and returns to department overview
   */
  close() {
    if (!this.isOpen) return;

    this.containerEl.classList.add('fsp-closing');
    this.containerEl.classList.remove('fsp-active');

    window.removeEventListener('keydown', this.onKeyDown, { capture: true });
    window.removeEventListener('resize', this.onResize);

    setTimeout(() => {
      this.isOpen = false;
      this.containerEl.style.display = 'none';
      this.containerEl.classList.remove('fsp-closing');

      if (this.onCloseCallback) {
        this.onCloseCallback();
      }
    }, 400);
  }

  /**
   * Handles keyboard navigation
   */
  handleKeyDown(e) {
    if (!this.isOpen) return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      this.nextPage();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      e.stopPropagation();
      this.prevPage();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      this.close();
    }
  }

  /**
   * Handles window resize
   */
  handleResize() {
    if (!this.isOpen || !this.deptData) return;
    // Re-render current page to adapt layout if orientation flipped
    const currentHtml = FullScreenPages.renderPage(
      this.getPageData(this.currentPageIndex),
      this.deptData,
      this.totalPages
    );
    this.animator.renderBasePage(currentHtml);
  }
}

// Global Singleton Export
export const FullScreenBookReader = new FullScreenBookReaderEngine();

// Backwards compatibility alias
export const BookReader = FullScreenBookReader;
