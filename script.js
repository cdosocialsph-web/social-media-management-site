// Toggle light and dark mode
const themeToggleButton = document.querySelector('.theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light-mode';

if (currentTheme === 'dark-mode') {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.add('light-mode');
}

themeToggleButton.addEventListener('click', () => {
  if (document.body.classList.contains('light-mode')) {
    document.body.classList.replace('light-mode', 'dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  } else {
    document.body.classList.replace('dark-mode', 'light-mode');
    localStorage.setItem('theme', 'light-mode');
  }
});
