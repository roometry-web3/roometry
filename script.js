window.addEventListener('DOMContentLoaded', () => {
  // نمایش مودال کپچا هنگام لود صفحه
  const captchaModal = document.getElementById('captchaModal');
  if (captchaModal) {
    captchaModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // غیرفعال کردن اسکرول
  }

  // مخفی کردن لودر پس از 3 ثانیه
  setTimeout(() => {
    const loader = document.querySelector('.loader');
    if (loader) loader.classList.add('hide-loader');
  }, 3000);
});

// تابع callback برای موفقیت کپچا
function onCaptchaSuccess(response) {
  if (response) {
    const captchaModal = document.getElementById('captchaModal');
    const mainContent = document.querySelector('.main-content');
    if (captchaModal && mainContent) {
      captchaModal.style.display = 'none';
      mainContent.style.opacity = '1';
      document.body.style.overflow = ''; // فعال کردن دوباره اسکرول
    }
  }
}

// مدیریت کلیک برای مودال‌های دیگر
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal') || e.target.classList.contains('close')) {
    document.getElementById('aboutModal').style.display = 'none';
    document.getElementById('termsModal').style.display = 'none';
    document.getElementById('privacyModal').style.display = 'none';
  }
});

function toggleMenu() {
  const menu = document.querySelector('.mobile-menu');
  const burger = document.querySelector('.hamburger');
  menu.classList.toggle('active');
  burger.classList.toggle('active');
}

particlesJS("stars-bg", {
  "particles": {
    "number": { "value": 10 },
    "size": { "value": 2 },
    "color": { "value": "#ffffff" },
    "move": { "speed": 0.3 },
    "opacity": { "value": 0.8 },
    "line_linked": { "enable": false }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": false } }
  }
});

function openTeamModal() {
  document.getElementById('teamModal').classList.add('active');
  document.getElementById('modal-blur').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeTeamModal() {
  document.getElementById('teamModal').classList.remove('active');
  document.getElementById('modal-blur').classList.remove('active');
  document.body.style.overflow = '';
}

function openFaqModal() {
  document.getElementById('faqModal').classList.add('active');
  document.getElementById('modal-blur').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeFaqModal() {
  document.getElementById('faqModal').classList.remove('active');
  document.getElementById('modal-blur').classList.remove('active');
  document.body.style.overflow = '';
}

const modalBlur = document.getElementById('modal-blur');
if (modalBlur) {
  modalBlur.onclick = function() {
    closeTeamModal();
    closeFaqModal();
  };
}

// FAQ Accordion
function toggleFaqAnswer(btn) {
  const item = btn.parentElement;
  item.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.nft-item, .gallery a').forEach(el => {
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const words = document.querySelectorAll('.text-generate-effect span');
  const textContainer = document.querySelector('.text-generate-effect');

  if (!textContainer || words.length === 0) {
    console.error("Text container or spans not found!");
    return;
  }

  function revealWordsOnScroll() {
    const containerRect = textContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollProgress = Math.min(
      Math.max((windowHeight - containerRect.top) / (windowHeight * 0.5), 0),
      1
    );

    words.forEach((word, i) => {
      const wordProgress = i / (words.length - 1);
      if (scrollProgress >= wordProgress) {
        word.classList.add('visible');
      } else {
        word.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', revealWordsOnScroll);
  revealWordsOnScroll();
});
