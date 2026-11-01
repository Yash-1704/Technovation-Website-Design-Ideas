export const SHELF_BOOKS = [
      {
        id: 'noon',
        vol: 'VOL. 01',
        chapter: 'CHAPTER 01',
        spineTitle: 'ABOUT US',
        title: 'About Us: The Genesis',
        romaji: 'THE GENESIS',
        tag: 'CHAPTER 01 · FOUNDATION & PURPOSE',
        meta: 'CHAPTER 01 / STORY / FOUNDATION & PURPOSE',
        tagline: 'FOUNDATION & PURPOSE',
        synopsis: 'We are a collective of creators, builders, thinkers, and disruptors united by an insatiable hunger to leave a mark. Born from late-night brainstorms in university halls, our club was founded on a simple truth: the most groundbreaking ideas don\'t happen in isolation—they happen when divergent minds collide. From our very first prototype to our grandest exhibitions, we foster an environment where curiosity is celebrated, failure is a stepping stone, and every member finds their voice.',
        credit: 'Authored by The Executive Council. Official Record',
        actionBtn: 'EXPLORE OUR MANIFESTO',
        // Spine Icon: Compass Star
        spineIconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="1.8"><polygon points="12,2 14.5,9.5 22,12 14.5,14.5 12,22 9.5,14.5 2,12 9.5,9.5"/><circle cx="12" cy="12" r="2.5" fill="#F59E0B"/></svg>`,
        // Cover Graphic: Celestial Compass Orbit
        graphicSvg: `
          <svg viewBox="0 0 160 160" fill="none">
            <circle cx="80" cy="80" r="68" stroke="rgba(245, 158, 11, 0.35)" stroke-width="1.2" stroke-dasharray="4 3"/>
            <circle cx="80" cy="80" r="52" stroke="rgba(245, 158, 11, 0.55)" stroke-width="1.2"/>
            <circle cx="80" cy="80" r="36" stroke="rgba(245, 158, 11, 0.25)" stroke-width="1"/>
            <polygon points="80,18 86,68 136,74 86,80 80,130 74,80 24,74 74,68" fill="url(#grad-gold)" opacity="0.95"/>
            <polygon points="80,32 84,72 124,76 84,80 80,116 76,80 36,76 76,72" fill="#FFFFFF" opacity="0.45"/>
            <circle cx="80" cy="74" r="5" fill="#FFFFFF"/>
            <line x1="80" y1="8" x2="80" y2="140" stroke="rgba(245, 158, 11, 0.4)" stroke-width="1"/>
            <line x1="14" y1="74" x2="146" y2="74" stroke="rgba(245, 158, 11, 0.4)" stroke-width="1"/>
          </svg>
        `
      },
      {
        id: 'green',
        vol: 'VOL. 02',
        chapter: 'CHAPTER 02',
        spineTitle: 'TECHNICAL',
        title: 'Technical: The Architects',
        romaji: 'THE ARCHITECTS',
        tag: 'CHAPTER 02 · SYSTEMS & CODE',
        meta: 'CHAPTER 02 / ENGINEERING / COMPUTATION & LABS',
        tagline: 'SYSTEMS & CODE',
        synopsis: 'The digital backbone of our vision. The Technical Division transforms ambitious concepts into resilient code, intelligent algorithms, and tactile hardware. From architecting full-stack web platforms and cloud infrastructure to training machine learning models and engineering embedded IoT gadgets, we turn complex logic into seamless human experiences. We don\'t just use technology—we dismantle, understand, and recreate it.',
        credit: 'Engineered by the Technical Directorate. Systems Archive',
        actionBtn: 'VIEW TECH STACK & REPOS',
        // Spine Icon: Microchip
        spineIconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="#06B6D4" stroke-width="1.8"><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/></svg>`,
        // Cover Graphic: Circuit Matrix Core
        graphicSvg: `
          <svg viewBox="0 0 160 160" fill="none">
            <polygon points="80,15 135,46 135,108 80,139 25,108 25,46" stroke="rgba(6, 182, 212, 0.45)" stroke-width="1.5" stroke-dasharray="6 4"/>
            <path d="M38 55 H65 V72 H80" stroke="rgba(16, 185, 129, 0.75)" stroke-width="1.6"/>
            <path d="M122 55 H95 V72 H80" stroke="rgba(6, 182, 212, 0.75)" stroke-width="1.6"/>
            <path d="M38 95 H65 V82 H80" stroke="rgba(16, 185, 129, 0.75)" stroke-width="1.6"/>
            <path d="M122 95 H95 V82 H80" stroke="rgba(6, 182, 212, 0.75)" stroke-width="1.6"/>
            <rect x="62" y="59" width="36" height="36" rx="4" fill="rgba(10, 18, 26, 0.9)" stroke="url(#grad-cyan)" stroke-width="2"/>
            <circle cx="80" cy="77" r="8" fill="url(#grad-cyan)" opacity="0.95"/>
            <path d="M50 70 L44 77 L50 84" stroke="rgba(6, 182, 212, 0.95)" stroke-width="2" stroke-linecap="round"/>
            <path d="M110 70 L116 77 L110 84" stroke="rgba(16, 185, 129, 0.95)" stroke-width="2" stroke-linecap="round"/>
          </svg>
        `
      },
      {
        id: 'graphics',
        vol: 'VOL. 03',
        chapter: 'CHAPTER 03',
        spineTitle: 'GRAPHICS',
        title: 'Graphics: Visual Alchemy',
        romaji: 'VISUAL ALCHEMY',
        tag: 'CHAPTER 03 · IDENTITY & CANVAS',
        meta: 'CHAPTER 03 / CREATIVE / VISUAL DESIGN & BRAND',
        tagline: 'CANVAS & VECTOR',
        synopsis: 'The visual architects of Technovation’s aesthetic soul. The Graphics Division crafts the bold identity systems, 3D renders, illustrative posters, UI/UX conceptual wireframes, and kinetic motion graphics that make our club instantly recognizable. Balancing timeless editorial elegance with futuristic cyber aesthetics, our designers sculpt every pixel, gradient, and vector to tell stories that evoke wonder.',
        credit: 'Designed by Creative Guild & Visual Leads. Design Portfolio',
        actionBtn: 'VIEW DESIGN SHOWCASE',
        // Spine Icon: Vector Pen Tool
        spineIconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" stroke-width="1.8"><path d="M12 2L19 9L15 13L13 11L7 17L3 21L7 17L9 11L11 13Z"/><circle cx="15" cy="7" r="1.5" fill="#A78BFA"/></svg>`,
        // Cover Graphic: Isometric Cube & Bezier Canvas
        graphicSvg: `
          <svg viewBox="0 0 160 160" fill="none">
            <path d="M25 110 C40 45, 120 45, 135 110" stroke="rgba(167, 139, 250, 0.45)" stroke-width="1.5" stroke-dasharray="4 3"/>
            <line x1="40" y1="45" x2="120" y2="45" stroke="rgba(56, 189, 248, 0.35)" stroke-width="1"/>
            <rect x="36" y="41" width="8" height="8" fill="#A78BFA" stroke="#FFFFFF" stroke-width="1"/>
            <rect x="116" y="41" width="8" height="8" fill="#38BDF8" stroke="#FFFFFF" stroke-width="1"/>
            <circle cx="80" cy="45" r="3" fill="#FFFFFF"/>
            <polygon points="80,50 115,70 80,90 45,70" fill="url(#grad-graphics)" opacity="0.9" stroke="#FFFFFF" stroke-width="1"/>
            <polygon points="45,70 80,90 80,128 45,108" fill="rgba(99, 102, 241, 0.85)" stroke="#FFFFFF" stroke-width="1"/>
            <polygon points="115,70 80,90 80,128 115,108" fill="rgba(56, 189, 248, 0.75)" stroke="#FFFFFF" stroke-width="1"/>
            <circle cx="80" cy="90" r="4" fill="#FFFFFF"/>
            <path d="M60 135 C70 142, 90 142, 100 135" stroke="rgba(167, 139, 250, 0.6)" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        `
      },
      {
        id: 'storm',
        vol: 'VOL. 04',
        chapter: 'CHAPTER 04',
        spineTitle: 'PRODUCTION',
        title: 'Production: The Forge',
        romaji: 'THE FORGE',
        tag: 'CHAPTER 04 · LIGHTS & STAGE',
        meta: 'CHAPTER 04 / PRODUCTION / AUDIO-VISUAL & STAGE',
        tagline: 'LIGHTS & STAGE',
        synopsis: 'The alchemists of atmosphere and experience. Production commands the stage, the lens, and the decibels. We oversee immersive stage management, cinematic videography, spatial acoustics, lighting choreography, and live-event broadcast orchestration. When the auditorium goes dark and thousands of eyes fixate on the spotlight, that electric goosebump moment is designed, built, and operated down to the millisecond by our crew.',
        credit: 'Orchestrated by Stage Crew & Directors. Production Log',
        actionBtn: 'SEE LIVE SHOWREEL',
        // Spine Icon: Film Aperture
        spineIconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="#EC4899" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 7.8 4.5L12 12"/><path d="M19.8 7.5A9 9 0 0 1 21 12l-9 0"/><path d="M21 12a9 9 0 0 1-4.5 7.8L12 12"/><path d="M16.5 19.8A9 9 0 0 1 12 21l0-9"/><path d="M12 21a9 9 0 0 1-7.8-4.5L12 12"/><path d="M4.2 16.5A9 9 0 0 1 3 12l9 0"/><path d="M3 12a9 9 0 0 1 4.5-7.8L12 12"/></svg>`,
        // Cover Graphic: Aperture & Soundwave Stage
        graphicSvg: `
          <svg viewBox="0 0 160 160" fill="none">
            <polygon points="80,18 20,135 140,135" fill="rgba(236, 72, 153, 0.12)"/>
            <circle cx="80" cy="74" r="48" stroke="rgba(236, 72, 153, 0.35)" stroke-width="1.5"/>
            <circle cx="80" cy="74" r="34" stroke="rgba(139, 92, 246, 0.65)" stroke-width="1.2"/>
            <path d="M80 44 L95 60 L85 74" stroke="rgba(236, 72, 153, 0.95)" stroke-width="2" stroke-linecap="round"/>
            <path d="M106 60 L98 80 L84 76" stroke="rgba(139, 92, 246, 0.95)" stroke-width="2" stroke-linecap="round"/>
            <path d="M98 92 L78 90 L78 76" stroke="rgba(236, 72, 153, 0.95)" stroke-width="2" stroke-linecap="round"/>
            <path d="M68 92 L62 72 L76 70" stroke="rgba(139, 92, 246, 0.95)" stroke-width="2" stroke-linecap="round"/>
            <path d="M54 68 L72 56 L78 70" stroke="rgba(236, 72, 153, 0.95)" stroke-width="2" stroke-linecap="round"/>
            <circle cx="80" cy="74" r="8" fill="url(#grad-magenta)"/>
            <line x1="48" y1="126" x2="48" y2="136" stroke="rgba(236, 72, 153, 0.85)" stroke-width="3" stroke-linecap="round"/>
            <line x1="60" y1="118" x2="60" y2="136" stroke="rgba(139, 92, 246, 0.85)" stroke-width="3" stroke-linecap="round"/>
            <line x1="72" y1="112" x2="72" y2="136" stroke="rgba(236, 72, 153, 0.95)" stroke-width="3" stroke-linecap="round"/>
            <line x1="84" y1="108" x2="84" y2="136" stroke="rgba(139, 92, 246, 0.95)" stroke-width="3" stroke-linecap="round"/>
            <line x1="96" y1="116" x2="96" y2="136" stroke="rgba(236, 72, 153, 0.85)" stroke-width="3" stroke-linecap="round"/>
            <line x1="108" y1="124" x2="108" y2="136" stroke="rgba(139, 92, 246, 0.85)" stroke-width="3" stroke-linecap="round"/>
          </svg>
        `
      },
      {
        id: 'events',
        vol: 'VOL. 05',
        chapter: 'CHAPTER 05',
        spineTitle: 'EVENTS',
        title: 'Events: The Grand Arena',
        romaji: 'THE GRAND ARENA',
        tag: 'CHAPTER 05 · HACKATHONS & SUMMITS',
        meta: 'CHAPTER 05 / GATHERINGS / KEYNOTES & HACKATHONS',
        tagline: 'ARENAS & EXPERIENCES',
        synopsis: 'Where ideas transform into adrenaline and celebration. The Events Wing conceives, structures, and executes flagship hackathons, technical summits, design jams, and inter-college symposia. From hosting industry luminaries and judging roundtables to curating pulse-raising 36-hour code sprints, we turn campus spaces into epic battlegrounds of innovation, collaboration, and high-energy learning.',
        credit: 'Spearheaded by Events Directorate & Operations. Event Chronology',
        actionBtn: 'EXPLORE EVENT ARCHIVES',
        // Spine Icon: Arena Starburst
        spineIconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="#FB7185" stroke-width="1.8"><polygon points="12,2 15,8.5 22,9.5 17,14.5 18.5,21.5 12,18 5.5,21.5 7,14.5 2,9.5 9,8.5"/><circle cx="12" cy="12" r="2.5" fill="#FB7185"/></svg>`,
        // Cover Graphic: Arena Stage & Starburst
        graphicSvg: `
          <svg viewBox="0 0 160 160" fill="none">
            <ellipse cx="80" cy="120" rx="55" ry="18" stroke="rgba(251, 113, 133, 0.45)" stroke-width="1.2" stroke-dasharray="4 3"/>
            <path d="M35 120 L75 35 L85 35 L125 120 Z" fill="rgba(244, 63, 94, 0.08)"/>
            <line x1="35" y1="120" x2="75" y2="35" stroke="rgba(251, 113, 133, 0.6)" stroke-width="1.2"/>
            <line x1="125" y1="120" x2="85" y2="35" stroke="rgba(251, 146, 60, 0.6)" stroke-width="1.2"/>
            <circle cx="80" cy="65" r="32" stroke="rgba(251, 146, 60, 0.4)" stroke-width="1.2"/>
            <polygon points="80,45 85,58 98,60 88,70 91,83 80,76 69,83 72,70 62,60 75,58" fill="url(#grad-events)" stroke="#FFFFFF" stroke-width="1"/>
            <circle cx="80" cy="65" r="5" fill="#FFFFFF"/>
            <line x1="80" y1="20" x2="80" y2="38" stroke="rgba(251, 113, 133, 0.7)" stroke-width="2" stroke-linecap="round"/>
            <line x1="50" y1="30" x2="62" y2="42" stroke="rgba(251, 146, 60, 0.7)" stroke-width="1.5" stroke-linecap="round"/>
            <line x1="110" y1="30" x2="98" y2="42" stroke="rgba(251, 146, 60, 0.7)" stroke-width="1.5" stroke-linecap="round"/>
            <rect x="68" y="108" width="24" height="6" rx="2" fill="url(#grad-events)"/>
          </svg>
        `
      },
      {
        id: 'bluehour',
        vol: 'VOL. 06',
        chapter: 'CHAPTER 06',
        spineTitle: 'PR & OUTREACH',
        title: 'PR & Outreach: The Megaphone',
        romaji: 'THE MEGAPHONE',
        tag: 'CHAPTER 06 · VOICE & COMMUNITY',
        meta: 'CHAPTER 06 / OUTREACH / COMMUNITY & BRAND',
        tagline: 'VOICE & COMMUNITY',
        synopsis: 'A brilliant story deserves to be heard across the world. PR and Outreach is the connective tissue linking our club to industry giants, media partners, global alumni, and vibrant student communities. We architect viral social storytelling, curate brand aesthetics, manage sponsorships, and foster cross-university alliances. We ensure that our accomplishments resonate far beyond our campus gates.',
        credit: 'Curated by Public Relations & Liaisons. Outreach Records',
        actionBtn: 'PARTNER WITH US',
        // Spine Icon: Megaphone
        spineIconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="1.8"><path d="M3 11l18-5v12L3 13v-2z"/><path d="M11.6 16.8L13 22h-4l-.8-5.2"/></svg>`,
        // Cover Graphic: Megaphone & Pulse Waves
        graphicSvg: `
          <svg viewBox="0 0 160 160" fill="none">
            <path d="M98 48 A42 42 0 0 1 98 106" stroke="rgba(56, 189, 248, 0.45)" stroke-width="2" stroke-linecap="round"/>
            <path d="M110 36 A58 58 0 0 1 110 118" stroke="rgba(37, 99, 235, 0.6)" stroke-width="2" stroke-linecap="round"/>
            <path d="M122 24 A74 74 0 0 1 122 130" stroke="rgba(56, 189, 248, 0.75)" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 4"/>
            <path d="M42 66 L64 56 L88 44 V108 L64 96 L42 86 Z" fill="url(#grad-blue)" stroke="#FFFFFF" stroke-width="1.5"/>
            <path d="M42 66 H34 A4 4 0 0 0 30 70 V82 A4 4 0 0 0 34 86 H42 Z" fill="#1E293B" stroke="#FFFFFF" stroke-width="1.5"/>
            <path d="M48 86 L44 104 H54 L58 86" fill="#1E293B" stroke="#FFFFFF" stroke-width="1.5"/>
            <circle cx="88" cy="76" r="4" fill="#38BDF8"/>
          </svg>
        `
      },
      {
        id: 'observer',
        vol: 'VOL. 07',
        chapter: 'CHAPTER 07',
        spineTitle: 'CORE TEAM',
        title: 'Core Team: The Vanguard',
        romaji: 'THE VANGUARD',
        tag: 'CHAPTER 07 · STEWARDSHIP',
        meta: 'CHAPTER 07 / LEADERSHIP / CORE STEWARDS',
        tagline: 'LEADERSHIP & MINDS',
        synopsis: 'The heartbeat behind the momentum. The Core Team provides the strategic clarity, empathetic mentorship, and operational grit that turns aspirations into reality. Balancing long-term roadmaps with day-to-day execution, each lead champions psychological safety, interdisciplinary cross-pollination, and member empowerment. True leadership here isn\'t about giving orders—it\'s about clearing the path for others to shine.',
        credit: 'Governed by President & Chapter Leads. Executive Roster',
        actionBtn: 'MEET THE DIRECTORS',
        // Spine Icon: Shield Crest
        spineIconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="1.8"><path d="M12 2l8 4v6c0 5.5-3.8 10.7-8 12-4.2-1.3-8-6.5-8-12V6l8-4z"/><path d="M12 6v12"/></svg>`,
        // Cover Graphic: Vanguard Crest Shield
        graphicSvg: `
          <svg viewBox="0 0 160 160" fill="none">
            <path d="M80 20 L124 38 V78 C124 110 80 136 80 136 C80 136 36 110 36 78 V38 Z" stroke="url(#grad-shield)" stroke-width="2.5" fill="rgba(15, 20, 28, 0.85)"/>
            <path d="M80 32 L112 46 V76 C112 100 80 120 80 120 C80 120 48 100 48 76 V46 Z" stroke="rgba(245, 158, 11, 0.4)" stroke-width="1.2"/>
            <path d="M80 48 L96 66 H86 V92 H74 V66 H64 Z" fill="url(#grad-shield)"/>
            <circle cx="80" cy="40" r="3" fill="#FDE68A"/>
            <circle cx="64" cy="74" r="2.5" fill="#FDE68A"/>
            <circle cx="96" cy="74" r="2.5" fill="#FDE68A"/>
            <circle cx="80" cy="104" r="3" fill="#FDE68A"/>
          </svg>
        `
      },
      {
        id: 'door',
        vol: 'VOL. 08',
        chapter: 'CHAPTER 08',
        spineTitle: 'LEGACY',
        title: 'Legacy: Hall of Echoes',
        romaji: 'HALL OF ECHOES',
        tag: 'CHAPTER 08 · HERITAGE & ALUMNI',
        meta: 'CHAPTER 08 / HERITAGE / ALUMNI & IMPACT',
        tagline: 'HERITAGE & ALUMNI',
        synopsis: 'We stand on the shoulders of the pioneers who walked these hallways before us. Our legacy spans championship hackathon trophies, historic festivals, startups founded by our peers, and distinguished alumni spearheading top global research labs and creative studios. As each cohort passes the torch to the next, our story grows richer, reminding us that we are part of something much larger than ourselves.',
        credit: 'Preserved by Historians & Alumni Council. Heritage Annals',
        actionBtn: 'BROWSE ARCHIVE GALLERY',
        // Spine Icon: Eternal Torch
        spineIconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8"><path d="M12 2c2 3 4 5 2 9-1 0-2-1-3-2-1 2-2 4-1 6 3 0 5-2 5-6 2 3 1 6-3 8v3h-4v-3c-4-2-5-5-3-8 1 2 2 3 4 3 0-2 1-4 3-7z"/></svg>`,
        // Cover Graphic: Eternal Torch & Victory Laurel
        graphicSvg: `
          <svg viewBox="0 0 160 160" fill="none">
            <path d="M38 98 C32 75 42 46 62 36" stroke="rgba(239, 68, 68, 0.65)" stroke-width="2" stroke-linecap="round"/>
            <path d="M122 98 C128 75 118 46 98 36" stroke="rgba(239, 68, 68, 0.65)" stroke-width="2" stroke-linecap="round"/>
            <circle cx="44" cy="84" r="3.5" fill="rgba(249, 115, 22, 0.75)"/>
            <circle cx="48" cy="64" r="3.5" fill="rgba(249, 115, 22, 0.75)"/>
            <circle cx="56" cy="48" r="3.5" fill="rgba(249, 115, 22, 0.75)"/>
            <circle cx="116" cy="84" r="3.5" fill="rgba(249, 115, 22, 0.75)"/>
            <circle cx="112" cy="64" r="3.5" fill="rgba(249, 115, 22, 0.75)"/>
            <circle cx="104" cy="48" r="3.5" fill="rgba(249, 115, 22, 0.75)"/>
            <path d="M74 94 L86 94 L82 134 L78 134 Z" fill="rgba(255, 255, 255, 0.88)" stroke="#111" stroke-width="1"/>
            <rect x="70" y="88" width="20" height="7" rx="2" fill="url(#grad-shield)"/>
            <path d="M80 34 C88 50 96 64 88 84 C84 84 80 82 78 78 C74 84 68 82 72 70 C74 62 76 50 80 34 Z" fill="url(#grad-flame)"/>
            <path d="M80 48 C84 58 88 66 84 76 C82 76 80 74 78 72 C76 76 72 74 74 68 C76 62 78 56 80 48 Z" fill="#FEF08A"/>
          </svg>
        `
      }
    ];
