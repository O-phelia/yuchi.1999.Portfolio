const menuToggler = document.getElementById('menu-toggler');
const header = document.getElementById('header');
const navbarLinks = document.querySelectorAll('#navbar a');

menuToggler.addEventListener('change', function() {
    if (this.checked) {
        header.style.height = '350px';
    } else {
        header.style.height = ''; 
    }
});


navbarLinks.forEach(link => {
  link.addEventListener('click', function() {
      header.style.height = ''; // 点击导航链接时恢复默认高度
  });
});
