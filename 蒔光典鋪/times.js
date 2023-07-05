    const dataToggle = document.querySelectorAll('[data-toggle]');
    const menuToggle = document.getElementById('navbarSupportedContent');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {
    toggle: false
    });

    dataToggle.forEach((item) => {
    item.addEventListener('click', () => {
        bsCollapse.toggle()
    })
    });