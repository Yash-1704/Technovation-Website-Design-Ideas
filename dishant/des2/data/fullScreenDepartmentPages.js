/**
 * TECHNOVATION STORY ARCHIVES - FULL-VIEWPORT DEPARTMENT PAGES DATASET
 * Contains comprehensive 7-page rich editorial content for all 8 departments.
 * Formatted for full-viewport (100vw × 100vh) single-sheet physical reading.
 */

export const FULLSCREEN_DEPARTMENT_PAGES = {
  // 1. TECHNICAL DEPARTMENT (THE ARCHITECTS)
  technical: {
    id: 'technical',
    department: 'Technical Wing',
    title: 'The Architects: Systems & Code',
    edition: 'Systems & Intelligence · MMXXVI',
    volume: 'VOL. 02',
    color: '#0284C7',
    accentColor: '#38BDF8',
    shelfId: 'green',
    motto: 'Ex Nihilo Ad Codicem · Out of Nothing, Code',
    pages: [
      // Page 1: Chapter Introduction & Manifesto
      {
        pageNumber: 1,
        type: 'intro',
        chapterLabel: 'CHAPTER 02 · TECHNICAL DIRECTORATE',
        headline: 'The Code That Breathes',
        subheading: 'SYSTEMS, DISTRIBUTED INTELLIGENCE & PRODUCTION ARCHITECTURE',
        dropCap: 'T',
        bodyText: [
          'We do not simply write scripts to pass automated test suites; we architect resilient digital ecosystems designed to survive the chaos of real-world scale.',
          'Formed from the collision of systems engineers, machine learning researchers, and open-source contributors, the Technical Wing serves as the computational engine of Technovation. Every repository we commit is an intellectual contract: written cleanly, documented rigorously, and built to empower human capability.'
        ],
        quote: 'Clean architecture is not a luxury of time—it is a moral imperative of engineering.',
        meta: 'Archive Record #TECH-2026-01 · ABES Networking Club'
      },
      // Page 2: Our Technical Philosophy
      {
        pageNumber: 2,
        type: 'philosophy',
        chapterLabel: 'CHAPTER 02 · FOUNDATIONS',
        headline: 'First Principles of the Forge',
        subheading: 'THE CRAFT OF DETERMINISTIC COMPUTATION',
        dropCap: 'I',
        bodyText: [
          'In an era flooded with ephemeral frameworks and superficial abstractions, we return relentlessly to fundamentals: algorithmic efficiency, cache locality, memory safety, and deterministic state management.',
          'We teach our apprentices to trace an HTTP payload from user keystroke through browser event loops, TLS handshakes, reverse proxies, and database WAL logs before jumping to high-level microservices.'
        ],
        principles: [
          { num: 'I', title: 'Determinism Over Magic', desc: 'If you cannot predict failure modes under network partitions, you have not engineered the system.' },
          { num: 'II', title: 'Zero Vanity Metrics', desc: 'We measure throughput in milliseconds and developer joy in unblocked workflows, not star counts.' },
          { num: 'III', title: 'Open Guild Standards', desc: 'Every solution engineered for internal club operations is sanitized and open-sourced for all students.' }
        ]
      },
      // Page 3: Technology Stack & Core Pillars
      {
        pageNumber: 3,
        type: 'pillars',
        chapterLabel: 'CHAPTER 02 · STACK & SUBSYSTEMS',
        headline: 'The Living Stack',
        subheading: 'FOUR ARCHITECTURAL DISCIPLINES',
        pillars: [
          {
            code: '01',
            title: 'Cloud & Infrastructure',
            tech: 'Kubernetes · Terraform · Docker · GCP',
            desc: 'Multi-region clustering, automated CI/CD pipelines with sub-minute rollbacks, and zero-trust perimeter network security.'
          },
          {
            code: '02',
            title: 'Full-Stack Platforms',
            tech: 'TypeScript · React · Next.js · Node · GraphQL',
            desc: 'Sub-second first contentful paints, accessibility-certified design systems, and real-time WebSocket state synchronizers.'
          },
          {
            code: '03',
            title: 'Applied Machine Intelligence',
            tech: 'PyTorch · Transformers · TensorRT · LangChain',
            desc: 'Fine-tuned vision-language models for edge inference, autonomous retrieval systems, and semantic embeddings for the Archives.'
          },
          {
            code: '04',
            title: 'Embedded & Edge Hardware',
            tech: 'ESP32 · STM32 · FreeRTOS · Rust · CAN Bus',
            desc: 'Low-latency telemetry nodes, mesh networking protocols, and custom PCB hardware designed and soldered in our physical labs.'
          }
        ]
      },
      // Page 4: Systems Portfolio & Flagship Projects
      {
        pageNumber: 4,
        type: 'portfolio',
        chapterLabel: 'CHAPTER 02 · SHIP LOG',
        headline: 'Engineered in the Arena',
        subheading: 'PRODUCTION PLATFORMS AUTHORING IMPACT',
        projects: [
          {
            title: 'Project Aether: Campus Mesh',
            tag: 'DISTRIBUTED SYSTEMS',
            desc: 'An offline-first peer-to-peer mesh networking platform deployed across collegiate buildings for disaster communications and zero-latency campus updates.',
            stat: '10,000+ Concurrent Nodes'
          },
          {
            title: 'OmniScan: AI Defect Detector',
            tag: 'COMPUTER VISION',
            desc: 'Industrial conveyor inspection hardware combining high-speed infrared cameras with real-time quantized YOLOv8 inference under 12ms latency.',
            stat: '99.4% Defect Accuracy'
          },
          {
            title: 'TechnoVault: Cryptographic Archive',
            tag: 'DATA ENGINEERING',
            desc: 'Self-hosted immutable audit ledger storing verified member contributions, competition certificates, and historical guild annals with BLAKE3 hashes.',
            stat: '100% Cryptographic Auditability'
          }
        ]
      },
      // Page 5: Epochs & Historic Milestones
      {
        pageNumber: 5,
        type: 'timeline',
        chapterLabel: 'CHAPTER 02 · HISTORICAL TELEMETRY',
        headline: 'Epochs of Computation',
        subheading: 'MILESTONES FORGED UNDER PRODUCTION PRESSURE',
        milestones: [
          { year: '2021', title: 'The Monolith Deprecation', desc: 'Migrated fragmented student portals to a unified micro-frontend architecture with automated testing.' },
          { year: '2023', title: 'Smart India Hackathon Triumph', desc: 'Engineered an autonomous disaster drone coordination algorithm, capturing 1st place nationwide.' },
          { year: '2024', title: 'High-Throughput Open Source Lab', desc: 'Published 15+ production packages to npm and crates.io with over 150,000 aggregate downloads.' },
          { year: '2026', title: 'The Story Archives Engine', desc: 'Built the zero-dependency 3D spatial book reader bringing physical editorial realism to the modern web.' }
        ]
      },
      // Page 6: The Technical Council Roster
      {
        pageNumber: 6,
        type: 'team',
        chapterLabel: 'CHAPTER 02 · THE ROSTER',
        headline: 'Stewards of the Machine',
        subheading: 'LEADERSHIP & ARCHITECTURAL COUNCIL',
        roles: [
          { role: 'Chief Technical Officer', duty: 'Sets overall platform architecture, technical governance, and cross-wing systems alignment.' },
          { role: 'Lead Infrastructure Architect', duty: 'Manages cluster reliability, automated failover pipelines, and cloud telemetry budgets.' },
          { role: 'Head of Applied Intelligence', duty: 'Directs neural model fine-tuning, training clusters, and research publication initiatives.' },
          { role: 'Lead Systems Programmer', duty: 'Oversees embedded IoT boards, bare-metal hardware testing, and firmware security audits.' },
          { role: 'Frontend Experience Director', duty: 'Enforces sub-100ms interaction latency, fluid motion choreography, and high-DPI typography.' }
        ]
      },
      // Page 7: Epilogue & The Engineering Oath
      {
        pageNumber: 7,
        type: 'oath',
        chapterLabel: 'CHAPTER 02 · EPILOGUE',
        headline: 'The Technical Directorate Oath',
        subheading: 'SOLEMN COVENANT OF THE ARCHITECTS',
        stanzas: [
          'We pledge never to ship untested code that endangers our users or dishonors our craft.',
          'We pledge to build systems that elevate human autonomy, never algorithms that exploit human vulnerability.',
          'We pledge to mentor the freshman with the same boundless generosity with which our founders taught us.',
          'So long as silicon pulses with electricity, we will be there to engineer clarity out of complexity.'
        ],
        signoff: 'Sealed by the Directorate of Technical Architecture · Technovation MMXXVI',
        registry: 'AUTHENTIC ARCHIVE COPY · REG-02-TECH-2026'
      }
    ]
  },

  // 2. GRAPHICS DEPARTMENT (VISUAL PARADIGM)
  graphics: {
    id: 'graphics',
    department: 'Graphics & Visual Wing',
    title: 'Visual Paradigm: Aesthetics & Motion',
    edition: 'Form & Typography · MMXXVI',
    volume: 'VOL. 03',
    color: '#2E1065',
    accentColor: '#E879F9',
    shelfId: 'graphics',
    motto: 'Forma Est Anima Rerum · Form is the Soul of Things',
    pages: [
      {
        pageNumber: 1,
        type: 'intro',
        chapterLabel: 'CHAPTER 03 · VISUAL PARADIGM',
        headline: 'The Grammar of Light and Form',
        subheading: 'AESTHETICS, 3D TYPOGRAPHY & SPATIAL IDENTITY',
        dropCap: 'D',
        bodyText: [
          'Design in Technovation is not cosmetic dressing applied at the final hour. It is the fundamental architecture of communication: the lens through which complex engineering communicates with the human soul.',
          'The Graphics Wing bridges the visceral beauty of classical swiss typography with brutalist modernism and real-time generative shaders. We construct visual worlds that demand attention and refuse to be forgotten.'
        ],
        quote: 'Graphic design is intelligence made visible, audible, and tactile.',
        meta: 'Archive Record #GRAPH-2026-03 · ABES Networking Club'
      },
      {
        pageNumber: 2,
        type: 'philosophy',
        chapterLabel: 'CHAPTER 03 · CREATIVE DOCTRINE',
        headline: 'Tenets of the Visual Studio',
        subheading: 'REJECTING THE COMMONPLACE',
        dropCap: 'W',
        bodyText: [
          'We wage war against generic stock templates and uninspired corporate minimalism. Every poster, digital artifact, badge, and spatial visual must possess a heartbeat, a tension, and an unmistakable signature.',
          'Our designers study color theory alongside optical physics: how ink bleeds on textured parchment, how light refracts through glass prisms, and how negative space creates rhythm in human thought.'
        ],
        principles: [
          { num: 'I', title: 'Content Dictates Form', desc: 'Never impose a visual style upon an idea; listen deeply until the concept reveals its own aesthetic geometry.' },
          { num: 'II', title: 'Craft in the Micro-Details', desc: 'Kerning, leading, sub-pixel alignment, and paper grain are where professional mastery is won.' },
          { num: 'III', title: 'Aesthetic Conscience', desc: 'Beauty without truth is deceit. We design with clarity, accessibility, and unshakeable conviction.' }
        ]
      },
      {
        pageNumber: 3,
        type: 'pillars',
        chapterLabel: 'CHAPTER 03 · DISCIPLINES',
        headline: 'Creative Arenas',
        subheading: 'THE FOUR CRAFTS OF THE VISUAL GUILD',
        pillars: [
          {
            code: '01',
            title: 'Identity & Brand Architecture',
            tech: 'Custom Typefaces · Vector Logomarks · Design Systems',
            desc: 'Crafting cohesive, timeless brand identities that scale from 16px favicons to 60-foot festival stage backdrops.'
          },
          {
            code: '02',
            title: '3D Spatial Modeling & Shaders',
            tech: 'Blender · Three.js · Spline · GLSL Raymarching',
            desc: 'Creating tangible, photorealistic 3D materials, glass refractions, and interactive web geometries that defy gravity.'
          },
          {
            code: '03',
            title: 'Editorial & Archival Print',
            tech: 'Indesign · Foil Stamping · Screenprinting · Risograph',
            desc: 'Designing heavy-gauge physical exhibition catalogs, limited-edition apparel, and archival hardcover volumes.'
          },
          {
            code: '04',
            title: 'Motion Choreography',
            tech: 'After Effects · Cinema 4D · Lottie · Kinetic Type',
            desc: 'Choreographing dynamic rhythm, easing physics, and cinematic title sequences for summit trailers and keynotes.'
          }
        ]
      },
      {
        pageNumber: 4,
        type: 'portfolio',
        chapterLabel: 'CHAPTER 03 · GALLERY',
        headline: 'Selected Works from the Studio',
        subheading: 'EXHIBITION ARCHIVE',
        projects: [
          {
            title: 'Technovation Summit 2025 Identity',
            tag: 'BRAND SYSTEM',
            desc: 'A complete spatial identity inspired by quantum mechanics, generative moiré patterns, and holographic silver foil embossing.',
            stat: 'Exhibited to 5,000+ Attendees'
          },
          {
            title: 'The Codex Cybernetica Poster Series',
            tag: 'PRINT EDITORIAL',
            desc: 'Six screenprinted large-format manifestos blending 16th-century astronomical woodcuts with modern cybernetic schematics.',
            stat: 'Featured in National Design Review'
          },
          {
            title: 'Interactive 3D Bookshelf Experience',
            tag: 'CREATIVE DEV',
            desc: 'A tactile, nostalgic digital library honoring classic vintage VHS and clothbound archival literature with dynamic real-time shadows.',
            stat: 'Award of Excellence · 2026'
          }
        ]
      },
      {
        pageNumber: 5,
        type: 'timeline',
        chapterLabel: 'CHAPTER 03 · CHRONICLE',
        headline: 'The Evolution of the Aesthetic',
        subheading: 'BREAKTHROUGHS IN VISUAL LANGUAGE',
        milestones: [
          { year: '2022', title: 'The First Brand System', desc: 'Retired ad-hoc club posters; established the signature Technovation cobalt and ivory design canon.' },
          { year: '2024', title: 'The Generative Art Lab', desc: 'Integrated real-time mathematical shaders into summit keynote projections and interactive installations.' },
          { year: '2025', title: 'Best Visual Society Trophy', desc: 'Recognized statewide for outstanding collegiate brand identity and motion design production.' },
          { year: '2026', title: 'Story Archives Exhibition', desc: 'Unveiled the physical full-screen digital reading architecture honoring tactile heritage book craft.' }
        ]
      },
      {
        pageNumber: 6,
        type: 'team',
        chapterLabel: 'CHAPTER 03 · GUILD',
        headline: 'The Visual Directorate',
        subheading: 'THE MINDS SHAPING OUR IMAGE',
        roles: [
          { role: 'Creative Director', duty: 'Defines the overarching visual identity, aesthetic philosophy, and exhibition curation.' },
          { role: 'Lead 3D Visualizer', duty: 'Authors spatial geometries, photorealistic material lighting, and WebGL asset pipelines.' },
          { role: 'Senior Typographer', duty: 'Oversees custom letterforms, grid systems, and high-end editorial book layouts.' },
          { role: 'Lead Motion Choreographer', duty: 'Directs kinetic typography, festival teaser trailers, and user interface transitions.' }
        ]
      },
      {
        pageNumber: 7,
        type: 'oath',
        chapterLabel: 'CHAPTER 03 · EPILOGUE',
        headline: 'The Visual Guild Covenant',
        subheading: 'OATH OF CREATIVE AUDACITY',
        stanzas: [
          'We pledge to create with courage, never settling for the safe or the ordinary.',
          'We pledge to honor the heritage of masters while fearlessly inventing the visual idioms of tomorrow.',
          'We pledge that every line, curve, and shade we release into the world will carry meaning and craft.',
          'So long as human eyes seek wonder, we will be there to illuminate the darkness with beauty.'
        ],
        signoff: 'Sealed by the Creative Directorate · Technovation MMXXVI',
        registry: 'AUTHENTIC ARCHIVE COPY · REG-03-GRAPH-2026'
      }
    ]
  },

  // 3. ABOUT US (THE GENESIS)
  about: {
    id: 'about',
    department: 'Founders Council',
    title: 'About Us: The Genesis',
    edition: 'First Archive Edition · MMXXVI',
    volume: 'VOL. 01',
    color: '#1F3FB0',
    accentColor: '#F59E0B',
    shelfId: 'noon',
    motto: 'Per Scientiam Ad Astra · Through Knowledge to the Stars',
    pages: [
      {
        pageNumber: 1,
        type: 'intro',
        chapterLabel: 'CHAPTER 01 · THE GENESIS',
        headline: 'Born from Curiosity, Bound by Purpose',
        subheading: 'HOW A STUDENT DREAM BECAME A NATIONAL INSTITUTION',
        dropCap: 'W',
        bodyText: [
          'We did not begin with grand auditoriums or corporate sponsorships. Technovation was forged in cramped dormitory rooms, under the warm yellow hum of desk lamps long after midnight, amidst tangled jumper wires and discarded whiteboards.',
          'A handful of students noticed a silent divide: classrooms taught theorems, but the world demanded creation. They envisioned an autonomous guild where mechanical, electrical, and computer minds could dismantle boundaries and build real things that breathed and spoke.'
        ],
        quote: 'The most groundbreaking ideas never emerge from solitary silos; they ignite when divergent minds collide.',
        meta: 'Archive Record #GEN-2026-01 · ABES Networking Club'
      },
      {
        pageNumber: 2,
        type: 'philosophy',
        chapterLabel: 'CHAPTER 01 · PURPOSE',
        headline: 'The Soul of the Collective',
        subheading: 'WHY WE GATHER AND WHY WE BUILD',
        dropCap: 'L',
        bodyText: [
          'Technovation is not merely a technical society; it is an incubator of character. We believe that true engineering excellence requires emotional courage: the willingness to dismantle your own assumptions and rebuild from first principles.',
          'In our laboratories, senior members do not hoard knowledge. We measure the success of an executive council not by the trophies they bring home, but by the confidence they inspire in the quietest freshman in the room.'
        ],
        principles: [
          { num: 'I', title: 'Radical Inclusivity', desc: 'No gatekeeping. Every curious mind is welcome, regardless of prior experience or academic background.' },
          { num: 'II', title: 'Relentless Craft', desc: 'We do not build toy projects for resume bullet points; we build software and hardware that solves real problems.' },
          { num: 'III', title: 'Enduring Legacy', desc: 'Everything we create is thoroughly documented so that future generations can build higher than we ever could.' }
        ]
      },
      {
        pageNumber: 3,
        type: 'pillars',
        chapterLabel: 'CHAPTER 01 · PILLARS',
        headline: 'The Quad of Governance',
        subheading: 'OUR FOUR FOUNDATIONAL PILLARS',
        pillars: [
          {
            code: '01',
            title: 'Technical Mastery',
            tech: 'Rigor · Innovation · Systems Architecture',
            desc: 'Equipping members with industry-grade skills across full-stack development, machine learning, cloud architecture, and robotics.'
          },
          {
            code: '02',
            title: 'Aesthetic Conscience',
            tech: 'Design · Typography · 3D Spatial Motion',
            desc: 'Refining engineering prototypes into intuitive, human-centered products that delight and inspire.'
          },
          {
            code: '03',
            title: 'Community Stewardship',
            tech: 'Open Bootcamps · Mentorship · High-Impact Summits',
            desc: 'Democratizing technical knowledge across thousands of students through free workshops and open-source releases.'
          },
          {
            code: '04',
            title: 'Competitive Excellence',
            tech: 'National Hackathons · Research Papers · Patents',
            desc: 'Entering high-stakes national competitions and consistently upholding our legacy of podium finishes.'
          }
        ]
      },
      {
        pageNumber: 4,
        type: 'portfolio',
        chapterLabel: 'CHAPTER 01 · METRICS',
        headline: 'Measurable Footprint',
        subheading: 'SIX YEARS OF ACCELERATED EXPANSION',
        projects: [
          {
            title: '1,200+ Alumni Network',
            tag: 'GLOBAL REACH',
            desc: 'Former council members now building at Google, Microsoft, Amazon, frontier AI labs, and successful venture-backed startups across 12 countries.',
            stat: '98% Placement & Research Rate'
          },
          {
            title: '48+ National Championship Wins',
            tag: 'ARENA VICTORIES',
            desc: 'Dominant podium finishes across Smart India Hackathon, Google Solution Challenge, ACM ICPC Regionals, and Premier University Leagues.',
            stat: 'Trophy Cabinet Unmatched'
          },
          {
            title: '60+ Open Community Bootcamps',
            tag: 'KNOWLEDGE DEMOCRATIZATION',
            desc: 'Trained over 4,500 students in full-stack web, generative AI, cloud infrastructure, and 3D design completely free of charge.',
            stat: '4,500+ Students Impacted'
          }
        ]
      },
      {
        pageNumber: 5,
        type: 'timeline',
        chapterLabel: 'CHAPTER 01 · THE CHRONICLE',
        headline: 'The Odyssey of Technovation',
        subheading: 'FROM A DORMITORY ROOM TO A PERMANENT INSTITUTION',
        milestones: [
          { year: '2020', title: 'The Genesis Spark', desc: 'Seven students assemble in room C-204 to form an autonomous networking and software guild.' },
          { year: '2022', title: 'National Circuit Breakthrough', desc: 'First clean sweep at Smart India Hackathon; membership exceeds 300 active engineers.' },
          { year: '2024', title: 'The Studio Era', desc: 'Established 7 dedicated wings: Technical, Graphics, Production, Events, PR, Core Team & Legacy.' },
          { year: '2026', title: 'The Living Story Archives', desc: 'Launched the digital Story Archives to permanently chronicle our club history for all generations.' }
        ]
      },
      {
        pageNumber: 6,
        type: 'team',
        chapterLabel: 'CHAPTER 01 · LEADERSHIP',
        headline: 'The Executive Council',
        subheading: 'GUARDIANS OF THE CHARTER',
        roles: [
          { role: 'President & Founder', duty: 'Strategic vision, institutional representation, and long-term guild partnerships.' },
          { role: 'Vice President', duty: 'Operational execution, internal council harmony, and high-priority cross-wing projects.' },
          { role: 'General Secretary', duty: 'Constitutional governance, archive maintenance, and member welfare oversight.' },
          { role: 'Head of Mentorship', duty: 'Coordinates freshman training bootcamps, apprentice progress, and project guidance.' }
        ]
      },
      {
        pageNumber: 7,
        type: 'oath',
        chapterLabel: 'CHAPTER 01 · THE CHARTER',
        headline: 'The Technovation Oath',
        subheading: 'SWORN BY EVERY INITIATED MEMBER',
        stanzas: [
          'We pledge to build with honor and integrity, holding craft above convenience.',
          'We pledge to teach what we have learned and mentor those who walk behind us.',
          'We pledge never to let comfort extinguish the sacred fire of our curiosity.',
          'So long as there is an unsolved riddle, we will be there to engineer an answer.'
        ],
        signoff: 'Signed and Sealed by the Executive Council · Technovation MMXXVI',
        registry: 'AUTHENTIC ARCHIVE COPY · REG-01-GENESIS-2026'
      }
    ]
  },

  // 4. PRODUCTION DEPARTMENT (THE WORKSHOP)
  production: {
    id: 'production',
    department: 'Production & Hardware Wing',
    title: 'The Workshop: Hardware & Fabrication',
    edition: 'Circuits & Mechanics · MMXXVI',
    volume: 'VOL. 04',
    color: '#064E3B',
    accentColor: '#34D399',
    shelfId: 'storm',
    motto: 'Manus Operantur, Mens Excogitat · Hands Operate, Mind Conceives',
    pages: [
      {
        pageNumber: 1,
        type: 'intro',
        chapterLabel: 'CHAPTER 04 · THE WORKSHOP',
        headline: 'Where Atoms Obey Logic',
        subheading: 'PCB DESIGN, MICROCONTROLLERS & ROBOTIC SYSTEMS',
        dropCap: 'B',
        bodyText: [
          'Software is powerful, but software grounded in physical hardware changes the tangible world. The Production Wing is where abstract algorithms gain weight, torque, and tactile presence.',
          'Smelling of molten rosin and solder fumes, our workshop is home to 3D printers, CNC routers, oscilloscope stations, and microcontroller rigs. We turn copper clad boards into intelligent autonomous machinery.'
        ],
        quote: 'You do not understand the laws of physics until you have burnt a transistor with your own hands.',
        meta: 'Archive Record #PROD-2026-04 · ABES Networking Club'
      },
      {
        pageNumber: 2,
        type: 'philosophy',
        chapterLabel: 'CHAPTER 04 · DOCTRINE',
        headline: 'Laws of the Workbench',
        subheading: 'PHYSICAL ENGINEERING DISCIPLINES',
        dropCap: 'T',
        bodyText: [
          'Hardware offers no forgiving garbage collectors or runtime stack traces. A misplaced trace on a power rail will burn silicon instantly. Thus, our wing cultivates extreme discipline.',
          'We build prototypes that can withstand drops, vibrations, thermal stress, and power surges. We teach members schematic literacy, ground plane isolation, and electromagnetic compliance.'
        ],
        principles: [
          { num: 'I', title: 'Measure Twice, Solder Once', desc: 'Always verify power rails with a multimeter before plugging in microcontrollers.' },
          { num: 'II', title: 'Thermal Respect', desc: 'Heat is the silent killer of physical electronics; heat sinks and airflow must be calculated, not guessed.' },
          { num: 'III', title: 'Mechanical Symmetry', desc: 'Chassis design and center-of-gravity balance dictate robotic stability more than software PID tuning.' }
        ]
      },
      {
        pageNumber: 3,
        type: 'pillars',
        chapterLabel: 'CHAPTER 04 · HARDWARE ARENAS',
        headline: 'Crafts of the Workshop',
        subheading: 'FOUR CAPABILITIES OF THE FABRICATION LAB',
        pillars: [
          {
            code: '01',
            title: 'Custom PCB Fabrication',
            tech: 'KiCad · Altium · SMD Soldering · 4-Layer Boards',
            desc: 'Designing custom circuit boards with impedance matching, high-speed differential pairs, and compact surface-mount components.'
          },
          {
            code: '02',
            title: 'Autonomous Robotics',
            tech: 'ROS2 · LiDAR SLAM · BLDC Motor Drivers · IMU Fusion',
            desc: 'Building autonomous ground rovers and robotic arms capable of path planning, obstacle avoidance, and computer vision guidance.'
          },
          {
            code: '03',
            title: 'IoT & Telemetry Systems',
            tech: 'LoRaWAN · Zigbee · MQTT · ESP32 · Solar Harvesting',
            desc: 'Long-range remote sensor telemetry nodes capable of operating for years on small lithium batteries and solar harvesters.'
          },
          {
            code: '04',
            title: 'Rapid Additive Prototyping',
            tech: 'Fusion 360 · PETG / Carbon Fiber Printing · CNC Milling',
            desc: 'Designing structural enclosures, gearbox assemblies, and custom drone chassis with finite element stress analysis.'
          }
        ]
      },
      {
        pageNumber: 4,
        type: 'portfolio',
        chapterLabel: 'CHAPTER 04 · BUILT OBJECTS',
        headline: 'Machines That Shipped',
        subheading: 'HARDWARE PROTOTYPES IN ACTION',
        projects: [
          {
            title: 'Argus: All-Terrain Rover',
            tag: 'ROBOTICS PLATFORM',
            desc: 'A six-wheel rocker-bogie exploration vehicle with onboard LiDAR, stereo cameras, and sub-second terrain mapping for hazardous environments.',
            stat: '1st Place · National Robotics Forum'
          },
          {
            title: 'EcoNode: Agricultural Telemetry',
            tag: 'SMART IOT',
            desc: 'Over 50 solar-powered soil moisture and atmospheric monitoring probes deployed in local university botanical farms.',
            stat: '3 Years Continuous Operation'
          },
          {
            title: 'Aura: Dynamic Stage Visual Rig',
            tag: 'INTERACTIVE HARDWARE',
            desc: 'A custom 512-channel addressable LED matrix and DMX stage lighting controller responding to live audio frequencies with microsecond latency.',
            stat: 'Deployed at 4 National Conclaves'
          }
        ]
      },
      {
        pageNumber: 5,
        type: 'timeline',
        chapterLabel: 'CHAPTER 04 · EVOLUTION',
        headline: 'From Breadboards to Silicon',
        subheading: 'THE RISE OF THE PRODUCTION WING',
        milestones: [
          { year: '2021', title: 'The First Solder Station', desc: 'Assembled the original club hardware bench with two soldering irons and an analog oscilloscope.' },
          { year: '2023', title: 'Cleanroom PCB Mill Acquisition', desc: 'Enabled in-house prototype milling, reducing prototype turnaround times from 3 weeks to 4 hours.' },
          { year: '2025', title: 'National Hardware Innovation Award', desc: 'Awarded by the State Engineering Council for our open-source agricultural telemetry system.' },
          { year: '2026', title: 'Open Hardware Architecture Release', desc: 'Published all board schematics, gerbers, and CAD files under CERN Open Hardware License.' }
        ]
      },
      {
        pageNumber: 6,
        type: 'team',
        chapterLabel: 'CHAPTER 04 · GUILD',
        headline: 'The Workshop Council',
        subheading: 'MASTERS OF FABRICATION',
        roles: [
          { role: 'Head of Production & Fabrication', duty: 'Directs workshop safety, inventory procurement, and hardware project roadmaps.' },
          { role: 'Lead Electronics Architect', duty: 'Oversees schematic design, high-frequency PCB layout, and signal integrity testing.' },
          { role: 'Robotics Systems Lead', duty: 'Directs mechanical kinematics, motor control algorithms, and autonomous navigation sensors.' },
          { role: 'Rapid Prototyping Specialist', duty: 'Manages CAD modeling, 3D printing parameter optimization, and CNC machining.' }
        ]
      },
      {
        pageNumber: 7,
        type: 'oath',
        chapterLabel: 'CHAPTER 04 · EPILOGUE',
        headline: 'The Fabricator Covenant',
        subheading: 'OATH OF THE WORKBENCH',
        stanzas: [
          'We pledge to build machines that endure, refusing the waste of planned obsolescence.',
          'We pledge to treat electricity and machinery with the profound respect they command.',
          'We pledge that our hands will build the physical vessels through which human imagination acts.',
          'So long as matter can be shaped by mind, we will be at the forge creating.'
        ],
        signoff: 'Sealed by the Directorate of Production · Technovation MMXXVI',
        registry: 'AUTHENTIC ARCHIVE COPY · REG-04-PROD-2026'
      }
    ]
  },

  // 5. EVENTS DEPARTMENT (THE ARENA)
  events: {
    id: 'events',
    department: 'Events & Conclaves Wing',
    title: 'The Arena: Summits & Conclaves',
    edition: 'Experience & Scale · MMXXVI',
    volume: 'VOL. 05',
    color: '#991B1B',
    accentColor: '#FB7185',
    shelfId: 'events',
    motto: 'In Conclavi Veritas · In Assembly, Truth',
    pages: [
      {
        pageNumber: 1,
        type: 'intro',
        chapterLabel: 'CHAPTER 05 · THE ARENA',
        headline: 'Gathering the Pioneers',
        subheading: 'NATIONAL CONCLAVES, 36-HOUR HACKATHONS & EXPERIENTIAL SCALE',
        dropCap: 'A',
        bodyText: [
          'Great ideas die in isolation if there is no arena to challenge and celebrate them. The Events Wing transforms passive students into fearless competitors, builders, and lifelong collaborators.',
          'We stage the summits that students remember for the rest of their lives: 36-hour hackathons filled with adrenaline and midnight coffee, competitive esports leagues, hands-on hardware expos, and international tech conferences.'
        ],
        quote: 'An event is not an agenda; it is an unforgettable collective memory.',
        meta: 'Archive Record #EVNT-2026-05 · ABES Networking Club'
      },
      {
        pageNumber: 2,
        type: 'philosophy',
        chapterLabel: 'CHAPTER 05 · STAGECRAFT',
        headline: 'The Science of High-Impact Gatherings',
        subheading: 'SEAMLESS LOGISTICS MEET IMMERSIVE EXPERIENCES',
        dropCap: 'P',
        bodyText: [
          'Behind every flawless 1,000-person summit lies months of relentless orchestration: precision timekeeping, audio-visual choreography, dietary logistics, emergency medical plans, and sponsor relations.',
          'We treat crowd psychology as an exact science. Every attendee should feel an electrical current of excitement the moment they receive their badge at the registration gate.'
        ],
        principles: [
          { num: 'I', title: 'Frictionless Experience', desc: 'Queues, broken microphones, and network dropouts are unforgivable. We test backup systems three times over.' },
          { num: 'II', title: 'Fair and Transparent Play', desc: 'In our hackathons and competitions, judging rubrics are public, impartial, and strictly meritocratic.' },
          { num: 'III', title: 'Hospitality is Sacred', desc: 'Every guest speaker, judge, and out-of-state participant is treated with royal collegiate warmth.' }
        ]
      },
      {
        pageNumber: 3,
        type: 'pillars',
        chapterLabel: 'CHAPTER 05 · FORMATS',
        headline: 'Signature Event Formats',
        subheading: 'FOUR PRODUCTION SCALE BLUEPRINTS',
        pillars: [
          {
            code: '01',
            title: 'HackHorizon (National Hackathon)',
            tech: '36 Hours · 1,500+ Participants · $10K+ Prize Pool',
            desc: 'Our flagship hackathon drawing collegiate teams from across the nation to solve real-world problems in AI, Web3, and HealthTech.'
          },
          {
            code: '02',
            title: 'TechnoConclava (Annual Summit)',
            tech: '2 Days · 3 Tracks · Keynotes from Silicon Valley & Bengaluru',
            desc: 'Our grand annual conference featuring industry thought leaders, live hardware demos, and career networking roundtables.'
          },
          {
            code: '03',
            title: 'DevSprint Bootcamps',
            tech: 'Intensive Weekend Workshops · Hands-on Coding',
            desc: 'Hyper-focused technical sprints where newcomers build and deploy their first production application within 48 hours.'
          },
          {
            code: '04',
            title: 'The Innovation Expo',
            tech: 'Public Showcases · Venture Capitalist Panels',
            desc: 'An open exhibition hall where student engineers demonstrate prototypes to visiting angel investors and university chancellors.'
          }
        ]
      },
      {
        pageNumber: 4,
        type: 'portfolio',
        chapterLabel: 'CHAPTER 05 · NUMBERS',
        headline: 'Scale by the Numbers',
        subheading: 'SIX YEARS OF GATHERING THOUSANDS',
        projects: [
          {
            title: '25,000+ Lifetime Attendees',
            tag: 'CUMULATIVE AUDIENCE',
            desc: 'Aggregated participants hosted across our hackathons, guest lectures, bootcamps, and annual tech symposiums.',
            stat: 'Largest Society in Region'
          },
          {
            title: '150+ Industry Speakers Hosted',
            tag: 'THOUGHT LEADERSHIP',
            desc: 'Engineers, executives, and researchers welcomed from Google, Microsoft, Meta, NASA JPL, and unicorn Indian startups.',
            stat: '98% Positive Attendee Rating'
          },
          {
            title: '400+ Mentored Hackathon Teams',
            tag: 'BUILDER CATALYST',
            desc: 'Directly supported student teams that went on to patent ideas, launch startups, or win prestigious international fellowships.',
            stat: 'Over $500K in Follow-on Funding'
          }
        ]
      },
      {
        pageNumber: 5,
        type: 'timeline',
        chapterLabel: 'CHAPTER 05 · EPOCHS',
        headline: 'Chronicles of the Arena',
        subheading: 'HOW OUR SUMMITS GREW IN STATURE',
        milestones: [
          { year: '2021', title: 'The Virtual Conclave', desc: 'Successfully hosted our first 1,000-person summit entirely online during lockdown with zero stream latency.' },
          { year: '2023', title: 'HackHorizon In-Person Launch', desc: 'Filled the main university auditorium with 800 overnight builders; received state media coverage.' },
          { year: '2025', title: 'Best Collegiate Event Trophy', desc: 'Honored with the Prestigious National Campus Leadership Trophy for event operational excellence.' },
          { year: '2026', title: 'International Summit Edition', desc: 'Welcoming partner university delegations from Singapore, Germany, and the UK to our spring conclave.' }
        ]
      },
      {
        pageNumber: 6,
        type: 'team',
        chapterLabel: 'CHAPTER 05 · GUILD',
        headline: 'The Events Directorate',
        subheading: 'ARCHITECTS OF EXPERIENCE',
        roles: [
          { role: 'Director of Events & Conclaves', duty: 'Lead strategist for annual calendar planning, summit approvals, and executive production.' },
          { role: 'Head of Operations & Logistics', duty: 'Coordinates venue contracts, power redundancy, catering, and security protocols.' },
          { role: 'Head of Hospitality & VIP Relations', duty: 'Manages speaker itineraries, judge hospitality suites, and keynote travel arrangements.' },
          { role: 'Stage & Broadcast Producer', duty: 'Oversees multi-camera live streams, stage lighting transitions, and auditorium acoustics.' }
        ]
      },
      {
        pageNumber: 7,
        type: 'oath',
        chapterLabel: 'CHAPTER 05 · EPILOGUE',
        headline: 'The Arena Covenant',
        subheading: 'OATH OF THE EVENT DIRECTORS',
        stanzas: [
          'We pledge to create spaces where every participant feels valued, challenged, and inspired.',
          'We pledge that our stages will always champion truth, meritocracy, and authentic innovation.',
          'We pledge that behind the magic of our summits, our discipline and preparation will be absolute.',
          'So long as builders yearn to meet and compete, we will build the arenas where legends are born.'
        ],
        signoff: 'Sealed by the Directorate of Events · Technovation MMXXVI',
        registry: 'AUTHENTIC ARCHIVE COPY · REG-05-EVNT-2026'
      }
    ]
  },

  // 6. PR & OUTREACH (THE RESONANCE)
  pr: {
    id: 'pr',
    department: 'PR & Strategic Outreach Wing',
    title: 'The Resonance: Voice & Partnerships',
    edition: 'Narrative & Reach · MMXXVI',
    volume: 'VOL. 06',
    color: '#1E3A8A',
    accentColor: '#93C5FD',
    shelfId: 'bluehour',
    motto: 'Vox Nostra Resonat · Our Voice Resonates',
    pages: [
      {
        pageNumber: 1,
        type: 'intro',
        chapterLabel: 'CHAPTER 06 · THE RESONANCE',
        headline: 'The Voice That Carries Far',
        subheading: 'STRATEGIC ALLIANCES, INSTITUTIONAL COMMUNICATIONS & GLOBAL OUTREACH',
        dropCap: 'A',
        bodyText: [
          'A brilliant invention kept in silence helps no one. The PR & Outreach Wing is the herald and ambassador of Technovation, ensuring our stories, achievements, and open-source releases reach millions.',
          'We manage strategic corporate sponsorships, negotiate bilateral partnerships with industry leaders, cultivate relations with press media, and maintain our global alumni network spanning five continents.'
        ],
        quote: 'Words thoughtfully spoken can open doors that raw force could never breach.',
        meta: 'Archive Record #PR-2026-06 · ABES Networking Club'
      },
      {
        pageNumber: 2,
        type: 'philosophy',
        chapterLabel: 'CHAPTER 06 · DIPLOMACY',
        headline: 'The Craft of Genuine Partnership',
        subheading: 'BEYOND TRANSACTIONAL SPONSORSHIPS',
        dropCap: 'W',
        bodyText: [
          'We do not treat corporate partners as mere logo-stamps on a flyer. We build symbiotic relationships: offering tech companies direct access to top engineering talent while securing funded hardware labs and mentorship for our members.',
          'Our communications team operates with journalistic integrity. We report our club triumphs with humility, acknowledge setbacks with transparency, and always put our student builders in the spotlight.'
        ],
        principles: [
          { num: 'I', title: 'Authentic Narrative', desc: 'Never exaggerate or manufacture claims. The raw truth of student innovation is compelling enough on its own.' },
          { num: 'II', title: 'Mutual Value Creation', desc: 'Every partnership must deliver genuine educational value to our students, not just funding.' },
          { num: 'III', title: 'Lifelong Fellowship', desc: 'Once a member of Technovation, always an ambassador. Our alumni remain our closest allies.' }
        ]
      },
      {
        pageNumber: 3,
        type: 'pillars',
        chapterLabel: 'CHAPTER 06 · WINGS',
        headline: 'Outreach Arenas',
        subheading: 'FOUR CHANNELS OF STRATEGIC ENGAGEMENT',
        pillars: [
          {
            code: '01',
            title: 'Corporate Sponsorship & Grants',
            tech: 'Sponsorship Decks · CSR Grants · Lab Endowments',
            desc: 'Securing multi-million rupee operational budgets and equipment donations from top multinational tech firms.'
          },
          {
            code: '02',
            title: 'Global Alumni Relations',
            tech: 'Mentorship Network · Job Referrals · Annual Dinners',
            desc: 'Connecting current students with over 1,200 alumni leaders working across global tech hubs in Europe, North America, and Asia.'
          },
          {
            code: '03',
            title: 'Institutional & Media Communications',
            tech: 'Press Releases · University Relations · Whitepapers',
            desc: 'Authoring official club publications, press statements, and ensuring seamless compliance with university leadership.'
          },
          {
            code: '04',
            title: 'Digital Storytelling & Social Reach',
            tech: 'LinkedIn · YouTube · Podcasts · Technical Articles',
            desc: 'Broadcasting student project documentaries, podcast interviews with founders, and engineering thought leadership.'
          }
        ]
      },
      {
        pageNumber: 4,
        type: 'portfolio',
        chapterLabel: 'CHAPTER 06 · ALLIANCES',
        headline: 'Partners in Innovation',
        subheading: 'CORPORATE & INSTITUTIONAL PARTNERS',
        projects: [
          {
            title: 'Google Cloud Student Alliance',
            tag: 'ACADEMIC PARTNER',
            desc: 'Secured $50,000 in student cloud computing credits and direct technical mentorship from senior Google Cloud Architects.',
            stat: 'Over 600 Certified Students'
          },
          {
            title: 'The Silicon Valley Alumni Circle',
            tag: 'ALUMNI CHAPTER',
            desc: 'An established formal mentorship bridge connecting undergraduate engineers directly with senior alumni at FAANG and YC startups.',
            stat: '85+ Direct Intern Referrals'
          },
          {
            title: 'National Tech Press Coverage',
            tag: 'MEDIA REACH',
            desc: 'Featured extensively in premier technical journals and national newspapers for student-led hardware innovations.',
            stat: '2.5 Million Aggregate Impressions'
          }
        ]
      },
      {
        pageNumber: 5,
        type: 'timeline',
        chapterLabel: 'CHAPTER 06 · GROWTH',
        headline: 'Expanding the Perimeter',
        subheading: 'MILESTONES IN OUTREACH & INFLUENCE',
        milestones: [
          { year: '2022', title: 'First Corporate Title Sponsor', desc: 'Secured our first multi-lac corporate sponsorship, enabling free food and swag for all summit attendees.' },
          { year: '2023', title: 'Global Alumni Registry Launch', desc: 'Formalized our international alumni network across London, Berlin, San Francisco, and Singapore.' },
          { year: '2025', title: 'Institutional Excellence Citation', desc: 'Recognized by college administration for elevating the institutional profile across national rankings.' },
          { year: '2026', title: 'The Living Story Archives Initiative', desc: 'Spearheaded the public launch of the digital story archives to broadcast our heritage to the world.' }
        ]
      },
      {
        pageNumber: 6,
        type: 'team',
        chapterLabel: 'CHAPTER 06 · GUILD',
        headline: 'The Diplomatic Council',
        subheading: 'AMBASSADORS OF THE CLUB',
        roles: [
          { role: 'Head of Public Relations & Partnerships', duty: 'Lead diplomat for institutional negotiations, major sponsor relations, and brand reputation.' },
          { role: 'Alumni Relations Director', duty: 'Manages the global alumni directory, mentorship matchmaking, and alumni reunion dinners.' },
          { role: 'Head of Strategic Communications', duty: 'Oversees press releases, institutional newsletters, and official keynote speeches.' },
          { role: 'Social Media & Narrative Lead', duty: 'Directs digital campaigns, project showcases, and social channel engagement.' }
        ]
      },
      {
        pageNumber: 7,
        type: 'oath',
        chapterLabel: 'CHAPTER 06 · EPILOGUE',
        headline: 'The Ambassador Covenant',
        subheading: 'OATH OF THE OUTREACH DIRECTORS',
        stanzas: [
          'We pledge to speak with clarity, truth, and conviction, representing our guild with unwavering dignity.',
          'We pledge to build partnerships founded on trust and mutual educational progress.',
          'We pledge to carry the achievements of our student engineers into every hall and forum across the globe.',
          'So long as our voice can inspire another to build, we will speak without fear.'
        ],
        signoff: 'Sealed by the Directorate of PR & Outreach · Technovation MMXXVI',
        registry: 'AUTHENTIC ARCHIVE COPY · REG-06-PR-2026'
      }
    ]
  },

  // 7. CORE TEAM (THE STEWARDS)
  team: {
    id: 'team',
    department: 'Core Council Directorate',
    title: 'The Stewards: Hearts & Hands',
    edition: 'Leadership & Guild · MMXXVI',
    volume: 'VOL. 07',
    color: '#18181B',
    accentColor: '#FDE047',
    shelfId: 'observer',
    motto: 'Serviendo Praesumus · By Serving, We Lead',
    pages: [
      {
        pageNumber: 1,
        type: 'intro',
        chapterLabel: 'CHAPTER 07 · THE STEWARDS',
        headline: 'The Backbone of the Guild',
        subheading: 'SERVANT LEADERSHIP, GOVERNANCE & MEMBER WELFARE',
        dropCap: 'B',
        bodyText: [
          'Behind the trophies, the code repositories, the festivals, and the designs stands the Core Team: the quiet leaders who ensure the lights stay on, the bills are paid, the arguments are mediated, and every member is supported.',
          'True leadership in Technovation is never about authority or status badges. It is about service: being the first to arrive in the morning to unlock the workshop, and the last to leave at night sweeping the floor.'
        ],
        quote: 'He who wishes to be chief among you must be the servant of all.',
        meta: 'Archive Record #CORE-2026-07 · ABES Networking Club'
      },
      {
        pageNumber: 2,
        type: 'philosophy',
        chapterLabel: 'CHAPTER 07 · GOVERNANCE',
        headline: 'Constitutional Tenets',
        subheading: 'HOW AN AUTONOMOUS STUDENT BODY GOVERNS ITSELF',
        dropCap: 'A',
        bodyText: [
          'We operate under a written constitution that guarantees equal voice to all active members. No decisions regarding club finances, elections, or major projects are made behind closed doors.',
          'We enforce a zero-tolerance policy against toxicity, harassment, and gatekeeping. We believe that an atmosphere of psychological safety is the absolute prerequisite for high-risk technical innovation.'
        ],
        principles: [
          { num: 'I', title: 'Open Books', desc: 'Every rupee of our operational budget, sponsorship revenue, and expenditure is audited and visible to members.' },
          { num: 'II', title: 'Meritocratic Elections', desc: 'Council positions cannot be inherited or appointed by favoritism; they are earned through proven dedication and member vote.' },
          { num: 'III', title: 'Mental Wellbeing First', desc: 'We love late-night coding, but we care for our members first. Health and academics always take precedence over club duties.' }
        ]
      },
      {
        pageNumber: 3,
        type: 'pillars',
        chapterLabel: 'CHAPTER 07 · STEWARDSHIP',
        headline: 'Responsibilities of the Council',
        subheading: 'FOUR PILLARS OF GUILD GOVERNANCE',
        pillars: [
          {
            code: '01',
            title: 'Constitutional Integrity',
            tech: 'Charter · By-laws · Elections · Dispute Mediation',
            desc: 'Safeguarding the democratic governance of the club and ensuring transition of power remains peaceful and orderly.'
          },
          {
            code: '02',
            title: 'Financial Stewardship',
            tech: 'Budgeting · Auditing · Banking · Grants Management',
            desc: 'Transparently managing financial reserves, reimbursements for student project hardware, and festival finances.'
          },
          {
            code: '03',
            title: 'Member Welfare & Culture',
            tech: 'Onboarding · Mental Health · Anonymous Feedback',
            desc: 'Ensuring that every newcomer feels welcomed, protected from burnout, and provided with supportive mentors.'
          },
          {
            code: '04',
            title: 'Institutional Defense',
            tech: 'College Liaison · Academic Council · Lab Access',
            desc: 'Advocating fiercely for 24/7 laboratory access, attendance allowances for competitors, and institutional backing.'
          }
        ]
      },
      {
        pageNumber: 4,
        type: 'portfolio',
        chapterLabel: 'CHAPTER 07 · IMPACT',
        headline: 'Culture by the Numbers',
        subheading: 'A CULTURE THAT OUTLASTS INDIVIDUAL LEADERS',
        projects: [
          {
            title: '100% Democratic Transition Record',
            tag: 'STABLE GOVERNANCE',
            desc: 'Over six consecutive annual election cycles conducted cleanly with full member participation and zero governance stalemates.',
            stat: '6 Unbroken Transitions'
          },
          {
            title: 'Zero Member Fee Guarantee',
            tag: 'FREE MEMBERSHIP',
            desc: 'Funded completely by corporate sponsorships and competitive prize pools, ensuring no student ever pays a single rupee to join or learn.',
            stat: '100% Free Access for All'
          },
          {
            title: 'Project Equipment Micro-Grants',
            tag: 'STUDENT FUNDING',
            desc: 'Directly funded over 120 student hardware and software prototypes through internal society micro-grants.',
            stat: 'Over ₹15 Lacs Directly Disbursed'
          }
        ]
      },
      {
        pageNumber: 5,
        type: 'timeline',
        chapterLabel: 'CHAPTER 07 · EPOCHS',
        headline: 'The Maturation of Governance',
        subheading: 'EVOLUTION OF OUR LEADERSHIP CULTURE',
        milestones: [
          { year: '2020', title: 'The Founding Charter', desc: 'Drafted the original constitution establishing rotation of leadership and open books.' },
          { year: '2022', title: 'Creation of Dedicated Wings', desc: 'Expanded governance into seven specialized directorates to distribute power and scale operations.' },
          { year: '2024', title: 'Establishment of the Advisory Board', desc: 'Formed a permanent board composed of past club presidents to offer strategic counsel to active leaders.' },
          { year: '2026', title: 'The Story Archives Ratification', desc: 'Unanimously ratified the perpetual Story Archives to permanently safeguard our institutional memory.' }
        ]
      },
      {
        pageNumber: 6,
        type: 'team',
        chapterLabel: 'CHAPTER 07 · ROSTER',
        headline: 'The Executive Stewards',
        subheading: 'SERVANTS OF THE ARCHIVE',
        roles: [
          { role: 'President of the Council', duty: 'Overall institutional direction, executive coordination, and guardian of the founding charter.' },
          { role: 'Vice President of Operations', duty: 'Day-to-day administrative harmony, inventory oversight, and cross-wing logistics.' },
          { role: 'Treasurer & Comptroller', duty: 'Audit ledger maintenance, financial transparency reports, and project grant disbursements.' },
          { role: 'Ombudsperson & Welfare Lead', duty: 'Receives confidential feedback, mediates internal disputes, and ensures member wellbeing.' }
        ]
      },
      {
        pageNumber: 7,
        type: 'oath',
        chapterLabel: 'CHAPTER 07 · EPILOGUE',
        headline: 'The Stewards Covenant',
        subheading: 'SOLEMN OATH OF LEADERSHIP',
        stanzas: [
          'We pledge to lead with humility, placing the welfare of our members above personal glory.',
          'We pledge to handle every rupee entrusted to us with absolute transparency and scrupulous honesty.',
          'We pledge that when our term is finished, we will hand over the keys with clean hands and full hearts.',
          'So long as Technovation stands, we will be its loyal guardians and humble servants.'
        ],
        signoff: 'Sealed by the Executive Stewards · Technovation MMXXVI',
        registry: 'AUTHENTIC ARCHIVE COPY · REG-07-CORE-2026'
      }
    ]
  },

  // 8. LEGACY (ETERNAL ARCHIVE)
  legacy: {
    id: 'legacy',
    department: 'Heritage & Legacy Wing',
    title: 'Legacy: Monuments & Horizons',
    edition: 'Eternal Archive · MMXXVI',
    volume: 'VOL. 08',
    color: '#854D0E',
    accentColor: '#FCD34D',
    shelfId: 'door',
    motto: 'Ars Longa, Vita Brevis · Art is Long, Life is Brief',
    pages: [
      {
        pageNumber: 1,
        type: 'intro',
        chapterLabel: 'CHAPTER 08 · THE ETERNAL ARCHIVE',
        headline: 'What Outlives the Builder',
        subheading: 'PERMANENT RECORDS, MONUMENTS & UNWRITTEN TOMORROWS',
        dropCap: 'E',
        bodyText: [
          'Every student generation must eventually graduate. The laptops are packed, the lockers emptied, and the keys handed over to hands that have never felt the weight before.',
          'The Legacy Wing exists so that no sacrifice is forgotten. We collect the frayed notebooks, the old commit histories, the winning prototypes, and the untold stories of founders, preserving them in permanent archival form so that future students can know whose shoulders they stand upon.'
        ],
        quote: 'History is not a tombstone to be mourned; it is a torch to be carried into the night.',
        meta: 'Archive Record #LEG-2026-08 · ABES Networking Club'
      },
      {
        pageNumber: 2,
        type: 'philosophy',
        chapterLabel: 'CHAPTER 08 · MEMORY',
        headline: 'The Duty of Remembrance',
        subheading: 'WHY INSTITUTIONS SURVIVE THE CENTURIES',
        dropCap: 'T',
        bodyText: [
          'Universities are places of continuous turnover: every four years, an entire generation vanishes. Without conscious institutional memory, clubs restart from zero every autumn, repeating the same mistakes.',
          'We curate the institutional wisdom of Technovation. We catalog why certain projects succeeded, why others failed, and what philosophical ideals gave this guild its extraordinary resilience through years of struggle.'
        ],
        principles: [
          { num: 'I', title: 'Preserve the Failures', desc: 'Successes are easy to boast about; our greatest lessons were forged in late-night failures and smoky prototypes.' },
          { num: 'II', title: 'Honor Every Contributor', desc: 'The student who designed the flyer is just as vital to our history as the student who wrote the neural network.' },
          { num: 'III', title: 'Build Beyond Yourself', desc: 'The highest honor in our society is to build something so sturdy that it flourishes long after your name is forgotten.' }
        ]
      },
      {
        pageNumber: 3,
        type: 'pillars',
        chapterLabel: 'CHAPTER 08 · ARCHIVES',
        headline: 'Instruments of Preservation',
        subheading: 'FOUR ARCHIVAL REPOSITORIES',
        pillars: [
          {
            code: '01',
            title: 'The Digital Story Archives',
            tech: 'Full-Screen Paper Physics · 3D Shelf · Immutable Ledger',
            desc: 'The interactive web cathedral chronicling all eight wings with living editorial literature and primary documents.'
          },
          {
            code: '02',
            title: 'The Physical Hardware Museum',
            tech: 'Acrylic Display Cases · Preserved PCBs · Original Banners',
            desc: 'A physical exhibition cabinet in the campus engineering block housing the historic rovers and hackathon trophies.'
          },
          {
            code: '03',
            title: 'The Oral History Project',
            tech: 'High-Res Audio Interviews · Founder Transcripts',
            desc: 'Recorded long-form interviews capturing the unvarnished stories of past presidents, lead architects, and creative directors.'
          },
          {
            code: '04',
            title: 'The Open Guild Curriculum',
            tech: 'Curated Roadmaps · Video Archives · Code Boilerplates',
            desc: 'A permanent open-source digital academy giving any student access to our collective technical training material.'
          }
        ]
      },
      {
        pageNumber: 4,
        type: 'portfolio',
        chapterLabel: 'CHAPTER 08 · MONUMENTS',
        headline: 'Monuments of Technovation',
        subheading: 'PERMANENT CONTRIBUTIONS TO THE CAMPUS',
        projects: [
          {
            title: 'The C-204 Lab Renovation',
            tag: 'CAMPUS MONUMENT',
            desc: 'Transformed an abandoned storage classroom into a state-of-the-art makerspace with 24-hour access and high-speed fiber.',
            stat: 'Used by 500+ Students Daily'
          },
          {
            title: 'The Technovation Research Endowment',
            tag: 'ENDURING FUND',
            desc: 'A permanent revolving fund established by alumni donations to sponsor student conference travel and patent filings.',
            stat: '100% Student-Managed'
          },
          {
            title: 'The Living Story Archives Platform',
            tag: 'DIGITAL MONUMENT',
            desc: 'This very platform: bridging physical book history with bleeding-edge web physics to keep our story alive forever.',
            stat: 'Permanent Web Artifact'
          }
        ]
      },
      {
        pageNumber: 5,
        type: 'timeline',
        chapterLabel: 'CHAPTER 08 · CENTURY',
        headline: 'The Unwritten Centuries',
        subheading: 'WHERE WE HAVE BEEN AND WHERE WE WILL GO',
        milestones: [
          { year: '2020', title: 'The Forgotten Beginnings', desc: 'A handful of students dare to believe that college can be about creation rather than rote memorization.' },
          { year: '2023', title: 'The Expansion of Guilds', desc: 'Technovation becomes the definitive engineering collective of the institution with national acclaim.' },
          { year: '2026', title: 'The Archival Milestone', desc: 'Consolidated six years of triumphs, tears, and breakthroughs into the permanent Story Archives.' },
          { year: '2030+', title: 'The Horizon Beyond', desc: 'A community that outlives its founders, inspiring generation after generation to build fearlessly.' }
        ]
      },
      {
        pageNumber: 6,
        type: 'team',
        chapterLabel: 'CHAPTER 08 · GUILD',
        headline: 'The Curators of Memory',
        subheading: 'GUARDIANS OF THE CHRONICLE',
        roles: [
          { role: 'Grand Archivist', duty: 'Curator of permanent records, historical document preservation, and archive updates.' },
          { role: 'Curator of Hardware Heritage', duty: 'Restores and maintains physical legacy robots, display cases, and competition banners.' },
          { role: 'Editor of the Guild Annals', duty: 'Authors biographical profiles of alumni, founders, and remarkable student engineers.' },
          { role: 'Historian of the Charter', duty: 'Interprets founding principles, constitutional precedents, and guild traditions.' }
        ]
      },
      {
        pageNumber: 7,
        type: 'oath',
        chapterLabel: 'CHAPTER 08 · EPILOGUE',
        headline: 'The Eternal Covenant',
        subheading: 'THE FINAL INSCRIPTION',
        stanzas: [
          'We pledge to keep the memory of those who built this ground alive in our hearts.',
          'We pledge that the fire ignited in room C-204 will never be allowed to grow cold.',
          'We pledge to hand this torch to the next generation brighter and fiercer than we received it.',
          'Ars longa, vita brevis · The builders pass, but the monument endures.'
        ],
        signoff: 'Inscribed for Eternity · Technovation Archive Collective MMXXVI',
        registry: 'PERPETUAL ARCHIVE RECORD · REG-08-LEGACY-2026'
      }
    ]
  }
};
