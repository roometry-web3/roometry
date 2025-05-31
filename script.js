
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const loader = document.querySelector('.loader');
    if (loader) loader.classList.add('hide-loader');
  }, 3000);

  const mainContent = document.querySelector('.main-content');
  if (mainContent) mainContent.style.opacity = '1';
});

    // مدیریت کلیک برای مودال‌ها
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
  
// ...existing code...

particlesJS("stars-bg", {
  "particles": {
    "number": { "value": 10 }, // هر تعدادی که می‌خواهی اینجا بگذار
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
        observer.unobserve(entry.target); // فقط یکبار اجرا شود
      }
    });
  }, { threshold: 0.15 });

  // برای کارت‌های NFT جدید و گالری
  document.querySelectorAll('.nft-item, .gallery a').forEach(el => {
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", function () {
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
      const wordProgress = i / (words.length - 1); // موقعیت هر کلمه
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
