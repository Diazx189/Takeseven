function toggleMenu() {
    const menu = document.getElementById('menuLinks');
    const hamburger = document.getElementById('hamburger');

    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
      hamburger.innerHTML = '&#9776;'; // ícone ☰
    } else {
      menu.style.display = 'flex';
      hamburger.innerHTML = '&#10006;'; // ícone ✖
    }
  }
