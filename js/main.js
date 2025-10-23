const btn = document.querySelector('.hamburger');
const links = document.querySelector('.nav-links');
btn?.addEventListener('click', () => {
  const showing = getComputedStyle(links).display !== 'none';
  links.style.display = showing ? 'none' : 'flex';
});

const collapser = document.querySelector('.collapsible');
const content = document.querySelector('.content');
collapser?.addEventListener('click', () => {
  content.classList.toggle('open');
  if (content.classList.contains('open')) {
    content.style.maxHeight = content.scrollHeight + 'px';
  } else {
    content.style.maxHeight = 0;
  }
});
