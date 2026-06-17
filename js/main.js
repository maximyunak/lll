document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  initSlider();
  initAccordion();
  initAuthForms();
  initStages();
});

function initBurgerMenu() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const overlay = document.querySelector('.mobile-overlay');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!burger || !nav) return;

  function toggleMenu(forceClose) {
    const isOpen = forceClose === true ? true : !nav.classList.contains('open');
    if (forceClose === true) {
      nav.classList.remove('open');
      burger.classList.remove('active');
      overlay?.classList.remove('active');
      document.body.style.overflow = '';
      return;
    }

    nav.classList.toggle('open');
    burger.classList.toggle('active');
    overlay?.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  }

  burger.addEventListener('click', () => toggleMenu());

  overlay?.addEventListener('click', () => toggleMenu(true));

  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(true));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) toggleMenu(true);
  });
}

function initSlider() {
  const slider = document.querySelector('.slider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.slide');
  const dots = slider.querySelectorAll('.slider-dot');
  const prevBtn = slider.querySelector('.slider-prev');
  const nextBtn = slider.querySelector('.slider-next');

  let current = 0;
  let autoplayTimer;
  const INTERVAL = 6000;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');

    current = (index + slides.length) % slides.length;

    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(next, INTERVAL);
  }

  function stopAutoplay() {
    clearInterval(autoplayTimer);
  }

  prevBtn?.addEventListener('click', () => { prev(); startAutoplay(); });
  nextBtn?.addEventListener('click', () => { next(); startAutoplay(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); startAutoplay(); });
  });

  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  let touchStartX = 0;
  slider.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoplay();
  }, { passive: true });

  slider.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    startAutoplay();
  }, { passive: true });

  startAutoplay();
}

function initAccordion() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    question?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      items.forEach(i => i.classList.remove('active'));

      if (!isActive) item.classList.add('active');
    });
  });
}

function initAuthForms() {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  loginForm?.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateLogin(loginForm)) return;
    showAuthSuccess('Вход выполнен. Добро пожаловать, Избранный Нежить!');
  });

  registerForm?.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateRegister(registerForm)) return;
    showAuthSuccess('Регистрация успешна. Ваш путь начинается...');
  });
}

function validateLogin(form) {
  let valid = true;
  const email = form.querySelector('[name="email"]');
  const password = form.querySelector('[name="password"]');

  clearErrors(form);

  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    setError(email, 'Введите корректный email');
    valid = false;
  }

  if (!password.value || password.value.length < 6) {
    setError(password, 'Пароль должен содержать минимум 6 символов');
    valid = false;
  }

  return valid;
}

function validateRegister(form) {
  let valid = true;
  const name = form.querySelector('[name="username"]');
  const email = form.querySelector('[name="email"]');
  const password = form.querySelector('[name="password"]');
  const confirm = form.querySelector('[name="confirm"]');

  clearErrors(form);

  if (!name.value.trim() || name.value.trim().length < 3) {
    setError(name, 'Имя должно содержать минимум 3 символа');
    valid = false;
  }

  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    setError(email, 'Введите корректный email');
    valid = false;
  }

  if (!password.value || password.value.length < 6) {
    setError(password, 'Пароль должен содержать минимум 6 символов');
    valid = false;
  }

  if (password.value !== confirm.value) {
    setError(confirm, 'Пароли не совпадают');
    valid = false;
  }

  return valid;
}

function setError(input, message) {
  const group = input.closest('.form-group');
  group?.classList.add('invalid');
  const errorEl = group?.querySelector('.form-error');
  if (errorEl) errorEl.textContent = message;
}

function clearErrors(form) {
  form.querySelectorAll('.form-group').forEach(g => {
    g.classList.remove('invalid');
    const err = g.querySelector('.form-error');
    if (err) err.textContent = '';
  });
}

function showAuthSuccess(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '32px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#1a1510',
    color: '#e2d4b0',
    border: '1px solid #c9a84c',
    padding: '16px 32px',
    fontFamily: 'Cinzel, serif',
    fontSize: '0.85rem',
    letterSpacing: '0.06em',
    zIndex: '9999',
    animation: 'fadeInUp 0.4s ease',
  });
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s';
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}
