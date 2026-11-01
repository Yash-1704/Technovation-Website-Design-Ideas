/**
 * TECHNOVATION STORY ARCHIVES - FULL-VIEWPORT EDITORIAL PAGE TEMPLATES
 * Generates rich, authentic, 100vw × 100vh full-screen physical paper pages.
 * Responsive for desktop (wide landscape sheet) and mobile (portrait sheet).
 */

export class FullScreenPages {
  /**
   * Generates HTML string for a specific page of a department
   * @param {Object} pageData - Page metadata and content from FULLSCREEN_DEPARTMENT_PAGES
   * @param {Object} deptData - Department metadata (title, volume, color, etc.)
   * @param {number} totalPages - Total page count (normally 7)
   * @returns {string} HTML string
   */
  static renderPage(pageData, deptData, totalPages = 7) {
    if (!pageData) return '<div class="fsp-empty">No content available</div>';

    const pNum = pageData.pageNumber || 1;
    const formattedNum = String(pNum).padStart(2, '0');
    const formattedTotal = String(totalPages).padStart(2, '0');

    let contentHtml = '';
    switch (pageData.type) {
      case 'intro':
        contentHtml = this.renderIntroPage(pageData, deptData);
        break;
      case 'philosophy':
        contentHtml = this.renderPhilosophyPage(pageData, deptData);
        break;
      case 'pillars':
        contentHtml = this.renderPillarsPage(pageData, deptData);
        break;
      case 'portfolio':
        contentHtml = this.renderPortfolioPage(pageData, deptData);
        break;
      case 'timeline':
        contentHtml = this.renderTimelinePage(pageData, deptData);
        break;
      case 'team':
        contentHtml = this.renderTeamPage(pageData, deptData);
        break;
      case 'oath':
        contentHtml = this.renderOathPage(pageData, deptData);
        break;
      case 'completed':
        contentHtml = this.renderCompletedPage(pageData, deptData, totalPages);
        break;
      default:
        contentHtml = this.renderGenericPage(pageData, deptData);
        break;
    }

    return `
      <div class="fsp-sheet-inner" data-page="${pNum}">
        <!-- Paper Texture & Ambient Lighting Overlays -->
        <div class="fsp-paper-grain"></div>
        <div class="fsp-paper-vignette"></div>
        <div class="fsp-paper-crease-left"></div>

        <!-- Top Editorial Running Header -->
        <header class="fsp-header">
          <div class="fsp-header-left">
            <span class="fsp-hdr-badge">
              ${deptData.volume || 'VOL. 01'}
            </span>
            <span class="fsp-hdr-dept">${deptData.department || 'Technovation'}</span>
          </div>
          <div class="fsp-header-center">
            <span class="fsp-hdr-label">${pageData.chapterLabel || deptData.title || ''}</span>
          </div>
          <div class="fsp-header-right">
            <span class="fsp-hdr-date">ARCHIVE MMXXVI</span>
          </div>
        </header>

        <!-- Main Page Editorial Body -->
        <main class="fsp-body fsp-type-${pageData.type}">
          ${contentHtml}
        </main>

        <!-- Bottom Editorial Running Footer / Folio -->
        <footer class="fsp-footer">
          <div class="fsp-footer-left">
            <span class="fsp-ftr-meta">TECHNOVATION STORY ARCHIVES · ABES NETWORKING CLUB</span>
          </div>
          <div class="fsp-footer-center">
            <div class="fsp-pagination-dots">
              ${Array.from({ length: totalPages }, (_, i) => `
                <span class="fsp-dot ${i + 1 === pNum ? 'is-active' : ''}"></span>
              `).join('')}
            </div>
          </div>
          <div class="fsp-footer-right">
            <span class="fsp-ftr-folio">PAGE ${formattedNum} / ${formattedTotal}</span>
          </div>
        </footer>
      </div>
    `;
  }

  /* --- 1. INTRO / MANIFESTO TEMPLATE --- */
  static renderIntroPage(page, dept) {
    const paragraphs = (page.bodyText || []).map((text, idx) => {
      if (idx === 0 && page.dropCap) {
        return `<p class="fsp-p fsp-has-dropcap"><span class="fsp-dropcap">${page.dropCap}</span>${text}</p>`;
      }
      return `<p class="fsp-p">${text}</p>`;
    }).join('');

    return `
      <div class="fsp-layout-intro">
        <div class="fsp-intro-head">
          <span class="fsp-kicker">${page.subheading || ''}</span>
          <h1 class="fsp-headline">${page.headline || ''}</h1>
          <div class="fsp-ornament-line">
            <span class="fsp-ornament-diamond"></span>
          </div>
        </div>

        <div class="fsp-intro-columns">
          <div class="fsp-col-primary">
            ${paragraphs}
          </div>
          <div class="fsp-col-secondary">
            ${page.quote ? `
              <blockquote class="fsp-quote">
                <span class="fsp-quote-mark">“</span>
                <p class="fsp-quote-text">${page.quote}</p>
                <cite class="fsp-quote-cite">— ${dept.department} Doctrine</cite>
              </blockquote>
            ` : ''}

            <div class="fsp-stamp-box">
              <div class="fsp-stamp-inner">
                <div class="fsp-stamp-title">OFFICIAL RECORD</div>
                <div class="fsp-stamp-motto">${dept.motto || 'Veritas et Architectura'}</div>
                <div class="fsp-stamp-id">${page.meta || 'RECORD #TN-2026'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /* --- 2. PHILOSOPHY TEMPLATE --- */
  static renderPhilosophyPage(page, dept) {
    const paragraphs = (page.bodyText || []).map((text, idx) => {
      if (idx === 0 && page.dropCap) {
        return `<p class="fsp-p fsp-has-dropcap"><span class="fsp-dropcap">${page.dropCap}</span>${text}</p>`;
      }
      return `<p class="fsp-p">${text}</p>`;
    }).join('');

    const principlesHtml = (page.principles || []).map(p => `
      <div class="fsp-principle-card">
        <div class="fsp-pcard-header">
          <span class="fsp-pcard-num">${p.num}</span>
          <h3 class="fsp-pcard-title">${p.title}</h3>
        </div>
        <p class="fsp-pcard-desc">${p.desc}</p>
      </div>
    `).join('');

    return `
      <div class="fsp-layout-philosophy">
        <div class="fsp-intro-head">
          <span class="fsp-kicker">${page.subheading || 'CORE PHILOSOPHY'}</span>
          <h2 class="fsp-headline">${page.headline || ''}</h2>
          <div class="fsp-ornament-line">
            <span class="fsp-ornament-diamond"></span>
          </div>
        </div>

        <div class="fsp-philosophy-lead">
          ${paragraphs}
        </div>

        <div class="fsp-principles-grid">
          ${principlesHtml}
        </div>
      </div>
    `;
  }

  /* --- 3. PILLARS / DISCIPLINES TEMPLATE --- */
  static renderPillarsPage(page, dept) {
    const pillarsHtml = (page.pillars || []).map(pillar => `
      <div class="fsp-pillar-card">
        <div class="fsp-plcard-top">
          <span class="fsp-plcard-code">${pillar.code || '•'}</span>
          <h3 class="fsp-plcard-title">${pillar.title}</h3>
        </div>
        ${pillar.tech ? `<div class="fsp-plcard-tech">${pillar.tech}</div>` : ''}
        <p class="fsp-plcard-desc">${pillar.desc}</p>
      </div>
    `).join('');

    return `
      <div class="fsp-layout-pillars">
        <div class="fsp-intro-head">
          <span class="fsp-kicker">${page.subheading || 'CORE PILLARS'}</span>
          <h2 class="fsp-headline">${page.headline || ''}</h2>
          <div class="fsp-ornament-line">
            <span class="fsp-ornament-diamond"></span>
          </div>
        </div>

        <div class="fsp-pillars-grid">
          ${pillarsHtml}
        </div>
      </div>
    `;
  }

  /* --- 4. PORTFOLIO & PROJECTS TEMPLATE --- */
  static renderPortfolioPage(page, dept) {
    const projects = page.projects || page.stats || [];
    const projectsHtml = projects.map(proj => `
      <div class="fsp-project-card">
        <div class="fsp-proj-tag">
          ${proj.tag || 'SHOWCASE'}
        </div>
        <h3 class="fsp-proj-title">${proj.title}</h3>
        <p class="fsp-proj-desc">${proj.desc}</p>
        ${proj.stat ? `
          <div class="fsp-proj-stat">
            <span class="fsp-stat-val">${proj.stat}</span>
            <span class="fsp-stat-label">Production Metric</span>
          </div>
        ` : ''}
      </div>
    `).join('');

    return `
      <div class="fsp-layout-portfolio">
        <div class="fsp-intro-head">
          <span class="fsp-kicker">${page.subheading || 'PORTFOLIO & FOOTPRINT'}</span>
          <h2 class="fsp-headline">${page.headline || ''}</h2>
          <div class="fsp-ornament-line">
            <span class="fsp-ornament-diamond"></span>
          </div>
        </div>

        <div class="fsp-portfolio-grid">
          ${projectsHtml}
        </div>
      </div>
    `;
  }

  /* --- 5. TIMELINE / EPOCHS TEMPLATE --- */
  static renderTimelinePage(page, dept) {
    const milestones = page.milestones || [];
    const milestonesHtml = milestones.map((m, idx) => `
      <div class="fsp-timeline-node">
        <div class="fsp-tline-marker">
          <span class="fsp-tline-dot"></span>
        </div>
        <div class="fsp-tline-content">
          <div class="fsp-tline-year">${m.year}</div>
          <h3 class="fsp-tline-title">${m.title}</h3>
          <p class="fsp-tline-desc">${m.desc}</p>
        </div>
      </div>
    `).join('');

    return `
      <div class="fsp-layout-timeline">
        <div class="fsp-intro-head">
          <span class="fsp-kicker">${page.subheading || 'HISTORIC TIMELINE'}</span>
          <h2 class="fsp-headline">${page.headline || ''}</h2>
          <div class="fsp-ornament-line">
            <span class="fsp-ornament-diamond"></span>
          </div>
        </div>

        <div class="fsp-timeline-track">
          ${milestonesHtml}
        </div>
      </div>
    `;
  }

  /* --- 6. TEAM / ROSTER TEMPLATE --- */
  static renderTeamPage(page, dept) {
    const roles = page.roles || [];
    const rolesHtml = roles.map(r => `
      <div class="fsp-role-card">
        <div class="fsp-role-name">${r.role}</div>
        <div class="fsp-role-duty">${r.duty}</div>
      </div>
    `).join('');

    return `
      <div class="fsp-layout-team">
        <div class="fsp-intro-head">
          <span class="fsp-kicker">${page.subheading || 'COUNCIL ROSTER'}</span>
          <h2 class="fsp-headline">${page.headline || ''}</h2>
          <div class="fsp-ornament-line">
            <span class="fsp-ornament-diamond"></span>
          </div>
        </div>

        <div class="fsp-team-grid">
          ${rolesHtml}
        </div>
      </div>
    `;
  }

  /* --- 7. OATH & SOLEMN COVENANT TEMPLATE --- */
  static renderOathPage(page, dept) {
    const stanzasHtml = (page.stanzas || []).map(s => `
      <div class="fsp-oath-stanza">
        <span class="fsp-stanza-bullet">✦</span>
        <p class="fsp-stanza-text">${s}</p>
      </div>
    `).join('');

    return `
      <div class="fsp-layout-oath">
        <div class="fsp-intro-head">
          <span class="fsp-kicker">${page.subheading || 'SOLEMN PLEDGE'}</span>
          <h2 class="fsp-headline">${page.headline || ''}</h2>
          <div class="fsp-ornament-line">
            <span class="fsp-ornament-diamond"></span>
          </div>
        </div>

        <div class="fsp-oath-body">
          <div class="fsp-stanzas-list">
            ${stanzasHtml}
          </div>

          <div class="fsp-seal-wrapper">
            <!-- Authentic Red Wax Seal Graphic -->
            <div class="fsp-wax-seal">
              <svg viewBox="0 0 100 100" class="fsp-wax-seal-svg">
                <circle cx="50" cy="50" r="46" fill="#8B1D1D" stroke="#5A0F0F" stroke-width="2.5"/>
                <circle cx="50" cy="50" r="39" fill="none" stroke="#D4AF37" stroke-dasharray="3,2" stroke-width="1.2"/>
                <path d="M50 20 L58 37 L77 37 L62 48 L68 66 L50 54 L32 66 L38 48 L23 37 L42 37 Z" fill="#D4AF37" opacity="0.9"/>
                <text x="50" y="82" font-size="7" font-weight="700" fill="#FBF8F2" text-anchor="middle" font-family="'Inter Tight', system-ui, sans-serif" letter-spacing="1.5">TECHNOVATION</text>
              </svg>
              <div class="fsp-wax-highlight"></div>
            </div>

            <div class="fsp-signoff-block">
              <div class="fsp-signoff-line">${page.signoff || 'Sealed by the Directorate'}</div>
              <div class="fsp-registry-code">${page.registry || 'AUTHENTIC ARCHIVE COPY'}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /* --- 8. BOOK COMPLETED / ARCHIVE CONCLUDED TEMPLATE --- */
  static renderCompletedPage(page, dept) {
    return `
      <div class="fsp-layout-completed">
        <div class="fsp-completed-head">
          <div class="fsp-completed-badge">
            <svg viewBox="0 0 24 24" class="fsp-completed-check-icon">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>ARCHIVE RECORD COMPLETE</span>
          </div>
          <h1 class="fsp-headline fsp-completed-title">Book Completed</h1>
          <div class="fsp-ornament-line">
            <span class="fsp-ornament-reticle">
              <span class="fsp-ornament-dot"></span>
            </span>
          </div>
        </div>

        <p class="fsp-p fsp-completed-lead">
          You have traversed the complete chronicle of the <strong>${dept.department}</strong>. All foundational philosophies, systems architecture, historic milestones, and council covenants have been reviewed and committed to memory.
        </p>

        <div class="fsp-completed-card">
          <div class="fsp-ccard-row">
            <span class="fsp-ccard-lbl">DEPARTMENT</span>
            <span class="fsp-ccard-val">${dept.department}</span>
          </div>
          <div class="fsp-ccard-row">
            <span class="fsp-ccard-lbl">VOLUME & EDITION</span>
            <span class="fsp-ccard-val">${dept.volume || 'VOL. 01'} · ${dept.edition || 'MMXXVI'}</span>
          </div>
          <div class="fsp-ccard-row">
            <span class="fsp-ccard-lbl">STATUS</span>
            <span class="fsp-ccard-val fsp-ccard-status">✦ VERIFIED & SEALED</span>
          </div>
          <div class="fsp-ccard-row">
            <span class="fsp-ccard-lbl">REGISTRY ID</span>
            <span class="fsp-ccard-val fsp-registry-hash">#TN-2026-${(dept.id || 'ARCHIVE').toUpperCase()}-FINAL</span>
          </div>
        </div>

        <div class="fsp-completed-actions">
          <button class="fsp-action-btn fsp-btn-dept" id="fsp-btn-return-dept" type="button" aria-label="Return to Overview">
            <svg viewBox="0 0 24 24" class="fsp-btn-icon">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <div class="fsp-btn-text-group">
              <span class="fsp-btn-label">RETURN TO OVERVIEW</span>
              <span class="fsp-btn-sub">Back to chapter overview & book cover</span>
            </div>
          </button>

          <button class="fsp-action-btn fsp-btn-shelf" id="fsp-btn-return-shelf" type="button" aria-label="Return to Bookshelf">
            <svg viewBox="0 0 24 24" class="fsp-btn-icon">
              <rect x="4" y="3" width="6" height="18" rx="1"></rect>
              <rect x="14" y="3" width="6" height="18" rx="1"></rect>
            </svg>
            <div class="fsp-btn-text-group">
              <span class="fsp-btn-label">RETURN TO BOOKSHELF</span>
              <span class="fsp-btn-sub">Return to the 3D animated shelf</span>
            </div>
          </button>
        </div>
      </div>
    `;
  }

  /* --- GENERIC FALLBACK TEMPLATE --- */
  static renderGenericPage(page, dept) {
    return `
      <div class="fsp-layout-generic">
        <h2 class="fsp-headline">${page.headline || 'Chapter Page'}</h2>
        <div class="fsp-generic-content">
          ${(page.bodyText || []).map(t => `<p class="fsp-p">${t}</p>`).join('')}
        </div>
      </div>
    `;
  }
}
