
("use strict");

!(function ($) {
  $.Page = {
    wrapper: $(".web-page"),
  };

  $.Module = {};
})(window.jQuery);
(function ($) {
  const webPage = {
    init() {
      $.Module.loading.init();
      $.Module.wow.init();
      $.Module.navbar.init();
    },
  };

  $.Module.wow = {
    init() {
      new WOW().init();
    }
  };

  $.Module.navbar = {
    init() {
      this.bindEvents();
    },
    bindEvents() {
      const bugar = document.getElementById('bugar');
      if (!bugar) return;

      bugar.addEventListener('click', () => {
        let currentImageSrc = bugar.getAttribute('src');
        
        if (currentImageSrc === './img/Top-img/PNG/bugar.png') {
          bugar.setAttribute('src', './img/Top-img/PNG/icon_close.png');
        } else {
          bugar.setAttribute('src', './img/Top-img/PNG/bugar.png');
        }
      });
    }
  };

$.Module.loading = {
    originalOverflowStyle: document.body.style.overflow,
    init() {
        this.disableScroll();
        this.bindLoadingEvents();
    },
    disableScroll() {
        document.body.style.overflow = 'hidden';
    },
    enableScroll() {
        document.body.style.overflow = this.originalOverflowStyle;
    },
    bindLoadingEvents() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.hideLoadingScreen();
            }, 2300);
        });
    },
    hideLoadingScreen() {
        const status = document.getElementById('status');
        const preloader = document.getElementById('preloader');

        if (status) {
            status.style.transition = 'opacity 0.5s';
            status.style.opacity = '0';
        }

        if (preloader) {
            preloader.style.transition = 'opacity 0.5s';
            preloader.style.opacity = '0';

            setTimeout(() => {
                preloader.parentNode.removeChild(preloader);
                this.enableScroll();
            }, 500);
        }
    }
};

  $.Page.webPage = webPage;
})(window.jQuery);
(function ($) {
  $.Page.webPage.init();
})(window.jQuery);



