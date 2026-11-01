/**
 * TECHNOVATION STORY ARCHIVES - DEPARTMENT BOOKS DATASET
 * Contains complete 16-page structured editorial contents for all department books.
 * Designed for modular rendering with BookReader, BookPage, and BookCover.
 */

export const DEPARTMENT_BOOKS = {
  about: {
    id: 'about',
    key: 'about',
    title: 'About Us',
    subtitle: 'The Genesis',
    volume: 'VOL. 01',
    edition: 'First Archive Edition · MMXXVI',
    color: '#1F3FB0',
    accentColor: '#F59E0B',
    foilColor: '#EAB308',
    coverTexture: 'buckram-navy',
    motto: 'Per Scientiam Ad Astra · Through Knowledge to the Stars',
    actionBtnText: 'EXPLORE OUR MANIFESTO',
    summary: 'We are a collective of creators, builders, thinkers, and disruptors united by an insatiable hunger to leave a mark. Born from late-night brainstorms in university halls, our club was founded on a simple truth: the most groundbreaking ideas happen when divergent minds collide.',
    pages: [
      // Page 1: Hardcover Front
      {
        pageNumber: 1,
        type: 'cover-front',
        title: 'ABOUT US',
        subtitle: 'THE GENESIS',
        volume: 'VOL. 01',
        tagline: 'FOUNDATION & PURPOSE',
        embellishment: 'STARBURST'
      },
      // Page 2: Inside Cover & Bookplate
      {
        pageNumber: 2,
        type: 'bookplate',
        title: 'Ex Libris Technovation',
        registry: 'REG-01-GENESIS-2026',
        inscription: 'This chronicle belongs to the enduring archive of Technovation Networking Club ABES. Penned by founders, sustained by members, dedicated to those who dare to build beyond the horizon.',
        date: 'Established MMXX · Archived MMXXVI'
      },
      // Page 3: Half-Title & Frontispiece
      {
        pageNumber: 3,
        type: 'frontispiece',
        chapterLabel: 'PROLOGUE',
        heading: 'The Sparks in the Dark',
        quote: 'In every generation, there are those who refuse to accept things as they are. They do not ask for permission to innovate.',
        attribution: 'Founders Council Annals, Vol. I'
      },
      // Page 4: The Genesis - Foundation & Purpose
      {
        pageNumber: 4,
        type: 'manifesto-spread-left',
        chapterNumber: 'CHAPTER I',
        chapterTitle: 'The Genesis',
        subheading: 'HOW DISRUPTION WAS BORN',
        dropCap: 'W',
        bodyText: [
          'We did not begin with grand auditoriums or corporate sponsorships. Technovation was forged in cramped dormitory rooms, under the warm yellow hum of desk lamps long after midnight, amidst tangled jumper wires and discarded whiteboards.',
          'A handful of students noticed a silent divide: classrooms taught theorems, but the world demanded creation. They envisioned an autonomous guild where mechanical, electrical, and computer minds could dismantle boundaries and build real things that breathed and spoke.'
        ],
        pullQuote: 'The most groundbreaking ideas never emerge from solitary silos; they ignite when divergent minds collide.'
      },
      // Page 5: The Genesis - Continued
      {
        pageNumber: 5,
        type: 'manifesto-spread-right',
        headerLabel: 'FOUNDATION & PURPOSE',
        bodyText: [
          'From our very first workshop to championship hackathons across the nation, we established our singular doctrine: learning is active, creation is sacred, and curiosity must be fiercely protected.',
          'Technovation is not merely a student club; it is an incubator of resilience. We take raw passion and refine it into professional mastery, ensuring that every engineer, designer, and storyteller who walks through our doors leaves as a leader.'
        ],
        stats: [
          { number: '1,200+', label: 'Active Alumni Globally' },
          { number: '48+', label: 'National Trophies Won' },
          { number: '100%', label: 'Student-Driven Initiative' }
        ]
      },
      // Page 6: Vision & Mission
      {
        pageNumber: 6,
        type: 'pillars-left',
        chapterNumber: 'CHAPTER II',
        chapterTitle: 'Vision & Mission',
        subheading: 'THE DUAL HORIZON',
        visionTitle: 'Our Vision',
        visionBody: 'To be the preeminent student innovation collective, globally recognized for bridging technical rigor with human-centered design, cultivating pioneers who shape the technological frontier with wisdom and courage.',
        pillars: [
          { code: '01', title: 'Radical Curiosity', desc: 'Question existing architecture; seek understanding down to silicon and soul.' },
          { code: '02', title: 'Relentless Craft', desc: 'No shoddy prototypes. We ship clean code, balanced circuits, and artful design.' }
        ]
      },
      // Page 7: Vision & Mission (Right)
      {
        pageNumber: 7,
        type: 'pillars-right',
        headerLabel: 'OUR SACRED PILLARS',
        missionTitle: 'Our Mission',
        missionBody: 'To democratize access to cutting-edge emerging technologies, provide fearless mentorship to every newcomer, and execute world-class engineering solutions that solve genuine community problems.',
        pillars: [
          { code: '03', title: 'Uncompromising Ownership', desc: 'We do not wait for instructions. Every member owns their vision end-to-end.' },
          { code: '04', title: 'Enduring Fellowship', desc: 'Knowledge is never hoarded. We lift as we climb, ensuring the guild outlives us all.' }
        ]
      },
      // Page 8: Our Philosophy
      {
        pageNumber: 8,
        type: 'philosophy-left',
        chapterNumber: 'CHAPTER III',
        chapterTitle: 'Our Philosophy',
        subheading: 'THE CRAFT OF DOING',
        doctrine: 'We believe that theory without application is sterile, while engineering without aesthetic conscience is soulless.',
        textColumns: [
          'The modern engineer must be bilingual—fluent in both the mathematical equations of logic and the empathetic nuances of human culture. We design experiences, not merely circuits.',
          'Failure in our lab is neither penalized nor feared. It is treated as high-velocity telemetry: an honest diagnostic pointing directly toward the true solution.'
        ]
      },
      // Page 9: Philosophy Principles
      {
        pageNumber: 9,
        type: 'philosophy-right',
        headerLabel: 'TENETS OF THE WORKSHOP',
        principles: [
          { num: 'I', title: 'Build to Understand', text: 'You do not truly grasp an algorithm until you have reconstructed it from bare registers.' },
          { num: 'II', title: 'Design is Not Dressing', text: 'Beauty and utility are synonymous. Form is how function communicates with human eyes.' },
          { num: 'III', title: 'The Open Door Rule', text: 'Senior or freshman, every brain is respected equally. The best argument wins, not seniority.' }
        ]
      },
      // Page 10: Our Journey
      {
        pageNumber: 10,
        type: 'timeline-left',
        chapterNumber: 'CHAPTER IV',
        chapterTitle: 'The Journey',
        subheading: 'EPOCHS OF EXPANSION',
        milestones: [
          { year: '2020', title: 'The Genesis Spark', desc: 'Seven students assemble the first autonomous networking lab in room C-204.' },
          { year: '2022', title: 'National Circuit Breakthrough', desc: 'First clean sweep at Smart India Hackathon; membership exceeds 300 students.' }
        ]
      },
      // Page 11: Our Journey (Right)
      {
        pageNumber: 11,
        type: 'timeline-right',
        headerLabel: 'MILESTONES IN MOTION',
        milestones: [
          { year: '2024', title: 'The Studio Era', desc: 'Establishment of 7 dedicated wings: Technical, Graphics, Production, Events, PR, Core & Legacy.' },
          { year: '2026', title: 'The Global Vanguard', desc: 'Launch of Story Archives, open-source hardware initiative, and international summit.' }
        ],
        quote: 'History is not something we observe from afar. It is the clay we shape every day in the lab.'
      },
      // Page 12: Our Achievements
      {
        pageNumber: 12,
        type: 'achievements-left',
        chapterNumber: 'CHAPTER V',
        chapterTitle: 'Honors & Laurels',
        subheading: 'RECOGNITION IN THE ARENA',
        awards: [
          { title: 'Best Technical Society', source: 'State Innovation Board', year: '2025' },
          { title: 'Excellence in Hardware Design', source: 'National Robotics Forum', year: '2024' },
          { title: 'Grand Winner — HackArena', source: 'Premier University League', year: '2025' }
        ]
      },
      // Page 13: Our Achievements (Right)
      {
        pageNumber: 13,
        type: 'achievements-right',
        headerLabel: 'MEASURABLE IMPACT',
        highlightMetric: '85,000+',
        highlightDesc: 'Lines of mission-critical code authored across 30+ public repos and community platforms.',
        callouts: [
          '95% Placement & Higher Studies rate among Core Council alumni in FAANG, top research institutes, and stealth startups.',
          'Over 4,500 students trained across 60+ open bootcamps on Full-Stack, AI/ML, Cloud Architecture, and 3D Motion.'
        ]
      },
      // Page 14: Meet the Team & Guild
      {
        pageNumber: 14,
        type: 'team-spread-left',
        chapterNumber: 'CHAPTER VI',
        chapterTitle: 'The Council',
        subheading: 'GUARDIANS OF THE ARCHIVE',
        teamNote: 'Behind every milestone stands a committed collective of student architects, engineers, designers, and organizers.',
        roles: [
          { role: 'President & Vice President', duty: 'Strategic direction, institutional relations, and cultural stewardship.' },
          { role: 'Technical Directorate', duty: 'Platform infrastructure, competitive hackathons, and systems architecture.' },
          { role: 'Creative & Visual Leads', duty: 'Brand identity, 3D typography, spatial motion, and digital aesthetics.' }
        ]
      },
      // Page 15: Closing Note & The Oath
      {
        pageNumber: 15,
        type: 'closing-spread',
        headerLabel: 'EPILOGUE & OATH',
        closingTitle: 'The Technovation Oath',
        oathLines: [
          'We pledge to build with honor and integrity.',
          'We pledge to teach what we have learned and mentor those who follow.',
          'We pledge never to let comfort extinguish the fire of our curiosity.',
          'So long as there is an unsolved riddle, we will be there to engineer an answer.'
        ],
        signoff: 'Signed and Sealed by the Executive Council · Technovation MMXXVI',
        sealLabel: 'AUTHENTIC ARCHIVE COPY'
      },
      // Page 16: Hardcover Back
      {
        pageNumber: 16,
        type: 'cover-back',
        title: 'TECHNOVATION',
        volume: 'VOL. 01 · GENESIS',
        barcode: '978-0-TECH-2026-01',
        stamp: 'OFFICIAL RECORD · ALL RIGHTS RESERVED'
      }
    ]
  },

  technical: {
    id: 'technical',
    key: 'technical',
    title: 'Technical Wing',
    subtitle: 'Code & Circuits',
    volume: 'VOL. 02',
    edition: 'Systems & Intelligence · MMXXVI',
    color: '#0284C7',
    accentColor: '#38BDF8',
    foilColor: '#0EA5E9',
    coverTexture: 'buckram-cyan',
    motto: 'Ex Nihilo Ad Codicem · Out of Nothing, Code',
    actionBtnText: 'EXPLORE TECHNICAL MANIFESTO',
    summary: 'The digital backbone of Technovation. From low-latency microservices and high-throughput distributed systems to neural networks and custom microcontrollers, we turn abstract algorithms into living software.',
    pages: [
      { pageNumber: 1, type: 'cover-front', title: 'TECHNICAL', subtitle: 'CODE & CIRCUITS', volume: 'VOL. 02', tagline: 'SYSTEMS & INTELLIGENCE', embellishment: 'CIRCUITS' },
      { pageNumber: 2, type: 'bookplate', title: 'Ex Libris Technologia', registry: 'REG-02-TECH-2026', inscription: 'Chronicle of the Technical Directorate. Forged in binary, committed in git, hardened by production compilers.', date: 'Systems Annals · MMXXVI' },
      { pageNumber: 3, type: 'frontispiece', chapterLabel: 'THEORY OF SILICON', heading: 'Logic in Copper and Light', quote: 'Talk is cheap. Show me the code.', attribution: 'Linus Torvalds · Quoted in Lab Archives' },
      { pageNumber: 4, type: 'manifesto-spread-left', chapterNumber: 'CHAPTER I', chapterTitle: 'The Foundry', subheading: 'WHERE CODE MEETS METAL', dropCap: 'I', bodyText: ['In the Technical Wing, we do not believe in magic. Computers are not mystical black boxes; they are deliberate arrangements of silicon logic gates, orchestrating billions of electron state transitions every second.', 'Our members dive deep beneath high-level abstractions to understand the machinery of the digital age: memory models, cache coherence, networking protocols, and system design.'], pullQuote: 'True technical mastery is knowing why an abstraction leaks before the debugger tells you.' },
      { pageNumber: 5, type: 'manifesto-spread-right', headerLabel: 'DISCIPLINES OF INQUIRY', bodyText: ['We structure our technical division into four specialized branches: Distributed Systems & Cloud, Machine Intelligence & Vision, Competitive Algorithms, and Cyber-Physical Systems.', 'Each branch operates like an engineering skunkworks—running internal RFCs, peer code reviews, and weekly architecture breakdowns.'], stats: [{ number: '24ms', label: 'Median API Response Time' }, { number: '14+', label: 'AI Models Deployed' }, { number: '99.99%', label: 'Uptime on Internal Systems' }] },
      { pageNumber: 6, type: 'pillars-left', chapterNumber: 'CHAPTER II', chapterTitle: 'Architectural Tenets', subheading: 'PILLARS OF ROBUST CODE', visionTitle: 'Engineering Doctrine', visionBody: 'We treat software as high-stakes civil engineering. Scalable, maintainable, self-healing, and elegant down to the last semicolon.', pillars: [{ code: '01', title: 'Correctness First', desc: 'Optimization without provable correctness is merely fast error generation.' }, { code: '02', title: 'Defensive Architecture', desc: 'Design systems that anticipate failure. Graceful degradation is our default.' }] },
      { pageNumber: 7, type: 'pillars-right', headerLabel: 'PRACTICE OF EXCELLENCE', missionTitle: 'Execution Guidelines', missionBody: 'Every codebase committed under the Technovation banner must stand as an open-source educational standard for future cohorts.', pillars: [{ code: '03', title: 'Zero Fluff Tech Stack', desc: 'Pick the right tool for the physics of the problem, not current social media hype.' }, { code: '04', title: 'Transparent Telemetry', desc: 'If you cannot measure it in production, it does not exist.' }] },
      { pageNumber: 8, type: 'philosophy-left', chapterNumber: 'CHAPTER III', chapterTitle: 'The Hackathon Crucible', subheading: '36 HOURS UNDER PRESSURE', doctrine: 'Competitions are our proving ground. When the clock is ticking down, clarity of thought and modular architecture triumph over panic.', textColumns: ['In our technical bootcamps, we simulate high-intensity production environments: sudden API deprecations, corrupted test suites, and strict constraints.', 'Our teams learn to decompose massive problem statements into parallelizable micro-components within the first 60 minutes.'] },
      { pageNumber: 9, type: 'philosophy-right', headerLabel: 'THE COMPETITIVE MATRIX', principles: [{ num: 'I', title: 'The 60-Minute Triage', text: 'Spend an hour dissecting the problem space before a single line of code is written.' }, { num: 'II', title: 'Ship the MVP at Midnight', text: 'Have a working end-to-end pipeline early; refine features progressively until submission.' }, { num: 'III', title: 'Polished Demos Win', text: 'Brilliant logic without an intuitive interface is invisible to judges.' }] },
      { pageNumber: 10, type: 'timeline-left', chapterNumber: 'CHAPTER IV', chapterTitle: 'Open Source Ledger', subheading: 'SYSTEMS CONTRIBUTED TO THE COMMONS', milestones: [{ year: '2023', title: 'NetStack v1.0', desc: 'Custom packet analyzer and intrusion detection tool built in Rust and C++.' }, { year: '2024', title: 'KubeCluster Lab', desc: 'On-premise Kubernetes cluster providing compute for student AI research models.' }] },
      { pageNumber: 11, type: 'timeline-right', headerLabel: 'LATEST INNOVATIONS', milestones: [{ year: '2025', title: 'TechnoAI Engine', desc: 'Edge vision inference pipeline running at 60 FPS on low-power IoT microcontrollers.' }, { year: '2026', title: 'Story Platform Core', desc: 'Next-generation 3D spatial reader and headless archival database system.' }], quote: 'The best code is not the one with the most lines, but the one whose architecture makes complexity feel effortless.' },
      { pageNumber: 12, type: 'achievements-left', chapterNumber: 'CHAPTER V', chapterTitle: 'Battle Laurels', subheading: 'TESTED ACROSS THE NATION', awards: [{ title: '1st Place — National AI Hack', source: 'Ministry of Electronics & IT', year: '2025' }, { title: 'Best Systems Architecture', source: 'CodeCon Summit', year: '2024' }, { title: 'Open Source Champion Award', source: 'FOSS India Foundation', year: '2025' }] },
      { pageNumber: 13, type: 'achievements-right', headerLabel: 'ENGINEERING BENCHMARKS', highlightMetric: '140+', highlightDesc: 'High-performing projects open-sourced with comprehensive test suites and documentation.', callouts: ['Our engineers authored internal tools deployed across campus, handling over 10,000 queries per hour during festival summits.', 'Direct mentorship pipeline to open-source contributions in Linux foundation and Rust ecosystem.'] },
      { pageNumber: 14, type: 'team-spread-left', chapterNumber: 'CHAPTER VI', chapterTitle: 'Technical Leads', subheading: 'SYSTEMS ARCHITECTS', teamNote: 'Led by senior developers, cloud practitioners, and competitive programming specialists.', roles: [{ role: 'Lead Architect', duty: 'Distributed backend, cloud orchestration, and security protocols.' }, { role: 'AI & Data Science Lead', duty: 'Model training, dataset pipelines, and computer vision integration.' }, { role: 'Embedded Systems Lead', duty: 'Microcontroller firmware, PCB design, and sensory networking.' }] },
      { pageNumber: 15, type: 'closing-spread', headerLabel: 'EPILOGUE', closingTitle: 'The Engineer’s Creed', oathLines: ['We will write code that respects user privacy and data sovereignty.', 'We will never commit code we do not understand or cannot defend.', 'We will optimize for clarity, maintainability, and resilience over vanity.', 'We will leave the digital world cleaner, faster, and more accessible than we found it.'], signoff: 'Technical Directorate · Technovation MMXXVI', sealLabel: 'PRODUCTION CERTIFIED' },
      { pageNumber: 16, type: 'cover-back', title: 'TECHNOVATION', volume: 'VOL. 02 · TECHNICAL', barcode: '978-0-TECH-2026-02', stamp: 'SYSTEMS ARCHIVE · ALL RIGHTS RESERVED' }
    ]
  },

  graphics: {
    id: 'graphics',
    key: 'graphics',
    title: 'Graphics Wing',
    subtitle: 'Visual Horizons',
    volume: 'VOL. 03',
    edition: 'Design & Spatial Motion · MMXXVI',
    color: '#8B5CF6',
    accentColor: '#A78BFA',
    foilColor: '#C084FC',
    coverTexture: 'buckram-violet',
    motto: 'Forma Sequitur Animum · Form Follows the Soul',
    actionBtnText: 'EXPLORE GRAPHICS MANIFESTO',
    summary: 'The aesthetic conscience and spatial design vanguard of Technovation. We sculpt brand identities, kinetic 3D typography, editorial layouts, and immersive digital artifacts that command respect.',
    pages: [
      { pageNumber: 1, type: 'cover-front', title: 'GRAPHICS', subtitle: 'VISUAL HORIZONS', volume: 'VOL. 03', tagline: 'DESIGN & SPATIAL MOTION', embellishment: 'GOLDEN_SPIRAL' },
      { pageNumber: 2, type: 'bookplate', title: 'Ex Libris Graphica', registry: 'REG-03-GFX-2026', inscription: 'Chronicle of the Graphics & Creative Directorate. Penned in vector paths, balanced in golden proportions, rendered in light.', date: 'Visual Annals · MMXXVI' },
      { pageNumber: 3, type: 'frontispiece', chapterLabel: 'THEORY OF LIGHT', heading: 'The Architecture of the Eye', quote: 'Design is not what it looks like and feels like. Design is how it works.', attribution: 'Paul Rand · Studio Inscription' },
      { pageNumber: 4, type: 'manifesto-spread-left', chapterNumber: 'CHAPTER I', chapterTitle: 'The Visual Horizon', subheading: 'THE POWER OF FORM', dropCap: 'D', bodyText: ['Design is not decorative icing applied after the engineering is complete. It is the language through which complexity explains itself to human consciousness.', 'In the Graphics Wing, we reject visual mediocrity. Every curve, kerning pair, drop shadow, and color value is calculated with mathematical precision to evoke emotion and clarity.'], pullQuote: 'A great visual design does not decorate an idea; it gives the idea tangible gravity and presence.' },
      { pageNumber: 5, type: 'manifesto-spread-right', headerLabel: 'CREATIVE DISCIPLINES', bodyText: ['We train our creators across multiple visual disciplines: Brand Identity & Typography, 3D Spatial Modeling, Motion Graphics, and Editorial Layout Systems.', 'We believe the best designers understand color theory as deeply as render engines, treating typography as architecture.'], stats: [{ number: '60fps', label: 'Silky Smooth Motion Target' }, { number: '16+', label: 'Design Systems Created' }, { number: '4K', label: 'Native Master Asset Standards' }] },
      { pageNumber: 6, type: 'pillars-left', chapterNumber: 'CHAPTER II', chapterTitle: 'Visual Commandments', subheading: 'THE FOUR DISCIPLINES', visionTitle: 'Aesthetic Tenets', visionBody: 'We create visual identities that endure beyond ephemeral design trends. Timeless, bold, restrained, and unmistakably premium.', pillars: [{ code: '01', title: 'Obsessive Hierarchy', desc: 'The viewer should never guess where to look. Lead the human eye with deliberate contrast.' }, { code: '02', title: 'Harmonic Proportion', desc: 'Root every grid in mathematical ratios: the Golden Section, the Fibonacci sequence, and root rectangles.' }] },
      { pageNumber: 7, type: 'pillars-right', headerLabel: 'CRAFT & REFINEMENT', missionTitle: 'Typographic Standard', missionBody: 'Type is the voice of the club. We pair classic serif editorial traditions with cutting-edge Swiss neo-grotesque geometry.', pillars: [{ code: '03', title: 'Zero Visual Noise', desc: 'If an element does not clarify or dignify the message, remove it without mercy.' }, { code: '04', title: 'Motion with Weight', desc: 'Digital animation must obey physical mass, inertia, and realistic elasticity.' }] },
      { pageNumber: 8, type: 'philosophy-left', chapterNumber: 'CHAPTER III', chapterTitle: 'Spatial 3D & Light', subheading: 'SCULPTING IN DIGITAL SPACE', doctrine: 'We do not live on flat screens; human perception is spatial. We pioneer 3D web interfaces, realistic paper textures, and ray-marched depth.', textColumns: ['By combining WebGL, CSS 3D transforms, and custom shaders, our wing pushes the boundary of what browser viewports can deliver.', 'The very 3D storybook you are reading right now was conceived and designed by our visual directors.'] },
      { pageNumber: 9, type: 'philosophy-right', headerLabel: 'THE CRAFT OF DEPTH', principles: [{ num: 'I', title: 'Tangible Textures', desc: 'Add tactile micro-grain, embossed edges, and natural ink bleeds so interfaces feel physical.' }, { num: 'II', title: 'Lighting with Intention', desc: 'Simulate natural key, fill, and ambient rim lights to give 3D models lifelike volume.' }, { num: 'III', title: 'Restraint Over Spectacle', desc: '3D effects must enhance storytelling, not distract from content readability.' }] },
      { pageNumber: 10, type: 'timeline-left', chapterNumber: 'CHAPTER IV', chapterTitle: 'The Visual Anthology', subheading: 'KEY DESIGN ARTIFACTS', milestones: [{ year: '2023', title: 'The Crest Redesign', desc: 'Sculpted the official 3D metallic shield crest and vector identity guidelines.' }, { year: '2024', title: 'Summit Identity System', desc: 'Complete brand packaging for 2,000+ attendee national technology summit.' }] },
      { pageNumber: 11, type: 'timeline-right', headerLabel: 'RECENT MASTERPIECES', milestones: [{ year: '2025', title: 'The Storybook Shelf', desc: 'The iconic vintage paper 3D bookshelf experience with dynamic lighting.' }, { year: '2026', title: 'The Manifesto Reader', desc: 'Full-screen realistic interactive hardcover book engine with physics page turning.' }], quote: 'Color is a power which directly influences the soul. Form is its vessel.' },
      { pageNumber: 12, type: 'achievements-left', chapterNumber: 'CHAPTER V', chapterTitle: 'Design Laurels', subheading: 'CRITICAL ACCLAIM', awards: [{ title: 'Best Digital Brand Identity', source: 'Creative Conclave India', year: '2025' }, { title: 'Excellence in 3D Motion', source: 'Web Designers Guild', year: '2024' }, { title: 'Top Editorial Layout Award', source: 'National Student Design Forum', year: '2025' }] },
      { pageNumber: 13, type: 'achievements-right', headerLabel: 'PORTFOLIO IMPACT', highlightMetric: '100%', highlightDesc: 'Original bespoke assets created in-house without reliance on generic stock templates.', callouts: ['Our design toolkits and Figma libraries are used by over 500 club members and student societies.', 'Alumni leading UI/UX and 3D art at top global gaming studios, agency collectives, and fintech unicorns.'] },
      { pageNumber: 14, type: 'team-spread-left', chapterNumber: 'CHAPTER VI', chapterTitle: 'Creative Directorate', subheading: 'VISUAL ARCHITECTS', teamNote: 'Art directors, 3D artists, vector illustrators, and UI/UX design researchers.', roles: [{ role: 'Creative Director', duty: 'Overall aesthetic coherence, typography standards, and art direction.' }, { role: '3D & Motion Lead', duty: 'Spatial rendering, Blender modeling, WebGL shaders, and physics animations.' }, { role: 'Brand & Editorial Lead', duty: 'Visual manifestos, print-ready books, merchandise design, and poster art.' }] },
      { pageNumber: 15, type: 'closing-spread', headerLabel: 'EPILOGUE', closingTitle: 'The Designer’s Pledge', oathLines: ['We pledge to respect the sacred discipline of typography and proportion.', 'We pledge to never settle for generic templates or mindless trends.', 'We pledge to craft every pixel with intention, reverence, and human empathy.', 'We pledge to make the story of Technovation visually unforgettable.'], signoff: 'Graphics Directorate · Technovation MMXXVI', sealLabel: 'ARTISAN APPROVED' },
      { pageNumber: 16, type: 'cover-back', title: 'TECHNOVATION', volume: 'VOL. 03 · GRAPHICS', barcode: '978-0-TECH-2026-03', stamp: 'CREATIVE ARCHIVE · ALL RIGHTS RESERVED' }
    ]
  },

  production: {
    id: 'production',
    key: 'production',
    title: 'Production Wing',
    subtitle: 'Architects of Atmosphere',
    volume: 'VOL. 04',
    edition: 'Audio, Stage & Cinematography · MMXXVI',
    color: '#059669',
    accentColor: '#34D399',
    foilColor: '#10B981',
    coverTexture: 'buckram-emerald',
    motto: 'Lux In Tenebris Sonus In Silentio · Light in Darkness, Sound in Silence',
    actionBtnText: 'EXPLORE PRODUCTION MANIFESTO',
    summary: 'The masters of sound, light, and temporal immersion. The Production Wing commands the physical stage, studio-grade broadcasting, live streaming, cinematography, and acoustic architecture.',
    pages: [
      { pageNumber: 1, type: 'cover-front', title: 'PRODUCTION', subtitle: 'ARCHITECTS OF ATMOSPHERE', volume: 'VOL. 04', tagline: 'STAGE, AUDIO & BROADCAST', embellishment: 'AUDIO_WAVE' },
      { pageNumber: 2, type: 'bookplate', title: 'Ex Libris Productio', registry: 'REG-04-PROD-2026', inscription: 'Chronicle of the Production & Media Directorate. Recorded on 4K sensors, calibrated in decibels, illuminated by stage arcs.', date: 'Media Annals · MMXXVI' },
      { pageNumber: 3, type: 'frontispiece', chapterLabel: 'THEORY OF RESONANCE', heading: 'The Living Stage', quote: 'Immersion is achieved when the audience forgets where their seats end and the story begins.', attribution: 'Stage Director Annals · Volume IV' },
      { pageNumber: 4, type: 'manifesto-spread-left', chapterNumber: 'CHAPTER I', chapterTitle: 'The Atmosphere', subheading: 'COMMANDING REALITY', dropCap: 'W', bodyText: ['When hundreds of people step into a Technovation event, the chill down their spine is not an accident. It is the calculated convergence of directional audio, calibrated lumen output, and acoustic tuning.', 'We believe that technology without theater fails to move the human soul. Our wing transforms ordinary campus auditoriums into epic, high-octane arenas of technical drama.'], pullQuote: 'The audience should not simply watch our events; they should feel the vibration of ideas in their chest.' },
      { pageNumber: 5, type: 'manifesto-spread-right', headerLabel: 'ARENAS OF PRODUCTION', bodyText: ['Our crew operates with broadcast-television precision: multi-camera live switching, real-time audio mixing, DMX stage lighting synchronization, and high-bitrate streaming pipelines.', 'Whether handling keynote spotlights or festival aftermovies, our standards match commercial broadcasting networks.'], stats: [{ number: '4K/60', label: 'Ultra-HD Capture Standard' }, { number: '128', label: 'Audio Channels Controlled' }, { number: '0ms', label: 'Live Broadcast Downtime' }] },
      { pageNumber: 6, type: 'pillars-left', chapterNumber: 'CHAPTER II', chapterTitle: 'Stage Directives', subheading: 'PRECISION BEHIND THE CURTAIN', visionTitle: 'Production Vision', visionBody: 'Flawless execution where technical complexity remains completely invisible to the spectator, leaving only pure wonder.', pillars: [{ code: '01', title: 'Acoustic Clarity', desc: 'Every word spoken on our stage must cut through the air with pristine warmth and intelligibility.' }, { code: '02', title: 'Luminescent Mood', desc: 'Lighting is emotional subtext. We sculpt shadows to focus collective attention.' }] },
      { pageNumber: 7, type: 'pillars-right', headerLabel: 'CREW DISCIPLINE', missionTitle: 'Broadcasting Standards', missionBody: 'Preserve every historic speech, hackathon victory, and festival showcase in archival cinematic quality.', pillars: [{ code: '03', title: 'Redundant Signals', desc: 'Every mission-critical feed has dual backup cables, power lines, and failover recorders.' }, { code: '04', title: 'Cinematic Rhythm', desc: 'Our camera operators edit in their minds while shooting, capturing raw human triumph.' }] },
      { pageNumber: 8, type: 'philosophy-left', chapterNumber: 'CHAPTER III', chapterTitle: 'Sound & Space', subheading: 'THE PSYCHOACOUSTIC BATTLE', doctrine: 'Sound is 70% of visual impact. A poor visual with great audio is cinematic; a great visual with broken audio is unwatchable.', textColumns: ['Our audio engineers map auditorium reverberation times, phase cancellation, and dynamic equalization before a single mic is turned on.', 'We design custom intro stingers, atmospheric audio cues, and musical scores tailored specifically to each Technovation chapter.'] },
      { pageNumber: 9, type: 'philosophy-right', headerLabel: 'THE MASTER CONTROL ROOM', principles: [{ num: 'I', title: 'The Sound Check Ritual', text: 'Three full technical rehearsals before doors open to the public. No exceptions.' }, { num: 'II', title: 'Silent Comms Protocol', text: 'Crew communication over radio is crisp, brief, and calm, even when chaos strikes.' }, { num: 'III', title: 'Preserve the Archive', text: 'Color-graded multi-cam recordings archived within 24 hours of event conclusion.' }] },
      { pageNumber: 10, type: 'timeline-left', chapterNumber: 'CHAPTER IV', chapterTitle: 'Broadcast Log', subheading: 'HISTORIC PRODUCTIONS', milestones: [{ year: '2023', title: 'First 4K Stream', desc: 'Streamed 12-hour continuous hackathon finals with live leaderboards to 5,000 viewers.' }, { year: '2024', title: 'Stadium Lighting Show', desc: 'Synchronized 40 DMX fixtures with live electronic soundtrack for annual fest inauguration.' }] },
      { pageNumber: 11, type: 'timeline-right', headerLabel: 'MEDIA MILESTONES', milestones: [{ year: '2025', title: 'Podcast Studio Launch', desc: 'High-fidelity audio recording studio established for student-led tech dialogues.' }, { year: '2026', title: 'Interactive VR Stream', desc: '360-degree spatial live stream deployed for international symposium attendees.' }], quote: 'Behind every great speech that ignited a generation was an audio technician who kept the microphone clean.' },
      { pageNumber: 12, type: 'achievements-left', chapterNumber: 'CHAPTER V', chapterTitle: 'Production Honors', subheading: 'COMMENDATIONS', awards: [{ title: 'Best Campus Broadcast', source: 'Inter-College Media Association', year: '2025' }, { title: 'Excellence in Stage Lighting', source: 'Festival Production Guild', year: '2024' }, { title: 'Outstanding Short Documentary', source: 'Student Film Circuit', year: '2025' }] },
      { pageNumber: 13, type: 'achievements-right', headerLabel: 'TECHNICAL FOOTPRINT', highlightMetric: '150,000+', highlightDesc: 'Total views across live broadcast feeds, festival aftermovies, and technical deep-dives.', callouts: ['Over 100 terabytes of pristine uncompressed 4K footage archived across institutional servers.', 'Production alumni working as sound engineers and camera directors for major entertainment venues.'] },
      { pageNumber: 14, type: 'team-spread-left', chapterNumber: 'CHAPTER VI', chapterTitle: 'Production Crew', subheading: 'STAGE MASTERS', teamNote: 'Audio engineers, lighting designers, broadcast directors, and video editors.', roles: [{ role: 'Production Director', duty: 'Overall show calling, timing, crew dispatch, and venue liaison.' }, { role: 'Chief Audio Engineer', duty: 'Front of House mixing, wireless mic frequency management, and mastering.' }, { role: 'Director of Photography', duty: 'Camera placement, color grading, lens selection, and cinematography.' }] },
      { pageNumber: 15, type: 'closing-spread', headerLabel: 'EPILOGUE', closingTitle: 'The Producer’s Oath', oathLines: ['We pledge to honor the spotlight by working masterfully in the dark.', 'We pledge to never let a technical hitch silence an aspiring student’s voice.', 'We pledge to capture the fleeting moments of brilliance and turn them into eternal memory.', 'We are the architects of atmosphere; we make the moment unforgettable.'], signoff: 'Production Directorate · Technovation MMXXVI', sealLabel: 'BROADCAST QUALITY' },
      { pageNumber: 16, type: 'cover-back', title: 'TECHNOVATION', volume: 'VOL. 04 · PRODUCTION', barcode: '978-0-TECH-2026-04', stamp: 'PRODUCTION ARCHIVE · ALL RIGHTS RESERVED' }
    ]
  },

  events: {
    id: 'events',
    key: 'events',
    title: 'Events Wing',
    subtitle: 'Chronicles of Convergence',
    volume: 'VOL. 05',
    edition: 'Summits, Hackathons & Festivals · MMXXVI',
    color: '#F43F5E',
    accentColor: '#FB7185',
    foilColor: '#E11D48',
    coverTexture: 'buckram-rose',
    motto: 'Ad Unum Convocati · Called Together As One',
    actionBtnText: 'EXPLORE EVENT ARCHIVES',
    summary: 'Where ideas transform into adrenaline and celebration. The Events Wing conceives, structures, and executes flagship hackathons, technical summits, design jams, and inter-college symposia.',
    pages: [
      { pageNumber: 1, type: 'cover-front', title: 'EVENTS', subtitle: 'CHRONICLES OF CONVERGENCE', volume: 'VOL. 05', tagline: 'SUMMITS & HACKATHONS', embellishment: 'STAGE_STARBURST' },
      { pageNumber: 2, type: 'bookplate', title: 'Ex Libris Congressus', registry: 'REG-05-EVENTS-2026', inscription: 'Chronicle of the Events Directorate & Operations. Recorded in schedules, judged in brackets, celebrated in arenas.', date: 'Convergence Annals · MMXXVI' },
      { pageNumber: 3, type: 'frontispiece', chapterLabel: 'THEORY OF CONVERGENCE', heading: 'The Living Arena', quote: 'You can teach a thousand lessons in a hall, but nothing inspires like 36 hours of relentless competition.', attribution: 'Events Directorate Manifesto · Volume V' },
      { pageNumber: 4, type: 'manifesto-spread-left', chapterNumber: 'CHAPTER I', chapterTitle: 'The Convergence', subheading: 'WHERE ENTHUSIASM IGNITES', dropCap: 'A', bodyText: ['Great communities are not sustained by newsletters or online chats. They are cemented when hundreds of determined human beings assemble in one room to test their limits.', 'The Events Wing is the heartbeat of Technovation. We organize hackathons that turn into legend, design summits that reshape perspectives, and technical battles where champions are crowned.'], pullQuote: 'An event is not an agenda on paper. It is an electric environment where courage replaces doubt.' },
      { pageNumber: 5, type: 'manifesto-spread-right', headerLabel: 'EXPERIENCE ARCHITECTURE', bodyText: ['We treat every event as a multi-act theatrical experience: from the breathless anticipation of the opening countdown to midnight coffee sprints and the roaring ovation at the podium.', 'No detail is left to chance: mentor allocation, participant hospitality, live judging rubrics, and rapid dispute resolution are executed with clockwork discipline.'], stats: [{ number: '5,000+', label: 'Hackathon Participants' }, { number: '100+', label: 'Industry Judges & Mentors' }, { number: '36hr', label: 'Flagship Sprint Duration' }] },
      { pageNumber: 6, type: 'pillars-left', chapterNumber: 'CHAPTER II', chapterTitle: 'Operational Tenets', subheading: 'PILLARS OF EXECUTION', visionTitle: 'Events Vision', visionBody: 'To build the most respected, rigorous, and inspiring student competitive circuits in the northern university ecosystem.', pillars: [{ code: '01', title: 'Flawless Scheduling', desc: 'Respect participant time. Keynotes, meals, judging rounds, and ceremonies run to the minute.' }, { code: '02', title: 'Uncompromising Fairness', desc: 'Rigorous anonymized judging criteria. Merit and execution are the only currencies recognized.' }] },
      { pageNumber: 7, type: 'pillars-right', headerLabel: 'HOSPITALITY & IMPACT', missionTitle: 'Participant Centricity', missionBody: 'Every participant, whether seasoned veteran or first-time hacker, must leave our events inspired and valued.', pillars: [{ code: '03', title: 'High-Energy Care', desc: 'Healthy nutrition, endless coffee, safe rest quarters, and round-the-clock technical mentors.' }, { code: '04', title: 'Lasting Networks', desc: 'Curate structured networking zones where founders find co-founders and students meet hiring leads.' }] },
      { pageNumber: 8, type: 'philosophy-left', chapterNumber: 'CHAPTER III', chapterTitle: 'The Hackathon Anatomy', subheading: 'INSIDE A 36-HOUR MARATHON', doctrine: 'A hackathon is a crucible of character. What starts as eager excitement transforms at hour 20 into a test of pure resilience.', textColumns: ['We structure the journey carefully: Icebreakers at Hour 0, First Check-in at Hour 8, Midnight Mini-Games to recharge morale at Hour 16, and Pitch Clinics at Hour 28.', 'By the time final demos begin, participants haven’t just built software—they have discovered what they are truly capable of under pressure.'] },
      { pageNumber: 9, type: 'philosophy-right', headerLabel: 'CRUCIBLE TIMELINE', principles: [{ num: '00:00', title: 'The Countdown & Release', text: 'Problem statements dropped; whiteboard rooms explode with feverish brainstorming.' }, { num: '18:00', title: 'The Graveyard Shift', text: 'Energy drops; mentors circulate with hot pizza and critical debugging support.' }, { num: '32:00', title: 'The Pitch Lock', text: 'Repositories frozen; presentations polished; teams rehearse under stage lights.' }] },
      { pageNumber: 10, type: 'timeline-left', chapterNumber: 'CHAPTER IV', chapterTitle: 'Summit Chronicles', subheading: 'HISTORIC GATHERINGS', milestones: [{ year: '2022', title: 'HackTech v1.0', desc: 'Inaugural 24-hour hackathon attracting 400 regional participants and 8 venture sponsors.' }, { year: '2024', title: 'Apex Symposium', desc: 'National technology congress featuring AI luminaries, cybersecurity summits, and gaming arenas.' }] },
      { pageNumber: 11, type: 'timeline-right', headerLabel: 'FLAGSHIP MILESTONES', milestones: [{ year: '2025', title: 'CodeSprint 36', desc: 'Record-breaking inter-state hackathon with ₹3,00,000 in prize pool and 1,200 attendees.' }, { year: '2026', title: 'The Technovation Summit', desc: '3-day innovation festival celebrating the launch of the Story Archives.' }], quote: 'The real trophy is not the glass plate given on stage. It is the camaraderie forged in the trenches of competition.' },
      { pageNumber: 12, type: 'achievements-left', chapterNumber: 'CHAPTER V', chapterTitle: 'Event Laurels', subheading: 'EXCELLENCE CERTIFIED', awards: [{ title: 'Best Campus Hackathon Organizer', source: 'National Tech Guild', year: '2025' }, { title: 'Highest Participant Satisfaction Rate', source: 'Student Feedback Index (98.4%)', year: '2024' }, { title: 'Most Innovative Event Format', source: 'Inter-University Council', year: '2025' }] },
      { pageNumber: 13, type: 'achievements-right', headerLabel: 'EXPEDITION SUMMARY', highlightMetric: '12,000+', highlightDesc: 'Meals and refreshments served to hackers across 8 major multi-day championships.', callouts: ['Over 120 startups and corporate hiring partners have recruited directly from our hackathon podiums.', 'A volunteer army of 150+ student marshals trained in event logistics, medical safety, and crowd control.'] },
      { pageNumber: 14, type: 'team-spread-left', chapterNumber: 'CHAPTER VI', chapterTitle: 'Event Command', subheading: 'LOGISTICAL WARRIORS', teamNote: 'Event managers, stage coordinators, judge liaisons, and hospitality leads.', roles: [{ role: 'Director of Events', duty: 'Master planning, venue allocation, institutional permissions, and risk management.' }, { role: 'Hackathon Operations Lead', duty: 'Judge coordination, problem statement curation, scoring systems, and dispute resolution.' }, { role: 'Hospitality & Logistics Lead', duty: 'Accommodations, catering, security coordination, and volunteer deployment.' }] },
      { pageNumber: 15, type: 'closing-spread', headerLabel: 'EPILOGUE', closingTitle: 'The Organizer’s Creed', oathLines: ['We pledge to manage every event with humility, vigilance, and tireless enthusiasm.', 'We pledge to champion fair play, honest judging, and equal opportunity for all participants.', 'We pledge to build spaces where young dreamers find courage and community.', 'We are the architects of convergence; we bring the brightest minds together.'], signoff: 'Events Directorate · Technovation MMXXVI', sealLabel: 'CONVERGENCE VERIFIED' },
      { pageNumber: 16, type: 'cover-back', title: 'TECHNOVATION', volume: 'VOL. 05 · EVENTS', barcode: '978-0-TECH-2026-05', stamp: 'EVENTS ARCHIVE · ALL RIGHTS RESERVED' }
    ]
  },

  pr: {
    id: 'pr',
    key: 'pr',
    title: 'PR & Outreach',
    subtitle: 'Signals to the World',
    volume: 'VOL. 06',
    edition: 'Sponsorships, Partnerships & Media · MMXXVI',
    color: '#D97706',
    accentColor: '#FBBF24',
    foilColor: '#F59E0B',
    coverTexture: 'buckram-amber',
    motto: 'Vox Nostra In Orbem · Our Voice to the World',
    actionBtnText: 'EXPLORE OUTREACH DOSSIER',
    summary: 'The diplomatic corps and voice of Technovation. The PR & Outreach Wing secures industry sponsorships, establishes national university alliances, stewards media narratives, and amplifies our story across the globe.',
    pages: [
      { pageNumber: 1, type: 'cover-front', title: 'PR & OUTREACH', subtitle: 'SIGNALS TO THE WORLD', volume: 'VOL. 06', tagline: 'DIPLOMACY & IMPACT', embellishment: 'RADIAL_BROADCAST' },
      { pageNumber: 2, type: 'bookplate', title: 'Ex Libris Legatio', registry: 'REG-06-PR-2026', inscription: 'Chronicle of the Public Relations and Outreach Directorate. Written in alliances, signed in memoranda, broadcast across horizons.', date: 'Diplomatic Annals · MMXXVI' },
      { pageNumber: 3, type: 'frontispiece', chapterLabel: 'THEORY OF DIPLOMACY', heading: 'The Resonant Voice', quote: 'Brilliance confined to a locked room does not change the world. You must tell the story.', attribution: 'Outreach Council Manifesto · Volume VI' },
      { pageNumber: 4, type: 'manifesto-spread-left', chapterNumber: 'CHAPTER I', chapterTitle: 'The Signal', subheading: 'BUILDING REPUTATION', dropCap: 'A', bodyText: ['In an era saturated with short-lived noise, how does a student collective cut through and command serious institutional respect? Through authentic storytelling, professional diplomacy, and relentless follow-through.', 'The PR & Outreach Wing is the bridge between our engineering lab and the global industry. We cultivate relationships with Fortune 500 giants, visionary founders, and international tech communities.'], pullQuote: 'We do not ask for sponsorships as charity; we offer partners front-row access to the fiercest technical talent.' },
      { pageNumber: 5, type: 'manifesto-spread-right', headerLabel: 'OUTREACH CHANNELS', bodyText: ['Our work spans three high-impact verticals: Corporate Sponsorships & Grants, Community Alliances & University Chapters, and Editorial Press Communications.', 'We train our ambassadors in business etiquette, public speaking, negotiation tactics, and crisis communication.'], stats: [{ number: '₹15L+', label: 'Sponsorships Raised' }, { number: '40+', label: 'Corporate Partners' }, { number: '100k+', label: 'Social Reach per Campaign' }] },
      { pageNumber: 6, type: 'pillars-left', chapterNumber: 'CHAPTER II', chapterTitle: 'Diplomatic Tenets', subheading: 'CORE CODE OF CONDUCT', visionTitle: 'Outreach Vision', visionBody: 'To position Technovation as the gold standard of collegiate technical societies in institutional integrity and commercial viability.', pillars: [{ code: '01', title: 'Mutual Value Creation', desc: 'Every partnership must deliver measurable value to sponsors and tangible opportunity to students.' }, { code: '02', title: 'Impeccable Professionalism', desc: 'Prompt correspondence, transparent reporting, and zero broken promises.' }] },
      { pageNumber: 7, type: 'pillars-right', headerLabel: 'NARRATIVE INTEGRITY', missionTitle: 'Brand Stewardship', missionBody: 'Preserve and protect the hard-won reputation of the club across every public forum and social feed.', pillars: [{ code: '03', title: 'Truth in Storytelling', desc: 'We never exaggerate metrics or claim victories that were not genuinely won in the arena.' }, { code: '04', title: 'Open-Handed Alliances', desc: 'Collaborate generously with other student bodies; a rising tide lifts all collegiate boats.' }] },
      { pageNumber: 8, type: 'philosophy-left', chapterNumber: 'CHAPTER III', chapterTitle: 'The Art of Negotiation', subheading: 'TURNING PITCHES INTO PARTNERSHIPS', doctrine: 'Sponsors do not fund logos on banners; they invest in vibrant ecosystems of capable young talent who use their tools.', textColumns: ['We conduct meticulous market research before approaching companies, tailoring custom proposals that address each sponsor’s specific developer-relations objectives.', 'By treating sponsors as long-term collaborators rather than one-time ATMs, our retention rate exceeds 85% year over year.'] },
      { pageNumber: 9, type: 'philosophy-right', headerLabel: 'THE PARTNERSHIP LIFECYCLE', principles: [{ num: 'I', title: 'The Pre-Campaign Deep Dive', text: 'Identify alignment between sponsor developer tools and hackathon problem tracks.' }, { num: 'II', title: 'Transparent Deliverables', text: 'Detailed post-event impact reports with photo documentation and participant telemetry.' }, { num: 'III', title: 'Year-Round Engagement', text: 'Invite partner engineers to deliver guest workshops between major flagship summits.' }] },
      { pageNumber: 10, type: 'timeline-left', chapterNumber: 'CHAPTER IV', chapterTitle: 'Alliance Ledger', subheading: 'LANDMARK AGREEMENTS', milestones: [{ year: '2022', title: 'First Tier-1 Cloud Partner', desc: 'Secured official cloud credits and certified training for 200 club developers.' }, { year: '2024', title: 'Pan-India Student Network', desc: 'Formed bilateral collaboration charters with 25 engineering institutions across the country.' }] },
      { pageNumber: 11, type: 'timeline-right', headerLabel: 'EXPANDING HORIZONS', milestones: [{ year: '2025', title: 'International Venture Tie-Up', desc: 'Partnered with global accelerator to fast-track student hackathon projects into incubators.' }, { year: '2026', title: 'The Story Archives Media Tour', desc: 'Featured in leading national tech journals and national student media broadcasts.' }], quote: 'The reputation of an institution is built over decades and guarded in every email.' },
      { pageNumber: 12, type: 'achievements-left', chapterNumber: 'CHAPTER V', chapterTitle: 'Diplomatic Laurels', subheading: 'RELATIONS COMMENDED', awards: [{ title: 'Best Corporate Relations Team', source: 'National Collegiate Forum', year: '2025' }, { title: 'Highest Sponsorship Acquisition', source: 'Regional University Circuit', year: '2024' }, { title: 'Outstanding Media Campaign', source: 'Student Press Guild', year: '2025' }] },
      { pageNumber: 13, type: 'achievements-right', headerLabel: 'OUTREACH IMPACT', highlightMetric: '250,000+', highlightDesc: 'Active impressions across digital channels during flagship summit cycles.', callouts: ['Over 40 leading technology enterprises have funded and judged Technovation events.', 'Alumni working in global venture capital, PR communications, and developer relations for multinational leaders.'] },
      { pageNumber: 14, type: 'team-spread-left', chapterNumber: 'CHAPTER VI', chapterTitle: 'Diplomatic Council', subheading: 'MEDIA & PARTNERSHIP DIRECTORS', teamNote: 'Corporate liaisons, social media strategists, press secretaries, and sponsorship managers.', roles: [{ role: 'Director of Outreach', duty: 'Corporate sponsorship negotiations, legal MoUs, and university partnerships.' }, { role: 'Head of Public Relations', duty: 'Press releases, media relations, crisis management, and institutional communications.' }, { role: 'Community & Digital Lead', duty: 'Social channels, influencer engagement, alumni outreach, and podcast distribution.' }] },
      { pageNumber: 15, type: 'closing-spread', headerLabel: 'EPILOGUE', closingTitle: 'The Ambassador’s Oath', oathLines: ['We pledge to represent the club with dignified grace, honesty, and professional brilliance.', 'We pledge to guard the trust of our partners and deliver beyond expectations.', 'We pledge to amplify the achievements of our peers and ensure their hard work is recognized.', 'We are the voice to the world; we carry the flame of Technovation forward.'], signoff: 'Outreach Directorate · Technovation MMXXVI', sealLabel: 'DIPLOMATIC RECORD' },
      { pageNumber: 16, type: 'cover-back', title: 'TECHNOVATION', volume: 'VOL. 06 · PR & OUTREACH', barcode: '978-0-TECH-2026-06', stamp: 'DIPLOMATIC ARCHIVE · ALL RIGHTS RESERVED' }
    ]
  },

  team: {
    id: 'team',
    key: 'team',
    title: 'Core Team',
    subtitle: 'The Vanguard',
    volume: 'VOL. 07',
    edition: 'Leadership, Governance & Council · MMXXVI',
    color: '#0D9488',
    accentColor: '#2DD4BF',
    foilColor: '#14B8A6',
    coverTexture: 'buckram-teal',
    motto: 'Duces Non Domini · Leaders, Not Rulers',
    actionBtnText: 'MEET THE VANGUARD',
    summary: 'The operational command and strategic guardians of Technovation. The Core Team coordinates cross-departmental roadmaps, mentors emerging talent, resolves crises, and upholds our constitutional standards.',
    pages: [
      { pageNumber: 1, type: 'cover-front', title: 'CORE TEAM', subtitle: 'THE VANGUARD', volume: 'VOL. 07', tagline: 'LEADERSHIP & GOVERNANCE', embellishment: 'COUNCIL_HERALD' },
      { pageNumber: 2, type: 'bookplate', title: 'Ex Libris Praesidium', registry: 'REG-07-CORE-2026', inscription: 'Chronicle of the Executive Council and Strategic Leadership. Bound by duty, sworn to serve the collective.', date: 'Council Annals · MMXXVI' },
      { pageNumber: 3, type: 'frontispiece', chapterLabel: 'THEORY OF LEADERSHIP', heading: 'Servants of the Vision', quote: 'The first duty of a leader is to create more leaders, not more followers.', attribution: 'Council Charter Preamble · Volume VII' },
      { pageNumber: 4, type: 'manifesto-spread-left', chapterNumber: 'CHAPTER I', chapterTitle: 'The Vanguard', subheading: 'STEWARDSHIP OF CULTURE', dropCap: 'L', bodyText: ['Leadership within Technovation is not a crown of privilege; it is a heavy mantle of responsibility. The Core Team does not exist to command from ivory towers, but to sweep the floors, untie logistical knots, and clear obstacles for every member.', 'We believe that the measure of great governance is how seamlessly the guild flourishes when leadership steps out of the room.'], pullQuote: 'To lead Technovation is to serve with humility and execute with uncompromising discipline.' },
      { pageNumber: 5, type: 'manifesto-spread-right', headerLabel: 'CONSTITUTIONAL STRUCTURE', bodyText: ['Our governance model balances swift operational agility with constitutional checks and balances. The Core Council meets weekly to review department telemetry, financial ledgers, and project roadmaps.', 'Every council decision must withstand one question: Does this elevate the student experience and preserve the club’s integrity for the next generation?'], stats: [{ number: '100%', label: 'Constitutional Transparency' }, { number: '1:4', label: 'Mentor-to-Member Ratio' }, { number: '0', label: 'Tolerance for Politics' }] },
      { pageNumber: 6, type: 'pillars-left', chapterNumber: 'CHAPTER II', chapterTitle: 'Leadership Canon', subheading: 'THE THREE PILLARS OF COMMAND', visionTitle: 'Governance Philosophy', visionBody: 'We replace bureaucratic red tape with transparent ownership, high trust, and radical accountability.', pillars: [{ code: '01', title: 'Lead by Example', desc: 'No leader asks a junior to do a task they have not willingly performed themselves.' }, { code: '02', title: 'Intellectual Honesty', desc: 'Acknowledge mistakes instantly and publicly; course-correct without ego.' }] },
      { pageNumber: 7, type: 'pillars-right', headerLabel: 'CULTURE AS CODE', missionTitle: 'Guardian of Values', missionBody: 'Ensure that rapid growth never erodes the intimate, supportive, and fearless spirit that sparked Technovation.', pillars: [{ code: '03', title: 'Relentless Mentorship', desc: 'Every senior lead must train their successor from day one of their term.' }, { code: '04', title: 'Fair Mediation', desc: 'Resolve disagreements objectively based on core values and merit.' }] },
      { pageNumber: 8, type: 'philosophy-left', chapterNumber: 'CHAPTER III', chapterTitle: 'The Council Chamber', subheading: 'HOW DECISIONS ARE MADE', doctrine: 'Consensus when possible; conviction when necessary. When an emergency strikes, clear command and decisive action protect the team.', textColumns: ['Our weekly syncs follow a strict cadence: 15 minutes of wins, 30 minutes of operational blockers, and 45 minutes of strategic roadmap innovation.', 'Minutes are open to the entire membership; transparency is the ultimate antidote to campus politics.'] },
      { pageNumber: 9, type: 'philosophy-right', headerLabel: 'CRISIS MANAGEMENT CODE', principles: [{ num: 'I', title: 'Calm is Contagious', text: 'When equipment fails or deadlines loom, the council’s composure stabilizes the entire guild.' }, { num: 'II', title: 'Protect the Team', text: 'Absorb external pressures from sponsors or administration; insulate members so they can create freely.' }, { num: 'III', title: 'The Succession Test', text: 'A term is judged a success only if the incoming council outperforms the outgoing one.' }] },
      { pageNumber: 10, type: 'timeline-left', chapterNumber: 'CHAPTER IV', chapterTitle: 'Council Chronicles', subheading: 'MILESTONES IN GOVERNANCE', milestones: [{ year: '2021', title: 'The Club Constitution', desc: 'Drafted the formal charter defining departmental autonomy, election rules, and ethics.' }, { year: '2023', title: 'The Departmental Split', desc: 'Restructured the society into 7 autonomous wings with dedicated lead councils.' }] },
      { pageNumber: 11, type: 'timeline-right', headerLabel: 'MODERN LEADERSHIP', milestones: [{ year: '2025', title: 'Alumni Advisory Board', desc: 'Formed permanent council of past presidents providing strategic guidance and career pathways.' }, { year: '2026', title: 'The Story Archives Governance', desc: 'Institutionalized open digital documentation to ensure history is never forgotten.' }], quote: 'We do not inherit Technovation from our founders; we borrow it from those who will join tomorrow.' },
      { pageNumber: 12, type: 'achievements-left', chapterNumber: 'CHAPTER V', chapterTitle: 'Council Laurels', subheading: 'GOVERNANCE RECOGNIZED', awards: [{ title: 'Best Student Governance Model', source: 'All-India Youth Forum', year: '2025' }, { title: 'Excellence in Inclusive Leadership', source: 'Campus Ethics Commission', year: '2024' }, { title: 'Most Organized Student Society', source: 'Institutional Review Council', year: '2025' }] },
      { pageNumber: 13, type: 'achievements-right', headerLabel: 'EXECUTIVE BENCHMARKS', highlightMetric: '100%', highlightDesc: 'Audited transparent financial allocation across all workshops, hackathons, and lab gear.', callouts: ['Over 50 council members successfully graduated into prominent engineering leadership roles worldwide.', 'Zero reported internal disputes reaching external arbitration in club history.'] },
      { pageNumber: 14, type: 'team-spread-left', chapterNumber: 'CHAPTER VI', chapterTitle: 'The Council Roster', subheading: 'OFFICERS OF THE REALM', teamNote: 'The elected executive council for the 2025–2026 academic tenure.', roles: [{ role: 'President', duty: 'Executive leadership, institutional strategy, and constitutional integrity.' }, { role: 'Vice President', duty: 'Cross-wing alignment, member welfare, and day-to-day operations.' }, { role: 'General Secretary', duty: 'Institutional correspondence, archives management, and statutory records.' }] },
      { pageNumber: 15, type: 'closing-spread', headerLabel: 'EPILOGUE', closingTitle: 'The Leader’s Oath', oathLines: ['We pledge to govern with humility, justice, and unyielding dedication.', 'We pledge to put the needs of our members before our personal glory.', 'We pledge to guard the values of Technovation against complacency and decay.', 'We are the Vanguard; we serve so that all may build.'], signoff: 'The Executive Council · Technovation MMXXVI', sealLabel: 'COUNCIL CERTIFIED' },
      { pageNumber: 16, type: 'cover-back', title: 'TECHNOVATION', volume: 'VOL. 07 · CORE TEAM', barcode: '978-0-TECH-2026-07', stamp: 'COUNCIL ARCHIVE · ALL RIGHTS RESERVED' }
    ]
  },

  legacy: {
    id: 'legacy',
    key: 'legacy',
    title: 'Legacy',
    subtitle: 'Hall of Echoes',
    volume: 'VOL. 08',
    edition: 'Heritage, Alumni & Eternity · MMXXVI',
    color: '#DC2626',
    accentColor: '#EF4444',
    foilColor: '#F87171',
    coverTexture: 'buckram-crimson',
    motto: 'Monumentum Aere Perennius · A Monument More Lasting Than Bronze',
    actionBtnText: 'EXPLORE HERITAGE GALLERY',
    summary: 'We stand on the shoulders of the pioneers who walked these hallways before us. Our legacy spans championship hackathon trophies, historic festivals, startups founded by our peers, and distinguished alumni spearheading top global research labs.',
    pages: [
      { pageNumber: 1, type: 'cover-front', title: 'LEGACY', subtitle: 'HALL OF ECHOES', volume: 'VOL. 08', tagline: 'HERITAGE & ALUMNI', embellishment: 'ETERNAL_TORCH' },
      { pageNumber: 2, type: 'bookplate', title: 'Ex Libris Memoria', registry: 'REG-08-LEGACY-2026', inscription: 'Chronicle of Alumni, Historians & the Heritage Council. Preserved for eternity so that no pioneer is forgotten.', date: 'Heritage Annals · MMXXVI' },
      { pageNumber: 3, type: 'frontispiece', chapterLabel: 'THEORY OF CONTINUITY', heading: 'The Unbroken Chain', quote: 'A society grows great when people plant trees in whose shade they shall never sit.', attribution: 'Alumni Council Inscription · Volume VIII' },
      { pageNumber: 4, type: 'manifesto-spread-left', chapterNumber: 'CHAPTER I', chapterTitle: 'The Hall of Echoes', subheading: 'VOICES FROM THE PAST', dropCap: 'N', bodyText: ['No great institution is built in a single season. The laptops, oscilloscopes, and software frameworks in our lab carry the invisible fingerprints of hundreds of students who poured their youth and passion into this ground.', 'The Legacy Wing exists to bridge yesterday and tomorrow. We preserve our founding folklore, celebrate our distinguished alumni, and ensure that current members understand the giant shoulders upon which they stand.'], pullQuote: 'We do not begin anew with each incoming cohort. We stand upon an unbroken foundation of five generations of excellence.' },
      { pageNumber: 5, type: 'manifesto-spread-right', headerLabel: 'ALUMNI CONSTELLATION', bodyText: ['Our alumni spearhead engineering divisions at top Silicon Valley enterprises, found venture-backed tech startups, and conduct PhD research in quantum information and autonomous robotics.', 'Yet every year, they return to mentor freshmen, sponsor hackathons, and evaluate final projects—an unbreakable bond that defines Technovation.'], stats: [{ number: '25+', label: 'Startups Founded by Alumni' }, { number: '12', label: 'Countries with Alumni Chapters' }, { number: '₹50Cr+', label: 'Cumulative Venture Funding' }] },
      { pageNumber: 6, type: 'pillars-left', chapterNumber: 'CHAPTER II', chapterTitle: 'Heritage Pillars', subheading: 'ENDURING PRINCIPLES', visionTitle: 'Heritage Vision', visionBody: 'To build a multigenerational collegiate legacy that rivals the world’s most respected research guilds.', pillars: [{ code: '01', title: 'Continuous Tradition', desc: 'Pass down our internal lore, technical playbooks, and moral values without dilution.' }, { code: '02', title: 'Alumni Mentorship', desc: 'Every graduate remains an active node in our knowledge network, mentoring the next wave.' }] },
      { pageNumber: 7, type: 'pillars-right', headerLabel: 'THE ETERNAL FLAME', missionTitle: 'The Eternal Torch', missionBody: 'Ensure that the flame ignited in room C-204 burns brighter with every passing decade.', pillars: [{ code: '03', title: 'Endowment & Giving', desc: 'Alumni reinvest funds and hardware grants back into the student lab to support fresh talent.' }, { code: '04', title: 'Historic Record', desc: 'Document every hackathon, every council, and every breakthrough in immutable public archives.' }] },
      { pageNumber: 8, type: 'philosophy-left', chapterNumber: 'CHAPTER III', chapterTitle: 'Stories of the Pioneers', subheading: 'HOW LEGENDS WERE FORGED', doctrine: 'Before there was funding, there was audacity. The stories of our earliest cohorts are our sacred scripture.', textColumns: ['We remember the night of the 2021 power failure, when our team soldered circuits using smartphone flashlights to win the state championship.', 'We remember the first alumni who risked everything to launch a startup from a student hostel room—now employing hundreds of engineers.'] },
      { pageNumber: 9, type: 'philosophy-right', headerLabel: 'LESSONS OF THE TRAILBLAZERS', principles: [{ num: 'I', title: 'Never Forget Where You Began', text: 'No matter how high you climb in industry, your roots are in the student workshop.' }, { num: 'II', title: 'Give Back Double', text: 'For every hour of mentorship you received as a freshman, give two back as an alumnus.' }, { num: 'III', title: 'Aim for Immortality', text: 'Build institutions that will outlive your name. That is the only real victory.' }] },
      { pageNumber: 10, type: 'timeline-left', chapterNumber: 'CHAPTER IV', chapterTitle: 'Hall of Laureates', subheading: 'DISTINGUISHED ALUMNI', milestones: [{ year: '2021 Cohort', title: 'The Founding Seven', desc: 'All went on to FAANG engineering roles and founded 2 venture-backed AI firms.' }, { year: '2023 Cohort', title: 'The Champions', desc: 'Won 14 national hackathons in a single academic calendar year.' }] },
      { pageNumber: 11, type: 'timeline-right', headerLabel: 'GLOBAL FOOTPRINT', milestones: [{ year: '2024 Cohort', title: 'The Innovators', desc: 'Co-authored 8 published research papers in IEEE and ACM conferences.' }, { year: '2025 Cohort', title: 'The Builders', desc: 'Developed core systems of the Technovation Story Archives and web platform.' }], quote: 'The torch has been passed to your hands. Hold it high, and run with all your might.' },
      { pageNumber: 12, type: 'achievements-left', chapterNumber: 'CHAPTER V', chapterTitle: 'Heritage Laurels', subheading: 'LIFETIME IMPACT', awards: [{ title: 'Distinguished Alumni Network Award', source: 'National University Association', year: '2025' }, { title: 'Most Active Collegiate Mentorship Ring', source: 'Youth Career Forum', year: '2024' }, { title: 'Historic Preservation Commendation', source: 'ABES Student Affairs', year: '2025' }] },
      { pageNumber: 13, type: 'achievements-right', headerLabel: 'ALUMNI VALUATION', highlightMetric: '1,200+', highlightDesc: 'Distinguished graduates actively connected via the Technovation Alumni Portal.', callouts: ['Over ₹25,00,000 in student project grants funded directly through alumni micro-endowments.', 'Annual Alumni Homecoming Summit uniting 5 generations of Technovation leaders every winter.'] },
      { pageNumber: 14, type: 'team-spread-left', chapterNumber: 'CHAPTER VI', chapterTitle: 'Heritage Council', subheading: 'KEEPERS OF THE ARCHIVE', teamNote: 'Chaired jointly by the current President and the Alumni Council General Secretary.', roles: [{ role: 'Historian Laureate', duty: 'Oral history recordings, physical archive curation, and documentary records.' }, { role: 'Alumni Secretary', duty: 'Global alumni chapter coordination, career mentorship, and endowment stewardship.' }, { role: 'Council Emeritus', duty: 'Senior advisory council consisting of past society presidents.' }] },
      { pageNumber: 15, type: 'closing-spread', headerLabel: 'THE SACRED COVENANT', closingTitle: 'The Alumnus Covenant', oathLines: ['We who have crossed this stage remember the fire that gave us our start.', 'We will never turn away an aspiring member who reaches out for guidance.', 'We will support the club with our time, our wisdom, and our resources.', 'For as long as Technovation stands, we remain brothers and sisters in the craft.'], signoff: 'The Alumni Council & Historians · Technovation MMXXVI', sealLabel: 'ETERNAL HERITAGE' },
      { pageNumber: 16, type: 'cover-back', title: 'TECHNOVATION', volume: 'VOL. 08 · LEGACY', barcode: '978-0-TECH-2026-08', stamp: 'HERITAGE ARCHIVE · IMMUTABLE RECORD' }
    ]
  }
};

export default DEPARTMENT_BOOKS;
if (typeof window !== 'undefined') {
  window.DEPARTMENT_BOOKS = DEPARTMENT_BOOKS;
}
