
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
      $.Module.headroom.init();
    },
  };

  $.Module.wow = {
    init() {
      new WOW({
        offset: 50,
        mobile: true,
        live: true
      }).init();
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
    originalOverflowStyle: '',
    
    init() {
        this.originalOverflowStyle = document.body.style.overflow || '';
        this.disableScroll();
        window.scrollTo(0, 0); // 保留原生方法
        this.bindLoadingEvents();
    },
    
    disableScroll() {
        $('body').css('overflow', 'hidden');
        $('html').css('overflow', 'hidden');
    },
    
    enableScroll() {
        $('body').css('overflow', this.originalOverflowStyle);
        $('html').css('overflow', '');
    },
    
    bindLoadingEvents() {
        // 保留原生事件監聽
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.hideLoadingScreen();
            }, 2300);
        });
    },
    
    hideLoadingScreen() {
        // 混合使用 jQuery 和原生
        const $status = $('#status');
        const $preloader = $('#preloader');
        
        if ($status.length) {
            $status[0].style.transition = 'opacity 0.5s ease-out';
            $status[0].style.opacity = '0';
        }
        
        if ($preloader.length) {
            $preloader[0].style.transition = 'opacity 0.5s ease-out';
            $preloader[0].style.opacity = '0';
            
            setTimeout(() => {
                $preloader.remove();
                this.enableScroll();
            }, 500);
        } else {
            this.enableScroll();
        }
    }
};

$.Module.headroom = {
    init() {
        const header = document.querySelector("header");
        
        if (header) {
            const headroom = new Headroom(header, {
                offset: 80,
                tolerance: 5, 
                classes: {
                    initial: "headroom",
                    pinned: "headroom--pinned",
                    unpinned: "headroom--unpinned"
                }
            });
            
            headroom.init();
        }
    }
};


  $.Page.webPage = webPage;
})(window.jQuery);
(function ($) {
  $.Page.webPage.init();
})(window.jQuery);



