const toggleTheme = document.getElementById('toggleTheme');
const html = document.documentElement;

toggleTheme.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
});
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
let current = 0;

setInterval(() => {
  current = (current + 1) % images.length;
  document.getElementById('slide').src = images[current];
}, 3000);
