/**
 * TECHNOVATION STORY ARCHIVES - FULL-VIEWPORT 3D PAGE TURN ANIMATOR
 * Renders physically authentic paper bending, curling, underside visibility,
 * specular lighting highlights, sweeping cast shadows, and drag-to-peel gesture tracking.
 */

export class PageTurnAnimator {
  constructor(containerEl, options = {}) {
    this.container = containerEl;
    this.isAnimating = false;
    this.isDragging = false;
    this.dragDirection = null; // 'next' or 'prev'
    this.dragStartX = 0;
    this.dragCurrentX = 0;
    this.dragProgress = 0;
    this.dragVelocity = 0;
    this.lastDragTime = 0;
    this.lastDragX = 0;

    this.onTurnComplete = options.onTurnComplete || null;
    this.renderPageCallback = options.renderPageCallback || null;
    this.getUndersideHtmlCallback = options.getUndersideHtmlCallback || null;

    // Web Audio synthesizer for tactile paper sound
    this.audioCtx = null;
    this.soundEnabled = true;

    this.initElements();
    this.initAudio();
  }

  /**
   * Initializes DOM layers for full-viewport physical turning
   */
  initElements() {
    // 1. Base Layer (Resting / Incoming revealed page)
    this.basePageEl = this.container.querySelector('#fsp-base-page');
    if (!this.basePageEl) {
      this.basePageEl = document.createElement('div');
      this.basePageEl.id = 'fsp-base-page';
      this.basePageEl.className = 'fsp-base-page';
      this.container.appendChild(this.basePageEl);
    }

    // 2. Sweeping Under-Sheet Cast Shadow
    this.castShadowEl = this.container.querySelector('#fsp-cast-shadow');
    if (!this.castShadowEl) {
      this.castShadowEl = document.createElement('div');
      this.castShadowEl.id = 'fsp-cast-shadow';
      this.castShadowEl.className = 'fsp-cast-shadow';
      this.container.appendChild(this.castShadowEl);
    }

    // 3. 3D Turning Sheet Container
    this.turningSheetEl = this.container.querySelector('#fsp-turning-sheet');
    if (!this.turningSheetEl) {
      this.turningSheetEl = document.createElement('div');
      this.turningSheetEl.id = 'fsp-turning-sheet';
      this.turningSheetEl.className = 'fsp-turning-sheet';
      this.turningSheetEl.innerHTML = `
        <div class="fsp-sheet-curl-container" id="fsp-curl-container">
          <!-- Front Face (Current page facing forward) -->
          <div class="fsp-face fsp-front-face" id="fsp-front-face"></div>
          <!-- Dynamic Cylindrical Paper Curl Lighting Overlay -->
          <div class="fsp-curl-lighting" id="fsp-curl-lighting"></div>
          <!-- Back Face (Underside of the sheet facing user after 90deg turn) -->
          <div class="fsp-face fsp-back-face" id="fsp-back-face"></div>
          <!-- Reverse Underside Lighting Overlay -->
          <div class="fsp-back-lighting" id="fsp-back-lighting"></div>
        </div>
      `;
      this.container.appendChild(this.turningSheetEl);
    }

    this.curlContainerEl = this.turningSheetEl.querySelector('#fsp-curl-container');
    this.frontFaceEl = this.turningSheetEl.querySelector('#fsp-front-face');
    this.backFaceEl = this.turningSheetEl.querySelector('#fsp-back-face');
    this.curlLightingEl = this.turningSheetEl.querySelector('#fsp-curl-lighting');
    this.backLightingEl = this.turningSheetEl.querySelector('#fsp-back-lighting');
  }

  /**
   * Initializes Web Audio Context for realistic paper rustle synthesis
   */
  initAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    } catch (e) {
      this.audioCtx = null;
    }
  }

  /**
   * Resumes audio context if suspended by browser autoplay policy
   */
  ensureAudio() {
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  /**
   * Synthesizes authentic crisp paper turn rustle sound
   */
  playRustleSound() {
    if (!this.soundEnabled || !this.audioCtx) return;
    try {
      this.ensureAudio();
      const ctx = this.audioCtx;
      const bufferSize = ctx.sampleRate * 0.45; // 450ms
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      // Pink/Brownian noise with textured spikes mimicking paper fiber friction
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        lastOut = (lastOut + 0.02 * white) / 1.02;
        data[i] = (lastOut * 2.5 + white * 0.15) * Math.sin((i / bufferSize) * Math.PI);
      }

      const noiseNode = ctx.createBufferSource();
      noiseNode.buffer = buffer;

      // Bandpass filter centered around paper scraping resonance (1600Hz)
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1600, ctx.currentTime);
      filter.Q.setValueAtTime(1.8, ctx.currentTime);

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.22, ctx.currentTime + 0.08);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.44);

      noiseNode.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      noiseNode.start();
    } catch (e) {
      // Audio playback fails gracefully
    }
  }

  /**
   * Synthesizes soft page landing impact
   */
  playLandingSound() {
    if (!this.soundEnabled || !this.audioCtx) return;
    try {
      this.ensureAudio();
      const ctx = this.audioCtx;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(130, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.13);
    } catch (e) {}
  }

  /**
   * Generates authentic underside parchment HTML with mirrored bleed and watermark
   * @param {string} frontHtml - Front page content for faint bleed-through
   * @param {Object} deptData - Department metadata
   */
  generateUndersideHtml(frontHtml, deptData = {}) {
    return `
      <div class="fsp-underside-surface">
        <div class="fsp-paper-grain"></div>
        <div class="fsp-paper-vignette"></div>
        <div class="fsp-underside-watermark">
          <svg viewBox="0 0 200 200" class="fsp-watermark-crest">
            <circle cx="100" cy="100" r="80" fill="none" stroke="${deptData.color || '#1F3FB0'}" stroke-width="1.5" stroke-dasharray="4,4"/>
            <polygon points="100,30 120,80 175,100 120,120 100,170 80,120 25,100 80,80" fill="none" stroke="${deptData.color || '#1F3FB0'}" stroke-width="1.5"/>
            <text x="100" y="105" font-family="'Newsreader', Georgia, serif" font-size="13" font-weight="500" fill="${deptData.color || '#1F3FB0'}" text-anchor="middle" letter-spacing="3">TECHNOVATION</text>
          </svg>
        </div>
        <!-- Faint inverted bleed-through of front page content -->
        <div class="fsp-underside-bleed">
          ${frontHtml}
        </div>
      </div>
    `;
  }

  /**
   * Executes a physical turn forward (reveals next page)
   * @param {string} currentPageHtml - Current full-screen page HTML
   * @param {string} nextPageHtml - Next full-screen page HTML
   * @param {Object} deptData - Department data
   * @param {number} duration - Animation duration in ms (default 850ms)
   * @returns {Promise} Resolves when turn is finished
   */
  turnForward(currentPageHtml, nextPageHtml, deptData, duration = 850) {
    if (this.isAnimating) return Promise.resolve(false);
    this.isAnimating = true;

    this.playRustleSound();

    // 1. Base page displays incoming page underneath
    this.basePageEl.innerHTML = nextPageHtml;
    this.basePageEl.style.opacity = '1';

    // 2. Turning sheet displays current page on front, underside on back
    this.frontFaceEl.innerHTML = currentPageHtml;
    this.backFaceEl.innerHTML = this.generateUndersideHtml(currentPageHtml, deptData);

    this.turningSheetEl.style.display = 'block';
    this.turningSheetEl.style.transformOrigin = 'left center';

    const startTime = performance.now();
    let hasPlayedLanding = false;

    return new Promise(resolve => {
      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        let progress = Math.min(1, elapsed / duration);

        // Natural physical ease-in-out curve
        // Accelerates as paper lifts, smoothly cushions as it lands
        const eased = this.physicalEase(progress);

        // Calculate 3D angles & physics properties
        const angle = -180 * eased; // from 0deg to -180deg
        
        // 3D paper curl arc: lifts towards viewer mid-flight
        const liftZ = Math.sin(progress * Math.PI) * 110; // max 110px peak
        // Subtle organic page flutter & tilt
        const tiltX = Math.sin(progress * Math.PI) * 2.8; 
        const curlSkew = Math.sin(progress * Math.PI) * 1.5;

        // Apply 3D transform to turning sheet
        this.turningSheetEl.style.transform = `
          translate3d(0, 0, ${liftZ}px)
          rotateY(${angle}deg)
          rotateX(${tiltX}deg)
          skewY(${curlSkew}deg)
        `;

        // Update dynamic cylindrical curl highlight on front face
        this.updateFrontLighting(progress);

        // Update reverse underside lighting
        this.updateBackLighting(progress);

        // Update sweeping cast shadow on base page
        this.updateCastShadow(progress, 'forward');

        if (progress > 0.88 && !hasPlayedLanding) {
          hasPlayedLanding = true;
          this.playLandingSound();
        }

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          // Animation complete
          this.resetTurningSheet();
          this.isAnimating = false;
          if (this.onTurnComplete) this.onTurnComplete('next');
          resolve(true);
        }
      };

      requestAnimationFrame(step);
    });
  }

  /**
   * Executes a physical turn backward (reveals previous page)
   * @param {string} currentPageHtml - Current full-screen page HTML
   * @param {string} prevPageHtml - Previous full-screen page HTML
   * @param {Object} deptData - Department data
   * @param {number} duration - Animation duration in ms (default 850ms)
   * @returns {Promise} Resolves when turn is finished
   */
  turnBackward(currentPageHtml, prevPageHtml, deptData, duration = 850) {
    if (this.isAnimating) return Promise.resolve(false);
    this.isAnimating = true;

    this.playRustleSound();

    // 1. Base page displays current page (which will be covered)
    this.basePageEl.innerHTML = currentPageHtml;
    this.basePageEl.style.opacity = '1';

    // 2. Turning sheet displays previous page on front, underside on back
    this.frontFaceEl.innerHTML = prevPageHtml;
    this.backFaceEl.innerHTML = this.generateUndersideHtml(prevPageHtml, deptData);

    this.turningSheetEl.style.display = 'block';
    this.turningSheetEl.style.transformOrigin = 'left center';

    const startTime = performance.now();
    let hasPlayedLanding = false;

    return new Promise(resolve => {
      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        let progress = Math.min(1, elapsed / duration);

        const eased = this.physicalEase(progress);

        // Backward: from -180deg back to 0deg
        const angle = -180 + (180 * eased);
        const liftZ = Math.sin(progress * Math.PI) * 110;
        const tiltX = -Math.sin(progress * Math.PI) * 2.8;
        const curlSkew = -Math.sin(progress * Math.PI) * 1.5;

        this.turningSheetEl.style.transform = `
          translate3d(0, 0, ${liftZ}px)
          rotateY(${angle}deg)
          rotateX(${tiltX}deg)
          skewY(${curlSkew}deg)
        `;

        this.updateFrontLighting(1 - progress);
        this.updateBackLighting(1 - progress);
        this.updateCastShadow(progress, 'backward');

        if (progress > 0.88 && !hasPlayedLanding) {
          hasPlayedLanding = true;
          this.playLandingSound();
        }

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          // Page lands flat: base page now shows previous page
          this.basePageEl.innerHTML = prevPageHtml;
          this.resetTurningSheet();
          this.isAnimating = false;
          if (this.onTurnComplete) this.onTurnComplete('prev');
          resolve(true);
        }
      };

      requestAnimationFrame(step);
    });
  }

  /**
   * Natural physical easing curve (smooth cubic acceleration and deceleration)
   */
  physicalEase(t) {
    return t < 0.5 
      ? 4 * t * t * t 
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  /**
   * Updates cylindrical light reflection traveling across front of turning page
   */
  updateFrontLighting(progress) {
    if (progress >= 0.5) {
      // Once past 90deg, front is turned away
      this.curlLightingEl.style.opacity = '0';
      return;
    }

    // Progress 0 -> 0.5: light sweeps from right edge to center
    const intensity = Math.sin(progress * Math.PI * 2) * 0.42;
    const pos = 100 - (progress * 160); // from 100% to 20%
    
    this.curlLightingEl.style.opacity = '1';
    this.curlLightingEl.style.background = `
      linear-gradient(
        to right,
        rgba(0, 0, 0, 0) ${Math.max(0, pos - 28)}%,
        rgba(0, 0, 0, 0.18) ${Math.max(0, pos - 10)}%,
        rgba(255, 255, 255, ${intensity}) ${pos}%,
        rgba(0, 0, 0, 0.22) ${Math.min(100, pos + 12)}%,
        rgba(0, 0, 0, 0) ${Math.min(100, pos + 32)}%
      )
    `;
  }

  /**
   * Updates lighting on the underside of turning page
   */
  updateBackLighting(progress) {
    if (progress < 0.5) {
      this.backLightingEl.style.opacity = '0';
      return;
    }

    // Progress 0.5 -> 1.0: underside becomes visible
    const norm = (progress - 0.5) * 2; // 0 to 1
    const intensity = Math.sin(norm * Math.PI) * 0.35;
    const pos = norm * 100;

    this.backLightingEl.style.opacity = '1';
    this.backLightingEl.style.background = `
      linear-gradient(
        to left,
        rgba(0, 0, 0, 0) ${Math.max(0, pos - 25)}%,
        rgba(255, 255, 255, ${intensity}) ${pos}%,
        rgba(0, 0, 0, 0.28) ${Math.min(100, pos + 18)}%,
        rgba(0, 0, 0, 0) ${Math.min(100, pos + 35)}%
      )
    `;
  }

  /**
   * Updates sweeping cast shadow beneath turning sheet onto the revealed base page
   */
  updateCastShadow(progress, dir = 'forward') {
    if (progress <= 0 || progress >= 1) {
      this.castShadowEl.style.opacity = '0';
      return;
    }

    // Shadow is deepest and widest in mid-turn (progress ~0.5)
    const arc = Math.sin(progress * Math.PI);
    const opacity = arc * 0.65;
    
    let shadowPos;
    if (dir === 'forward') {
      // Moves from 100% (right) to 0% (left)
      shadowPos = 100 - (progress * 100);
    } else {
      // Moves from 0% (left) to 100% (right)
      shadowPos = progress * 100;
    }

    const spread = 20 + (arc * 35); // expands as page rises

    this.castShadowEl.style.opacity = `${opacity}`;
    this.castShadowEl.style.background = `
      radial-gradient(
        ellipse ${spread}vw 100vh at ${shadowPos}% 50%,
        rgba(10, 12, 16, 0.68) 0%,
        rgba(10, 12, 16, 0.32) 45%,
        rgba(0, 0, 0, 0) 80%
      )
    `;
  }

  /**
   * Resets turning sheet back to resting state
   */
  resetTurningSheet() {
    this.turningSheetEl.style.display = 'none';
    this.turningSheetEl.style.transform = 'none';
    this.curlLightingEl.style.opacity = '0';
    this.backLightingEl.style.opacity = '0';
    this.castShadowEl.style.opacity = '0';
    this.frontFaceEl.innerHTML = '';
    this.backFaceEl.innerHTML = '';
  }

  /**
   * Renders static page directly into base page (used on initial open or resize)
   */
  renderBasePage(html) {
    this.basePageEl.innerHTML = html;
    this.basePageEl.style.opacity = '1';
  }
}
