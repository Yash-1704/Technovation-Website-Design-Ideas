/**
 * TECHNOVATION BOOK READER - CONTROLS & HUD COMPONENT
 * Renders floating top/bottom bars with Lucide SVG icons, page progress indicator,
 * theme toggle sync, interactive page flipping triggers, and Web Audio paper rustle physics.
 */

// Lucide Icon SVGs
const ICONS = {
  bookOpen: `
    <svg class="hud-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  `,
  x: `
    <svg class="hud-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `,
  chevronLeft: `
    <svg class="hud-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  `,
  chevronRight: `
    <svg class="hud-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  `,
  sun: `
    <svg class="hud-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  `,
  moon: `
    <svg class="hud-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  `
};

export class BookControls {
  constructor(options = {}) {
    this.bookData = options.bookData || {};
    this.onPrev = options.onPrev || (() => {});
    this.onNext = options.onNext || (() => {});
    this.onClose = options.onClose || (() => {});
    this.onReturnShelf = options.onReturnShelf || (() => {});
    this.onThemeToggle = options.onThemeToggle || (() => {});

    this.currentPage = 0;
    this.totalPages = 16;
    this.orientation = 'landscape';
    this.container = null;

    // Web Audio synthesizer for paper turn rustle
    this.audioCtx = null;
  }

  /**
   * Initializes audio context on first user interaction
   */
  initAudio() {
    if (!this.audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioClass();
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  /**
   * Plays a subtle, organic paper turn swoosh using Web Audio noise synthesis
   */
  playPaperRustle() {
    try {
      this.initAudio();
      if (!this.audioCtx) return;

      const ctx = this.audioCtx;
      const bufferSize = ctx.sampleRate * 0.18; // 180ms gentle swoop
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);

      // Pinkish/brown noise with smooth fade
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.98 * b0 + white * 0.04;
        b1 = 0.95 * b1 + white * 0.08;
        b2 = 0.90 * b2 + white * 0.12;
        const env = Math.sin((i / bufferSize) * Math.PI);
        output[i] = (b0 + b1 + b2) * 0.25 * env;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      // Lowpass filter to emulate heavy paper texture
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(900, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.18);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.14, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      whiteNoise.start();
    } catch (_) {
      // Audio autoplay gracefully suppressed
    }
  }

  /**
   * Mounts the HUD controls into the target wrapper element
   */
  mount(parentEl) {
    this.container = document.createElement('div');
    this.container.className = 'book-hud-layer';
    this.container.innerHTML = `
      <!-- Top HUD Header -->
      <header class="hud-top-bar" role="toolbar" aria-label="Book navigation header">
        <div class="hud-left-actions">
          <button class="hud-btn hud-btn-shelf" id="hud-btn-shelf" type="button" title="Return to Bookshelf">
            ${ICONS.bookOpen}
            <span class="hud-btn-label">SHELF</span>
          </button>
        </div>

        <div class="hud-center-title">
          <span class="hud-society-badge">TECHNOVATION ARCHIVE</span>
          <span class="hud-separator">/</span>
          <span class="hud-book-volume" id="hud-book-volume">${this.bookData.volume || 'VOL. 01'}</span>
          <span class="hud-separator">/</span>
          <span class="hud-book-title" id="hud-book-title">${this.bookData.title || 'Manifesto'}</span>
        </div>

        <div class="hud-right-actions">
          <button class="hud-btn hud-btn-theme" id="hud-btn-theme" type="button" title="Toggle Dark/Light Mode">
            <span class="theme-icon-light">${ICONS.sun}</span>
            <span class="theme-icon-dark">${ICONS.moon}</span>
          </button>

          <button class="hud-btn hud-btn-close" id="hud-btn-close" type="button" title="Close Book">
            ${ICONS.x}
            <span class="hud-btn-label">CLOSE</span>
          </button>
        </div>
      </header>

      <!-- Left / Right Lateral Flip Hotzones & Arrows -->
      <button class="hud-page-arrow hud-arrow-prev" id="hud-arrow-prev" type="button" aria-label="Previous Page" title="Previous Page (←)">
        ${ICONS.chevronLeft}
      </button>

      <button class="hud-page-arrow hud-arrow-next" id="hud-arrow-next" type="button" aria-label="Next Page" title="Next Page (→)">
        ${ICONS.chevronRight}
      </button>

      <!-- Bottom HUD Navigation & Scrub Bar -->
      <footer class="hud-bottom-bar" role="toolbar" aria-label="Book page navigation">
        <div class="hud-progress-wrap">
          <div class="hud-progress-track">
            <div class="hud-progress-fill" id="hud-progress-fill" style="width: 0%;"></div>
          </div>
          <div class="hud-page-counter" id="hud-page-counter">
            <span class="hud-counter-label" id="hud-counter-text">COVER</span>
          </div>
        </div>

        <div class="hud-interaction-hint" id="hud-interaction-hint">
          <span class="hint-dot"></span>
          <span class="hint-text">Drag corners or press ← / → to flip</span>
        </div>
      </footer>
    `;

    parentEl.appendChild(this.container);
    this.bindEvents();
    this.syncThemeIcon();
  }

  /**
   * Binds click handlers to HUD controls
   */
  bindEvents() {
    const btnShelf = this.container.querySelector('#hud-btn-shelf');
    const btnClose = this.container.querySelector('#hud-btn-close');
    const btnTheme = this.container.querySelector('#hud-btn-theme');
    const btnPrev = this.container.querySelector('#hud-arrow-prev');
    const btnNext = this.container.querySelector('#hud-arrow-next');

    btnShelf.addEventListener('click', (e) => {
      e.stopPropagation();
      this.playPaperRustle();
      this.onReturnShelf();
    });

    btnClose.addEventListener('click', (e) => {
      e.stopPropagation();
      this.playPaperRustle();
      this.onClose();
    });

    btnTheme.addEventListener('click', (e) => {
      e.stopPropagation();
      this.onThemeToggle();
      this.syncThemeIcon();
    });

    btnPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      this.playPaperRustle();
      this.onPrev();
    });

    btnNext.addEventListener('click', (e) => {
      e.stopPropagation();
      this.playPaperRustle();
      this.onNext();
    });
  }

  /**
   * Syncs theme icon based on current document theme
   */
  syncThemeIcon() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const lightIcon = this.container.querySelector('.theme-icon-light');
    const darkIcon = this.container.querySelector('.theme-icon-dark');
    if (lightIcon && darkIcon) {
      lightIcon.style.display = isDark ? 'inline-flex' : 'none';
      darkIcon.style.display = isDark ? 'none' : 'inline-flex';
    }
  }

  /**
   * Updates page counter, progress bar, and prev/next disabled states
   */
  updatePage(pageIndex, totalPages = 16, orientation = 'landscape') {
    this.currentPage = pageIndex;
    this.totalPages = totalPages;
    this.orientation = orientation;

    if (!this.container) return;

    const counterText = this.container.querySelector('#hud-counter-text');
    const progressFill = this.container.querySelector('#hud-progress-fill');
    const btnPrev = this.container.querySelector('#hud-arrow-prev');
    const btnNext = this.container.querySelector('#hud-arrow-next');

    // Calculate percentage
    const pct = Math.min(100, Math.max(0, (pageIndex / (totalPages - 1)) * 100));
    if (progressFill) progressFill.style.width = `${pct}%`;

    // Format human-readable counter
    let text = '';
    if (pageIndex === 0) {
      text = 'FRONT COVER';
    } else if (pageIndex >= totalPages - 1) {
      text = 'BACK COVER';
    } else {
      if (orientation === 'landscape') {
        const leftPage = pageIndex % 2 === 0 ? pageIndex : pageIndex - 1;
        const rightPage = leftPage + 1;
        text = `PAGES ${leftPage} – ${Math.min(totalPages, rightPage)} OF ${totalPages}`;
      } else {
        text = `PAGE ${pageIndex} OF ${totalPages}`;
      }
    }

    if (counterText) counterText.textContent = text;

    // Disabled states
    if (btnPrev) {
      btnPrev.disabled = pageIndex <= 0;
      btnPrev.classList.toggle('disabled', pageIndex <= 0);
    }
    if (btnNext) {
      btnNext.disabled = pageIndex >= totalPages - 1;
      btnNext.classList.toggle('disabled', pageIndex >= totalPages - 1);
    }
  }

  /**
   * Unmounts HUD controls
   */
  unmount() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
      this.container = null;
    }
  }
}
