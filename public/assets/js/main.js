document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
          }
        }
      }
    });
  });

  // Scroll Animation with Intersection Observer
  const scrollAnimateElements = document.querySelectorAll('.scroll-animate');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  scrollAnimateElements.forEach(function(el) {
    observer.observe(el);
  });

  // Update copyright year
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  // Form submission handling
  const form = document.querySelector('form');
  const msg = document.getElementById('formMsg');
  if (form && msg) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      msg.classList.remove('hidden');
      setTimeout(function () { msg.classList.add('hidden'); }, 4000);
      form.reset();
    });
  }

  // Initialize Swiper sliders if they exist on the page
  if (document.querySelector('.main-slider')) {
    // Main slider
    const mainSlider = new Swiper('.main-slider', {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    // Thumbnail slider
    const thumbnailSlider = new Swiper('.thumbnail-slider', {
      slidesPerView: 4,
      spaceBetween: 10,
      freeMode: true,
      watchSlidesProgress: true,
    });

    // Connect main slider with thumbnail slider
    mainSlider.controller.control = thumbnailSlider;
    thumbnailSlider.controller.control = mainSlider;

    // Additional slider if it exists
    if (document.querySelector('.additional-slider')) {
      new Swiper('.additional-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });
    }
  }
});
