// Theme toggle with persistence
const themeToggleButton = document.querySelector('.theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light-mode';

document.body.classList.add(currentTheme);

if (themeToggleButton) {
  themeToggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('light-mode')) {
      document.body.classList.replace('light-mode', 'dark-mode');
      localStorage.setItem('theme', 'dark-mode');
    } else {
      document.body.classList.replace('dark-mode', 'light-mode');
      localStorage.setItem('theme', 'light-mode');
    }
  });
}


