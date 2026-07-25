/**
 * NorthPeak Digital — Main Interactive JavaScript Engine
 * Author: Antigravity AI Engineering Team
 * Tech: Native Vanilla ES6+, IntersectionObserver, Web APIs
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     0. Page Load Trigger (Hero Cinematic Entrance Animation)
     ========================================================================== */
  // Trigger CSS hero animations smoothly after load
  requestAnimationFrame(() => {
    document.body.classList.add('page-loaded');
  });

  /* ==========================================================================
     0.1 Scroll Reveal Observer System
     Uses native IntersectionObserver for 60fps GPU-accelerated scroll reveals
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Unobserve once revealed for max performance
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for non-supported browsers
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  /* ==========================================================================
     1. Sticky Navbar & Active Link Highlighting
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.navbar__link');
  const sections = document.querySelectorAll('section[id]');

  let isScrolling = false;
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('is-scrolled');
    } else {
      navbar?.classList.remove('is-scrolled');
    }

    // Active nav link highlight based on scroll position
    let currentSection = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('is-active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('is-active');
      }
    });
    isScrolling = false;
  };

  const onScroll = () => {
    if (!isScrolling) {
      window.requestAnimationFrame(handleScroll);
      isScrolling = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  handleScroll(); // Initial check

  /* ==========================================================================
     2. Mobile Menu Drawer Navigation
     ========================================================================== */
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerClose = document.getElementById('drawer-close');
  const mobileLinks = document.querySelectorAll('.mobile-drawer__link, .mobile-drawer__cta');

  const openMobileMenu = () => {
    menuToggle?.classList.add('is-active');
    menuToggle?.setAttribute('aria-expanded', 'true');
    mobileDrawer?.classList.add('is-open');
    mobileDrawer?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    menuToggle?.classList.remove('is-active');
    menuToggle?.setAttribute('aria-expanded', 'false');
    mobileDrawer?.classList.remove('is-open');
    mobileDrawer?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  menuToggle?.addEventListener('click', () => {
    const isOpen = mobileDrawer?.classList.contains('is-open');
    isOpen ? closeMobileMenu() : openMobileMenu();
  });

  drawerOverlay?.addEventListener('click', closeMobileMenu);
  drawerClose?.addEventListener('click', closeMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close drawer on ESC key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer?.classList.contains('is-open')) {
      closeMobileMenu();
    }
  });

  /* ==========================================================================
     3. Hero Interactive SaaS Mockup Window Tabs & Typewriter
     ========================================================================== */
  const windowTabs = document.querySelectorAll('.hero-window__tab');
  const tabPanels = document.querySelectorAll('.tab-panel');
  const typewriterElement = document.getElementById('typewriter-text');
  let typewriterInterval = null;

  const typewriterPhrases = [
    "Optimizing vector design tokens and dynamic theme variables...",
    "Executing sub-50ms latency AI prompt pipelines...",
    "Generating responsive React components with zero runtime CSS..."
  ];
  let phraseIndex = 0;
  let charIndex = 0;

  const typeEffect = () => {
    if (!typewriterElement) return;
    const currentPhrase = typewriterPhrases[phraseIndex];
    typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentPhrase.length) {
      setTimeout(() => {
        charIndex = 0;
        phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
      }, 2000);
    }
  };

  windowTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');

      // Update Tab Buttons State
      windowTabs.forEach(t => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');

      // Update Tab Panels Visibility
      tabPanels.forEach(panel => {
        panel.classList.remove('is-active');
        if (panel.getAttribute('id') === targetTab) {
          panel.classList.add('is-active');
        }
      });

      // Handle AI typewriter start if AI tab selected
      if (targetTab === 'tab-ai' && !typewriterInterval) {
        typewriterInterval = setInterval(typeEffect, 60);
      }
    });
  });

  /* ==========================================================================
     4. Cursor Spotlight Tracking on Cards
     ========================================================================== */
  const spotlightCards = document.querySelectorAll('[data-spotlight]');

  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  /* ==========================================================================
     5. IntersectionObserver Animated Number Counters
     ========================================================================== */
  const counterElements = document.querySelectorAll('.stat-card__number');

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target') || '0', 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const duration = 1500; // ms
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counterTimer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad
      const currentCount = Math.round(target * (1 - Math.pow(1 - progress, 2)));

      el.textContent = `${prefix}${currentCount}${suffix}`;

      if (frame === totalFrames) {
        clearInterval(counterTimer);
        el.textContent = `${prefix}${target}${suffix}`;
      }
    }, frameDuration);
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counterElements.forEach(el => counterObserver.observe(el));

  /* ==========================================================================
     6. Pricing Monthly / Annual Toggle Switcher
     ========================================================================== */
  const billingSwitch = document.getElementById('billing-switch');
  const labelMonthly = document.getElementById('label-monthly');
  const labelAnnual = document.getElementById('label-annual');
  const priceAmounts = document.querySelectorAll('.price-card__amount');

  billingSwitch?.addEventListener('click', () => {
    const isAnnual = billingSwitch.getAttribute('aria-checked') === 'true';
    const nextState = !isAnnual;

    billingSwitch.setAttribute('aria-checked', String(nextState));

    if (nextState) {
      labelMonthly?.classList.remove('is-active');
      labelAnnual?.classList.add('is-active');
    } else {
      labelAnnual?.classList.remove('is-active');
      labelMonthly?.classList.add('is-active');
    }

    priceAmounts.forEach(amountEl => {
      const targetVal = nextState 
        ? amountEl.getAttribute('data-annual') 
        : amountEl.getAttribute('data-monthly');

      if (targetVal) {
        // Quick subtle scale transition during value change
        amountEl.style.transform = 'scale(0.9)';
        setTimeout(() => {
          amountEl.textContent = targetVal;
          amountEl.style.transform = 'scale(1)';
        }, 120);
      }
    });
  });

  /* ==========================================================================
     7. Budget Selector Chips
     ========================================================================== */
  const budgetChips = document.querySelectorAll('.chip');
  const selectedBudgetInput = document.getElementById('selected-budget');

  budgetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      budgetChips.forEach(c => {
        c.classList.remove('is-active');
        c.setAttribute('aria-checked', 'false');
      });
      chip.classList.add('is-active');
      chip.setAttribute('aria-checked', 'true');
      const val = chip.getAttribute('data-budget') || '';
      if (selectedBudgetInput) {
        selectedBudgetInput.value = val;
      }
    });
  });

  /* ==========================================================================
     8. Form Validation & Submission Logic
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const setGroupError = (inputId, hasError) => {
    const inputEl = document.getElementById(inputId);
    const groupEl = inputEl?.closest('.form__group');
    if (groupEl) {
      if (hasError) {
        groupEl.classList.add('has-error');
        inputEl?.setAttribute('aria-invalid', 'true');
      } else {
        groupEl.classList.remove('has-error');
        inputEl?.removeAttribute('aria-invalid');
      }
    }
  };

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameVal = document.getElementById('user-name')?.value.trim() || '';
    const emailVal = document.getElementById('user-email')?.value.trim() || '';
    const messageVal = document.getElementById('user-message')?.value.trim() || '';

    let isValid = true;

    // Name validation
    if (nameVal.length < 2) {
      setGroupError('user-name', true);
      isValid = false;
    } else {
      setGroupError('user-name', false);
    }

    // Email validation
    if (!validateEmail(emailVal)) {
      setGroupError('user-email', true);
      isValid = false;
    } else {
      setGroupError('user-email', false);
    }

    // Message validation
    if (messageVal.length < 10) {
      setGroupError('user-message', true);
      isValid = false;
    } else {
      setGroupError('user-message', false);
    }

    if (!isValid) return;

    // Form Submission UI Simulation
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="btn__spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="10">
            <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.8s" repeatCount="indefinite"/>
          </circle>
        </svg>
        <span>Sending Inquiry...</span>
      `;
    }

    setTimeout(() => {
      if (formStatus) {
        formStatus.className = 'form-status is-success';
        formStatus.innerHTML = `
          <strong>🚀 Message Sent Successfully!</strong><br>
          Thank you, ${nameVal}. Our team will review your project requirements and respond within 24 hours.
        `;
      }

      contactForm.reset();
      budgetChips.forEach((c, idx) => c.classList.toggle('is-active', idx === 0));

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>Send Message</span>
          <svg class="btn__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        `;
      }

      // Hide status after 8 seconds
      setTimeout(() => {
        if (formStatus) formStatus.style.display = 'none';
      }, 8000);
    }, 1200);
  });

  // Realtime clear errors on input
  ['user-name', 'user-email', 'user-message'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', () => {
      setGroupError(id, false);
    });
  });

  /* ==========================================================================
     9. Zoom Prevention Controls
     ========================================================================== */
  // Intercept Ctrl + Wheel zoom
  document.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  }, { passive: false });

  // Intercept Ctrl + '+' / '-' / '0' key zoom shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')) {
      e.preventDefault();
    }
  });
});
