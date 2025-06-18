const toggleTheme = document.getElementById('toggleTheme');
const html = document.documentElement;

toggleTheme.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
});
