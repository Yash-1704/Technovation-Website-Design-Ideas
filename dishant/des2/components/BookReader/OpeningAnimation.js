/**
 * TECHNOVATION BOOK READER - OPENING & CLOSING 3D ANIMATION
 * Handles the cinematic transition from the department introduction screen into
 * the physical 3D book, using the exact bookshelf cover artwork and spine design.
 */

import { SHELF_BOOKS } from '../../data/shelfBooks.js';
import { getCropBackgroundStyle, DEPT_TO_SHELF_KEY } from '../../data/shelfAssets.js';

export class OpeningAnimation {
  constructor(options = {}) {
    this.container = options.container;
    this.bookData = options.bookData;
    this.shelfBook = options.shelfBook || this.resolveShelfBook();
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  resolveShelfBook() {
    const shelfKey = DEPT_TO_SHELF_KEY[this.bookData.id] || DEPT_TO_SHELF_KEY[this.bookData.key] || 'noon';
    return SHELF_BOOKS.find(b => b.id === shelfKey) || SHELF_BOOKS[0];
  }

  /**
   * Executes the 3D book opening sequence
   * @param {HTMLElement} stageEl - The container element to inject the 3D book rig
   * @param {Function} onComplete - Callback invoked when the book has fully swung open
   */
  run(stageEl, onComplete) {
    if (this.prefersReducedMotion) {
      if (onComplete) onComplete();
      return;
    }

    const book = this.bookData;
    const shelf = this.shelfBook;
    const coverCropStyle = getCropBackgroundStyle(`cover-${shelf.id}`);
    const spineCropStyle = getCropBackgroundStyle(`spine-${shelf.id}`);
    const coverBase = book.color || '#1F3FB0';

    // Build the 3D opening rig element
    const rig = document.createElement('div');
    rig.className = 'book-opening-rig';
    rig.style.setProperty('--rig-base', coverBase);

    rig.innerHTML = `
      <div class="rig-viewport">
        <!-- 3D Book Assembly -->
        <div class="rig-book-3d" id="rig-book-3d">
          <!-- Back Hardcover Board with Shelf Art -->
          <div class="rig-cover rig-cover-back" style="${coverCropStyle}">
            <div class="rig-back-scrim"></div>
          </div>

          <!-- Stacked Pages Paper Block (Thickness) -->
          <div class="rig-paper-block">
            <div class="rig-paper-page rig-first-spread">
              <div class="rig-spread-left">
                <span class="rig-spread-sub">EX LIBRIS TECHNOVATION</span>
                <span class="rig-spread-code">REG-MMXXVI</span>
              </div>
              <div class="rig-spread-right">
                <span class="rig-spread-chapter">PROLOGUE</span>
                <p class="rig-spread-quote">“${book.summary ? book.summary.slice(0, 95) + '...' : 'Innovating beyond the horizon.'}”</p>
              </div>
            </div>
          </div>

          <!-- Physical Spine with exact shelf artwork & icon -->
          <div class="rig-spine" style="${spineCropStyle}">
            <div class="rig-spine-label">
              <div class="rig-spine-icon">${shelf.spineIconSvg || ''}</div>
              <div class="rig-spine-vol">${shelf.vol || ''}</div>
              <div class="rig-spine-title">${shelf.spineTitle || ''}</div>
              <div class="rig-spine-badge">CLUB</div>
            </div>
          </div>

          <!-- Front Hardcover Board (Animates open around left hinge) -->
          <div class="rig-cover rig-cover-front" id="rig-front-cover">
            <!-- Exact Bookshelf Front Artwork & Plaques -->
            <div class="rig-cover-front-face shelf-matched-casing" style="${coverCropStyle}">
              <div class="cv-bg-vignette"></div>
              <div class="cv-center-graphic">
                ${shelf.graphicSvg || ''}
              </div>
              <div class="cv-plate">
                <div class="cv-sub">
                  <span>TECHNOVATION</span>
                  <span>${shelf.chapter || book.volume}</span>
                </div>
                <h2 class="cv-title">${shelf.spineTitle || book.title.toUpperCase()}</h2>
                <span class="cv-tagline">${shelf.tagline || book.subtitle}</span>
              </div>
              <div class="cv-foot-plate">
                <span class="cv-edition">${shelf.romaji || book.edition}</span>
                <span class="cv-badge">ARCHIVE</span>
              </div>
              <div class="hardcover-hinge-crease"></div>
            </div>

            <!-- Inside of front cover (turned 180deg facing left) -->
            <div class="rig-cover-inside-face">
              <div class="rig-inside-marbled-paper">
                <div class="rig-inside-seal">
                  <span>EX LIBRIS ARCHIVIS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    stageEl.appendChild(rig);

    // Run keyframe animation
    const frontCover = rig.querySelector('#rig-front-cover');
    const book3d = rig.querySelector('#rig-book-3d');

    // 1. Book floats up and rotates into reading angle
    book3d.animate([
      { transform: 'translate3d(0, 50px, -240px) rotateX(16deg) rotateY(-22deg)', opacity: 0 },
      { transform: 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)', opacity: 1 }
    ], {
      duration: 650,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      fill: 'forwards'
    });

    // 2. Front cover swings open around the spine hinge
    setTimeout(() => {
      const swingAnim = frontCover.animate([
        { transform: 'rotateY(0deg)', transformOrigin: 'left center' },
        { transform: 'rotateY(-180deg)', transformOrigin: 'left center' }
      ], {
        duration: 950,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        fill: 'forwards'
      });

      swingAnim.onfinish = () => {
        // Fade out opening rig and trigger full StPageFlip instance
        rig.animate([
          { opacity: 1 },
          { opacity: 0 }
        ], {
          duration: 250,
          fill: 'forwards'
        }).onfinish = () => {
          if (rig.parentNode) rig.parentNode.removeChild(rig);
          if (onComplete) onComplete();
        };
      };
    }, 450);
  }

  /**
   * Executes closing animation back to intro screen or shelf
   */
  runClose(stageEl, onComplete) {
    if (this.prefersReducedMotion) {
      if (onComplete) onComplete();
      return;
    }

    stageEl.animate([
      { opacity: 1, transform: 'scale(1)' },
      { opacity: 0, transform: 'scale(0.96)' }
    ], {
      duration: 380,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      fill: 'forwards'
    }).onfinish = () => {
      if (onComplete) onComplete();
    };
  }
}
