/**
 * TECHNOVATION BOOK READER - BOOK PAGE COMPONENT
 * Generates editorial inner spreads (Pages 2 through 15) with authentic paper textures,
 * gutter shadows, spine stitching, drop caps, Roman headings, archival seals, and stat grids.
 */

// Ornate Heraldic Seal SVG for Ex Libris & Oath
const EX_LIBRIS_SEAL = `
<svg class="ex-libris-seal-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="46" stroke="currentColor" stroke-width="2" stroke-dasharray="3 3"/>
  <circle cx="50" cy="50" r="42" stroke="currentColor" stroke-width="1"/>
  <circle cx="50" cy="50" r="38" stroke="currentColor" stroke-width="1.5"/>
  <path d="M50 16L54 26L64 22L62 33L72 34L65 42L74 48L64 53L70 62L59 63L61 74L50 70L39 74L41 63L30 62L36 53L26 48L35 42L28 34L38 33L36 22L46 26L50 16Z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.2"/>
  <circle cx="50" cy="50" r="18" stroke="currentColor" stroke-width="1.2"/>
  <text x="50" y="54" text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="12" fill="currentColor">TNC</text>
  <path id="curve-top" d="M20 50 A30 30 0 0 1 80 50" fill="none"/>
  <text font-family="'Cinzel', serif" font-size="5.5" letter-spacing="2" fill="currentColor">
    <textPath href="#curve-top" startOffset="50%" text-anchor="middle">EX LIBRIS ARCHIVIS</textPath>
  </text>
</svg>
`;

// Laurel Branch Accent SVG for Honors & Laurels
const LAUREL_ACCENT = `
<svg class="laurel-accent-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 28C16 18 10 12 4 8C8 12 10 18 10 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M16 28C16 18 22 12 28 8C24 12 22 18 22 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="16" cy="10" r="2" fill="currentColor"/>
</svg>
`;

// Authentic Wax Seal Stamp SVG
const WAX_SEAL_STAMP = `
<svg class="wax-seal-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="40" r="36" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2.5"/>
  <circle cx="40" cy="40" r="30" stroke="currentColor" stroke-width="1" stroke-dasharray="2 3"/>
  <circle cx="40" cy="40" r="26" stroke="currentColor" stroke-width="1.5"/>
  <text x="40" y="38" text-anchor="middle" font-family="'Cinzel', serif" font-weight="700" font-size="10" fill="currentColor">TECHNOVATION</text>
  <text x="40" y="48" text-anchor="middle" font-family="'Cinzel', serif" font-size="7" letter-spacing="1.5" fill="currentColor">SEALED MMXXVI</text>
</svg>
`;

/**
 * Builds the running header for a page
 */
function buildRunningHeader(isLeft, bookData, page) {
  const leftMeta = `TECHNOVATION ARCHIVES · ${bookData.volume}`;
  const rightMeta = `${bookData.title.toUpperCase()} · ${page.headerLabel || page.chapterTitle || 'OFFICIAL RECORD'}`;

  return `
  <div class="page-running-head ${isLeft ? 'running-head-left' : 'running-head-right'}">
    <span class="running-head-text">${isLeft ? leftMeta : rightMeta}</span>
    <span class="running-head-rule"></span>
  </div>
  `;
}

/**
 * Builds the page footer with page number
 */
function buildPageFooter(isLeft, pageNum) {
  return `
  <div class="page-footer ${isLeft ? 'footer-left' : 'footer-right'}">
    <div class="footer-rule"></div>
    <div class="footer-meta">
      <span class="folio-num">${pageNum}</span>
      <span class="folio-decor">◆</span>
    </div>
  </div>
  `;
}

/**
 * Main dispatcher to render an inner page (Pages 2 through 15)
 */
export function renderBookPage(page, bookData, totalPages = 16) {
  const pageNum = page.pageNumber;
  const isLeft = pageNum % 2 === 0;
  const sideClass = isLeft ? 'page-left' : 'page-right';

  let bodyHtml = '';

  switch (page.type) {
    case 'bookplate':
      bodyHtml = renderBookplate(page, bookData);
      break;

    case 'frontispiece':
      bodyHtml = renderFrontispiece(page, bookData);
      break;

    case 'manifesto-spread-left':
      bodyHtml = renderManifestoLeft(page, bookData);
      break;

    case 'manifesto-spread-right':
      bodyHtml = renderManifestoRight(page, bookData);
      break;

    case 'pillars-left':
      bodyHtml = renderPillarsLeft(page, bookData);
      break;

    case 'pillars-right':
      bodyHtml = renderPillarsRight(page, bookData);
      break;

    case 'philosophy-left':
      bodyHtml = renderPhilosophyLeft(page, bookData);
      break;

    case 'philosophy-right':
      bodyHtml = renderPhilosophyRight(page, bookData);
      break;

    case 'timeline-left':
      bodyHtml = renderTimelineLeft(page, bookData);
      break;

    case 'timeline-right':
      bodyHtml = renderTimelineRight(page, bookData);
      break;

    case 'achievements-left':
      bodyHtml = renderAchievementsLeft(page, bookData);
      break;

    case 'achievements-right':
      bodyHtml = renderAchievementsRight(page, bookData);
      break;

    case 'team-spread-left':
      bodyHtml = renderTeamLeft(page, bookData);
      break;

    case 'closing-spread':
      bodyHtml = renderClosingSpread(page, bookData);
      break;

    default:
      bodyHtml = renderGenericEditorial(page, bookData);
      break;
  }

  return `
  <div class="page page-inner ${sideClass}" data-page="${pageNum}" data-density="soft">
    <!-- Physical Gutter Shadow & Spine Crease Overlay -->
    <div class="page-gutter-shadow ${isLeft ? 'gutter-right' : 'gutter-left'}"></div>
    <div class="page-paper-texture"></div>

    <!-- Paper Content Casing -->
    <div class="page-sheet-content">
      ${buildRunningHeader(isLeft, bookData, page)}
      <div class="page-body-container page-type-${page.type}">
        ${bodyHtml}
      </div>
      ${buildPageFooter(isLeft, pageNum)}
    </div>
  </div>
  `;
}

/* =========================================================================
   INDIVIDUAL SPREAD TEMPLATES
   ========================================================================= */

/** Page 2: Inside Cover & Bookplate (Ex Libris) */
function renderBookplate(page, bookData) {
  return `
  <div class="spread-bookplate">
    <div class="bookplate-frame">
      <div class="bookplate-corner tl"></div>
      <div class="bookplate-corner tr"></div>
      <div class="bookplate-corner bl"></div>
      <div class="bookplate-corner br"></div>

      <div class="bookplate-seal-box">
        ${EX_LIBRIS_SEAL}
      </div>

      <h2 class="bookplate-title">${page.title || 'Ex Libris Technovation'}</h2>
      <div class="bookplate-registry">
        <span class="reg-label">CHRONICLE REGISTRY NO.</span>
        <span class="reg-code">${page.registry || 'REG-MMXXVI-ARCHIVE'}</span>
      </div>

      <div class="bookplate-rule"></div>

      <p class="bookplate-inscription">
        ${page.inscription || 'This volume belongs to the permanent living archive of Technovation. Dedicated to the visionaries, coders, designers, and organizers who dare to build beyond the horizon.'}
      </p>

      <div class="bookplate-footer">
        <span class="bookplate-date">${page.date || 'Archived MMXXVI'}</span>
        <div class="bookplate-auth-stamp">
          <span class="stamp-tick">✓</span>
          <span>CURATED ARCHIVE COPY</span>
        </div>
      </div>
    </div>
  </div>
  `;
}

/** Page 3: Half-Title & Frontispiece */
function renderFrontispiece(page, bookData) {
  return `
  <div class="spread-frontispiece">
    <div class="frontispiece-header">
      <span class="frontispiece-label">${page.chapterLabel || 'PROLOGUE'}</span>
      <h2 class="frontispiece-heading">${page.heading || 'The Sparks in the Dark'}</h2>
      <div class="frontispiece-divider">
        <span class="flourish-diamond">◆</span>
      </div>
    </div>

    <div class="frontispiece-quote-card">
      <div class="quote-mark open">“</div>
      <blockquote class="frontispiece-quote-text">
        ${page.quote || 'In every generation, there are those who refuse to accept things as they are. They do not ask for permission to innovate.'}
      </blockquote>
      <div class="quote-mark close">”</div>
      <cite class="frontispiece-attribution">— ${page.attribution || 'Technovation Council Annals'}</cite>
    </div>

    <div class="frontispiece-seal-motif">
      <div class="motif-line"></div>
      <span class="motif-badge">${bookData.edition || 'FIRST ARCHIVE EDITION'}</span>
      <div class="motif-line"></div>
    </div>
  </div>
  `;
}

/** Page 4: Manifesto Left Spread */
function renderManifestoLeft(page, bookData) {
  const paragraphs = Array.isArray(page.bodyText) ? page.bodyText : [page.bodyText || ''];
  const firstPara = paragraphs[0] || '';
  const remainingParas = paragraphs.slice(1);
  const dropCapLetter = page.dropCap || firstPara.charAt(0) || 'W';
  const restOfFirstPara = firstPara.slice(dropCapLetter.length);

  return `
  <div class="spread-manifesto-left">
    <div class="chapter-lead-block">
      <span class="chapter-roman-badge">${page.chapterNumber || 'CHAPTER I'}</span>
      <h2 class="chapter-display-title">${page.chapterTitle || 'The Genesis'}</h2>
      <p class="chapter-subheading">${page.subheading || 'HOW DISRUPTION WAS BORN'}</p>
    </div>

    <div class="editorial-columns">
      <p class="para-dropcap">
        <span class="dropcap-letter">${dropCapLetter}</span>
        ${restOfFirstPara}
      </p>

      ${remainingParas.map(p => `<p class="para-standard">${p}</p>`).join('')}
    </div>

    ${page.pullQuote ? `
    <aside class="editorial-pullquote">
      <div class="pullquote-bar"></div>
      <p class="pullquote-content">“${page.pullQuote}”</p>
    </aside>
    ` : ''}
  </div>
  `;
}

/** Page 5: Manifesto Right Spread */
function renderManifestoRight(page, bookData) {
  const paragraphs = Array.isArray(page.bodyText) ? page.bodyText : [page.bodyText || ''];
  const stats = page.stats || [];

  return `
  <div class="spread-manifesto-right">
    <div class="spread-section-header">
      <h3 class="section-micro-heading">${page.headerLabel || 'FOUNDATION & PURPOSE'}</h3>
      <div class="section-micro-line"></div>
    </div>

    <div class="editorial-paragraphs">
      ${paragraphs.map(p => `<p class="para-standard">${p}</p>`).join('')}
    </div>

    ${stats.length > 0 ? `
    <div class="manifesto-stats-grid">
      ${stats.map(s => `
      <div class="stat-card">
        <span class="stat-number">${s.number}</span>
        <span class="stat-label">${s.label}</span>
      </div>
      `).join('')}
    </div>
    ` : ''}

    <div class="archival-vignette">
      <span class="vignette-icon">❦</span>
      <p class="vignette-text">Archived under Section 102 · General Assemblies</p>
    </div>
  </div>
  `;
}

/** Page 6: Pillars Left Spread */
function renderPillarsLeft(page, bookData) {
  const pillars = page.pillars || [];

  return `
  <div class="spread-pillars-left">
    <div class="chapter-lead-block">
      <span class="chapter-roman-badge">${page.chapterNumber || 'CHAPTER II'}</span>
      <h2 class="chapter-display-title">${page.chapterTitle || 'Vision & Mission'}</h2>
      <p class="chapter-subheading">${page.subheading || 'THE DUAL HORIZON'}</p>
    </div>

    <div class="vision-feature-box">
      <div class="feature-tag">
        <span class="feature-star">★</span>
        <span>${page.visionTitle || 'Our Vision'}</span>
      </div>
      <p class="feature-body-text">${page.visionBody || ''}</p>
    </div>

    <div class="pillars-list">
      ${pillars.map(pil => `
      <div class="pillar-item">
        <div class="pillar-code-badge">${pil.code}</div>
        <div class="pillar-details">
          <h4 class="pillar-item-title">${pil.title}</h4>
          <p class="pillar-item-desc">${pil.desc}</p>
        </div>
      </div>
      `).join('')}
    </div>
  </div>
  `;
}

/** Page 7: Pillars Right Spread */
function renderPillarsRight(page, bookData) {
  const pillars = page.pillars || [];

  return `
  <div class="spread-pillars-right">
    <div class="spread-section-header">
      <h3 class="section-micro-heading">${page.headerLabel || 'OUR SACRED PILLARS'}</h3>
      <div class="section-micro-line"></div>
    </div>

    <div class="mission-feature-box">
      <div class="feature-tag">
        <span class="feature-star">★</span>
        <span>${page.missionTitle || 'Our Mission'}</span>
      </div>
      <p class="feature-body-text">${page.missionBody || ''}</p>
    </div>

    <div class="pillars-list">
      ${pillars.map(pil => `
      <div class="pillar-item">
        <div class="pillar-code-badge">${pil.code}</div>
        <div class="pillar-details">
          <h4 class="pillar-item-title">${pil.title}</h4>
          <p class="pillar-item-desc">${pil.desc}</p>
        </div>
      </div>
      `).join('')}
    </div>
  </div>
  `;
}

/** Page 8: Philosophy Left Spread */
function renderPhilosophyLeft(page, bookData) {
  const cols = page.textColumns || [];

  return `
  <div class="spread-philosophy-left">
    <div class="chapter-lead-block">
      <span class="chapter-roman-badge">${page.chapterNumber || 'CHAPTER III'}</span>
      <h2 class="chapter-display-title">${page.chapterTitle || 'Our Philosophy'}</h2>
      <p class="chapter-subheading">${page.subheading || 'THE CRAFT OF DOING'}</p>
    </div>

    ${page.doctrine ? `
    <div class="doctrine-callout">
      <div class="doctrine-bar"></div>
      <p class="doctrine-text">“${page.doctrine}”</p>
    </div>
    ` : ''}

    <div class="philosophy-two-column">
      ${cols.map(c => `<p class="philosophy-col-text">${c}</p>`).join('')}
    </div>
  </div>
  `;
}

/** Page 9: Philosophy Right Spread */
function renderPhilosophyRight(page, bookData) {
  const principles = page.principles || [];

  return `
  <div class="spread-philosophy-right">
    <div class="spread-section-header">
      <h3 class="section-micro-heading">${page.headerLabel || 'TENETS OF THE WORKSHOP'}</h3>
      <div class="section-micro-line"></div>
    </div>

    <div class="principles-stack">
      ${principles.map(p => `
      <div class="principle-card">
        <div class="principle-num-circle">${p.num}</div>
        <div class="principle-card-body">
          <h4 class="principle-card-title">${p.title}</h4>
          <p class="principle-card-text">${p.text}</p>
        </div>
      </div>
      `).join('')}
    </div>

    <div class="philosophy-closing-flourish">
      <span>— ENDURING VALUES —</span>
    </div>
  </div>
  `;
}

/** Page 10: Timeline Left Spread */
function renderTimelineLeft(page, bookData) {
  const milestones = page.milestones || [];

  return `
  <div class="spread-timeline-left">
    <div class="chapter-lead-block">
      <span class="chapter-roman-badge">${page.chapterNumber || 'CHAPTER IV'}</span>
      <h2 class="chapter-display-title">${page.chapterTitle || 'The Journey'}</h2>
      <p class="chapter-subheading">${page.subheading || 'EPOCHS OF EXPANSION'}</p>
    </div>

    <div class="timeline-chronicle">
      <div class="timeline-vertical-spine"></div>
      ${milestones.map(m => `
      <div class="timeline-node">
        <div class="timeline-bullet"></div>
        <div class="timeline-node-card">
          <span class="timeline-year">${m.year}</span>
          <h4 class="timeline-title">${m.title}</h4>
          <p class="timeline-desc">${m.desc}</p>
        </div>
      </div>
      `).join('')}
    </div>
  </div>
  `;
}

/** Page 11: Timeline Right Spread */
function renderTimelineRight(page, bookData) {
  const milestones = page.milestones || [];

  return `
  <div class="spread-timeline-right">
    <div class="spread-section-header">
      <h3 class="section-micro-heading">${page.headerLabel || 'MILESTONES IN MOTION'}</h3>
      <div class="section-micro-line"></div>
    </div>

    <div class="timeline-chronicle">
      <div class="timeline-vertical-spine"></div>
      ${milestones.map(m => `
      <div class="timeline-node">
        <div class="timeline-bullet"></div>
        <div class="timeline-node-card">
          <span class="timeline-year">${m.year}</span>
          <h4 class="timeline-title">${m.title}</h4>
          <p class="timeline-desc">${m.desc}</p>
        </div>
      </div>
      `).join('')}
    </div>

    ${page.quote ? `
    <div class="timeline-closing-quote">
      <p class="quote-text">“${page.quote}”</p>
    </div>
    ` : ''}
  </div>
  `;
}

/** Page 12: Achievements Left Spread */
function renderAchievementsLeft(page, bookData) {
  const awards = page.awards || [];

  return `
  <div class="spread-achievements-left">
    <div class="chapter-lead-block">
      <span class="chapter-roman-badge">${page.chapterNumber || 'CHAPTER V'}</span>
      <h2 class="chapter-display-title">${page.chapterTitle || 'Honors & Laurels'}</h2>
      <p class="chapter-subheading">${page.subheading || 'RECOGNITION IN THE ARENA'}</p>
    </div>

    <div class="awards-stack">
      ${awards.map(a => `
      <div class="award-card">
        <div class="award-laurel-icon">${LAUREL_ACCENT}</div>
        <div class="award-details">
          <div class="award-top-row">
            <h4 class="award-title">${a.title}</h4>
            <span class="award-year">${a.year}</span>
          </div>
          <p class="award-source">${a.source}</p>
        </div>
      </div>
      `).join('')}
    </div>
  </div>
  `;
}

/** Page 13: Achievements Right Spread */
function renderAchievementsRight(page, bookData) {
  const callouts = page.callouts || [];

  return `
  <div class="spread-achievements-right">
    <div class="spread-section-header">
      <h3 class="section-micro-heading">${page.headerLabel || 'MEASURABLE IMPACT'}</h3>
      <div class="section-micro-line"></div>
    </div>

    <div class="impact-hero-card">
      <span class="impact-metric">${page.highlightMetric || '10,000+'}</span>
      <p class="impact-description">${page.highlightDesc || 'Hours committed to building software, hardware, and community experiences.'}</p>
    </div>

    <div class="callouts-stack">
      ${callouts.map((c, i) => `
      <div class="callout-item">
        <span class="callout-bullet">❦</span>
        <p class="callout-text">${c}</p>
      </div>
      `).join('')}
    </div>
  </div>
  `;
}

/** Page 14: Meet the Team Left Spread */
function renderTeamLeft(page, bookData) {
  const roles = page.roles || [];

  return `
  <div class="spread-team-left">
    <div class="chapter-lead-block">
      <span class="chapter-roman-badge">${page.chapterNumber || 'CHAPTER VI'}</span>
      <h2 class="chapter-display-title">${page.chapterTitle || 'The Council'}</h2>
      <p class="chapter-subheading">${page.subheading || 'GUARDIANS OF THE ARCHIVE'}</p>
    </div>

    <p class="team-note-para">${page.teamNote || 'Behind every milestone stands a committed collective of student architects, engineers, designers, and organizers.'}</p>

    <div class="roles-roster">
      ${roles.map(r => `
      <div class="role-roster-row">
        <div class="role-badge">
          <span class="role-badge-diamond">◆</span>
          <span class="role-title">${r.role}</span>
        </div>
        <p class="role-duty">${r.duty}</p>
      </div>
      `).join('')}
    </div>
  </div>
  `;
}

/** Page 15: Closing Note & The Oath Spread */
function renderClosingSpread(page, bookData) {
  const lines = page.oathLines || [];

  return `
  <div class="spread-closing">
    <div class="spread-section-header">
      <h3 class="section-micro-heading">${page.headerLabel || 'EPILOGUE & OATH'}</h3>
      <div class="section-micro-line"></div>
    </div>

    <div class="oath-monumental-card">
      <h2 class="oath-title">${page.closingTitle || 'The Technovation Oath'}</h2>
      <div class="oath-divider">
        <span class="oath-star">★</span>
      </div>

      <div class="oath-stanzas">
        ${lines.map(line => `<p class="oath-line">${line}</p>`).join('')}
      </div>

      <div class="oath-seal-block">
        <div class="oath-wax-seal">
          ${WAX_SEAL_STAMP}
        </div>
        <div class="oath-signatures">
          <p class="oath-signoff">${page.signoff || 'Signed and Sealed by the Executive Council · Technovation MMXXVI'}</p>
          <span class="oath-registry-stamp">${page.sealLabel || 'AUTHENTIC ARCHIVE COPY'}</span>
        </div>
      </div>
    </div>
  </div>
  `;
}

/** Fallback Generic Editorial Spread */
function renderGenericEditorial(page, bookData) {
  return `
  <div class="spread-generic">
    <div class="chapter-lead-block">
      <h2 class="chapter-display-title">${page.title || bookData.title}</h2>
    </div>
    <div class="editorial-paragraphs">
      ${(page.bodyText || []).map(p => `<p class="para-standard">${p}</p>`).join('')}
    </div>
  </div>
  `;
}
