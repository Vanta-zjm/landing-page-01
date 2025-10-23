 const btn  = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');

function openMenu() {
btn.classList.add('open');
btn.setAttribute('aria-expanded','true');
menu.classList.add('open');
menu.style.maxHeight = menu.scrollHeight + 'px'; // 关键
}

function closeMenu() {
btn.classList.remove('open');
btn.setAttribute('aria-expanded','false');
menu.style.maxHeight = '0';
// 动画结束后再移除 open（保持 transition 连贯）
setTimeout(()=>menu.classList.remove('open'), 300);
}

btn.addEventListener('click', () => {
const isOpen = btn.classList.contains('open');
isOpen ? closeMenu() : openMenu();
});

// 视口变大时重置（避免从移动切到桌面还保持展开）
window.addEventListener('resize', () => {
if (window.innerWidth > 768) { closeMenu(); }
});

const root = document.documentElement;
const KEY = 'theme';
const saved = localStorage.getItem(KEY);
if (saved) root.setAttribute('data-theme', saved);
function toggleTheme(){
    const cur = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', cur);
    localStorage.setItem(KEY, cur);
}
document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

document.getElementById('themeToggleMobile')?.addEventListener('click', toggleTheme);