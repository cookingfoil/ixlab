(function(document) {
  const darkModeToggle = document.getElementById('darkModeToggle');

  // 페이지 로드 시 저장된 테마 적용
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', savedTheme);
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    darkModeToggle.innerText = savedTheme === 'dark' ? '☀️' : '🌙';
  });

  // 버튼 클릭 시 테마 전환
  darkModeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', nextTheme);
    document.body.classList.toggle('dark-mode', nextTheme === 'dark');
    localStorage.setItem('theme', nextTheme);
    darkModeToggle.innerText = nextTheme === 'dark' ? '☀️' : '🌙';
  });
})(document);
