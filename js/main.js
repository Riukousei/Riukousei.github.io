/**
 * Riu Kousei - Official Artist Site Script
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });

    const closeMenu = () => {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    };

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', closeMenu);
    }

    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // 2. Streaming Player Tab Switcher (Spotify / Bandcamp / YouTube / Apple Music)
  const playerTabs = document.querySelectorAll('.player-tab-btn');
  const playerFrames = document.querySelectorAll('.player-frame');

  playerTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetPlatform = tab.getAttribute('data-platform');

      // Update button states
      playerTabs.forEach(t => {
        t.classList.remove('bg-amber-500/25', 'text-amber-200', 'border-amber-400/60', 'shadow-amber-500/20');
        t.classList.add('text-slate-400', 'border-transparent');
      });
      tab.classList.remove('text-slate-400', 'border-transparent');
      tab.classList.add('bg-amber-500/25', 'text-amber-200', 'border-amber-400/60', 'shadow-amber-500/20');

      // Update active iframe
      playerFrames.forEach(frame => {
        if (frame.getAttribute('data-platform') === targetPlatform) {
          frame.classList.remove('hidden');
        } else {
          frame.classList.add('hidden');
        }
      });
    });
  });

  // 3. Share / Copy Link Toast
  const shareBtn = document.getElementById('share-btn');
  const toast = document.getElementById('toast');

  if (shareBtn && toast) {
    shareBtn.addEventListener('click', async () => {
      const url = window.location.href;
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(url);
        } else {
          const tempInput = document.createElement('input');
          tempInput.value = url;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        // Show toast
        toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        toast.classList.add('opacity-100', 'translate-y-0');

        setTimeout(() => {
          toast.classList.remove('opacity-100', 'translate-y-0');
          toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
        }, 3000);
      } catch (err) {
        console.error('Error al copiar el enlace:', err);
      }
    });
  }

  // 4. Update Current Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 5. Smooth Entrance Reveal on Scroll
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
      observer.observe(el);
    });
  }
});

