/**
 * TECHNOVATION BOOK READER - BOOK COVER COMPONENT
 * Renders physical hardcover front and back with the EXACT artwork,
 * vector graphics, and plaques from the homepage bookshelf.
 */

import { SHELF_BOOKS } from '../../data/shelfBooks.js';
import { getCropBackgroundStyle, DEPT_TO_SHELF_KEY } from '../../data/shelfAssets.js';

// Ornate Corner SVG Filigree
const CORNER_FILIGREE = `
<svg class="cover-filigree" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 44V12C4 7.58172 7.58172 4 12 4H44" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M12 44V20C12 15.5817 15.5817 12 20 12H44" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 3"/>
  <circle cx="8" cy="8" r="3" fill="currentColor"/>
  <circle cx="20" cy="20" r="2" fill="currentColor"/>
</svg>
`;

// Technovation Archival Crest Emblem SVG
const TECHNOVATION_CREST = `
<svg class="cover-crest" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="54" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 4"/>
  <circle cx="60" cy="60" r="50" stroke="currentColor" stroke-width="1"/>
  <polygon points="60,20 88,60 60,100 32,60" stroke="currentColor" stroke-width="2" fill="none"/>
  <polygon points="60,28 80,60 60,92 40,60" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 2" fill="none"/>
  <line x1="60" y1="36" x2="60" y2="84" stroke="currentColor" stroke-width="1.5"/>
  <line x1="36" y1="60" x2="84" y2="60" stroke="currentColor" stroke-width="1.5"/>
  <path d="M50 48H70M60 48V74M54 74H66" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="60" cy="60" r="2.5" fill="currentColor"/>
</svg>
`;

// Archival Barcode SVG Generator
function generateBarcodeSVG(code) {
  const bars = [2, 1, 3, 1, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 2, 1, 1, 3, 2, 2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 1, 2];
  let x = 10;
  const barElements = bars.map((w, i) => {
    const el = `<rect x="${x}" y="5" width="${w * 1.8}" height="38" fill="currentColor"/>`;
    x += w * 1.8 + (i % 2 === 0 ? 2 : 1.5);
    return el;
  }).join('');

  return `
  <svg class="cover-barcode" viewBox="0 0 ${Math.ceil(x + 10)} 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${barElements}
    <text x="${(x + 10) / 2}" y="52" text-anchor="middle" font-family="'Cinzel', 'Playfair Display', serif" font-size="7" letter-spacing="2" fill="currentColor">${code}</text>
  </svg>
  `;
}

/**
 * Resolves shelf book metadata for the current department
 */
export function getShelfBook(bookData, customShelfBook = null) {
  if (customShelfBook) return customShelfBook;
  const shelfKey = DEPT_TO_SHELF_KEY[bookData.id] || DEPT_TO_SHELF_KEY[bookData.key] || 'noon';
  return SHELF_BOOKS.find(b => b.id === shelfKey) || SHELF_BOOKS[0];
}

/**
 * Renders the front hardcover (Page 1) with exact bookshelf artwork and layout
 */
export function renderFrontCover(bookData, customShelfBook = null) {
  const shelf = getShelfBook(bookData, customShelfBook);
  const cropStyle = getCropBackgroundStyle(`cover-${shelf.id}`);
  const foilColor = bookData.foilColor || '#F59E0B';
  const coverBg = bookData.color || '#1F3FB0';

  return `
  <div class="page page-hardcover page-hardcover-front" data-density="hard" style="--cover-base: ${coverBg}; --cover-foil: ${foilColor};">
    <!-- Outer Hardcover Casing with Shelf Artwork -->
    <div class="hardcover-casing shelf-matched-casing" style="${cropStyle}">
      <!-- Spine Joint / Hinge Indent Crease -->
      <div class="hardcover-hinge-crease"></div>

      <!-- Atmospheric Ambient Vignette -->
      <div class="cv-bg-vignette"></div>

      <!-- Bespoke Center Graphic SVG (Exact as in bookshelf) -->
      <div class="cv-center-graphic">
        ${shelf.graphicSvg || ''}
      </div>

      <!-- Header Plaque (Exact as in bookshelf) -->
      <div class="cv-plate">
        <div class="cv-sub">
          <span>TECHNOVATION</span>
          <span>${shelf.chapter || bookData.volume}</span>
        </div>
        <h2 class="cv-title">${shelf.spineTitle || bookData.title.toUpperCase()}</h2>
        <span class="cv-tagline">${shelf.tagline || bookData.subtitle}</span>
      </div>

      <!-- Footer Plaque (Exact as in bookshelf) -->
      <div class="cv-foot-plate">
        <span class="cv-edition">${shelf.romaji || bookData.edition}</span>
        <span class="cv-badge">ARCHIVE</span>
      </div>

      <!-- Physical Paper Edge Thickness Effect -->
      <div class="paper-block-edge-right"></div>
      <div class="paper-block-edge-bottom"></div>
    </div>
  </div>
  `;
}

/**
 * Renders the back hardcover (Page 16)
 */
export function renderBackCover(bookData, customShelfBook = null) {
  const shelf = getShelfBook(bookData, customShelfBook);
  const page = (bookData.pages && bookData.pages.find(p => p.type === 'cover-back')) || {
    barcode: `978-0-TECH-2026-${shelf.id.toUpperCase()}`,
    stamp: 'OFFICIAL ARCHIVE RECORD · ALL RIGHTS RESERVED'
  };

  const foilColor = bookData.foilColor || '#F59E0B';
  const coverBg = bookData.color || '#1F3FB0';
  const cropStyle = getCropBackgroundStyle(`cover-${shelf.id}`);

  return `
  <div class="page page-hardcover page-hardcover-back" data-density="hard" style="--cover-base: ${coverBg}; --cover-foil: ${foilColor};">
    <div class="hardcover-casing back-casing shelf-matched-back" style="${cropStyle}">
      <!-- Dark overlay for clean contrast on back -->
      <div class="back-cover-scrim"></div>

      <!-- Spine Joint / Hinge Indent on right edge -->
      <div class="hardcover-hinge-crease back-hinge"></div>

      <!-- Outer Embossed Foil Border Frame -->
      <div class="hardcover-border-frame">
        <div class="corner-flourish corner-tl">${CORNER_FILIGREE}</div>
        <div class="corner-flourish corner-tr">${CORNER_FILIGREE}</div>
        <div class="corner-flourish corner-bl">${CORNER_FILIGREE}</div>
        <div class="corner-flourish corner-br">${CORNER_FILIGREE}</div>

        <div class="hardcover-content back-content">
          <!-- Back Archival Emblem -->
          <div class="back-seal-wrapper">
            <div class="back-crest-mini">
              ${TECHNOVATION_CREST}
            </div>
            <h3 class="back-society-name">TECHNOVATION</h3>
            <span class="back-dept-tag">${shelf.spineTitle || bookData.title.toUpperCase()}</span>
          </div>

          <!-- Archival Summary Synopsis -->
          <div class="back-synopsis-box">
            <p class="back-synopsis-quote">“${bookData.summary || shelf.synopsis || 'A chronicle of collective audacity, technical rigor, and artistic conviction.'}”</p>
            <div class="back-seal-emblem">
              <span class="back-seal-text">VERIFIED ARCHIVE RECORD</span>
              <span class="back-seal-year">MMXXVI</span>
            </div>
          </div>

          <!-- Official Barcode & Registry Stamp -->
          <div class="back-barcode-container">
            ${generateBarcodeSVG(page.barcode || `978-0-TECH-2026-${shelf.id.toUpperCase()}`)}
            <p class="back-stamp-label">${page.stamp || 'OFFICIAL ARCHIVE RECORD · ALL RIGHTS RESERVED'}</p>
          </div>
        </div>
      </div>

      <!-- Physical Paper Edge Thickness Effect on left & bottom -->
      <div class="paper-block-edge-left"></div>
      <div class="paper-block-edge-bottom"></div>
    </div>
  </div>
  `;
}
