// Blueberry Terrace（自主制作サンプル）: スマートフォン用メニューの開閉
const toggle = document.querySelector('.nav-toggle');
const cafeNav = document.getElementById('cafe-nav');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  cafeNav.classList.toggle('is-open', !open);
});
cafeNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  cafeNav.classList.remove('is-open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
