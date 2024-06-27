// Вступительная анимация / Introductory animation
window.addEventListener('load', function () {
  const intro = document.querySelector('.intro');
  const main = document.querySelector('main');

  setTimeout(() => {
    intro.style.opacity = 0;
    main.style.display = 'block';
  }, 8000);
  setTimeout(() => {
    intro.style.display = 'none';
    main.style.opacity = 1;
  }, 9500);
});

// Переключение темы / Toggle theme
document.addEventListener('DOMContentLoaded', function () {
  const btnThemeToggle = document.querySelector('.theme-toggle');
  const currentTheme =
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark-theme'
      : 'light-theme');

  document.body.className = currentTheme;
  localStorage.setItem('theme', currentTheme);

  btnThemeToggle.addEventListener('click', function () {
    const currentTheme = document.body.className;
    const newTheme =
      currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';

    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  });
});

// Когда загрузится весь DOM контент
// document.addEventListener('DOMContentLoaded', function () {});
