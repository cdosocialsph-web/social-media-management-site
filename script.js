// Theme toggle: smooth fade between light and dark
const themeToggleButton = document.querySelector('.theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light-mode';

document.body.classList.add(currentTheme);

themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');

  const newTheme = document.body.classList.contains('dark-mode')
    ? 'dark-mode'
    : 'light-mode';
  localStorage.setItem('theme', newTheme);
});

