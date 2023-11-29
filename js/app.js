new Vue({
  el: '#app',
  components: {
    'c-layout': httpVueLoader('../components/layout.vue'),
    'c-sidebar': httpVueLoader('../components/sidebar.vue'),
    'c-games': httpVueLoader('../components/gamePageContent.vue'),
  },
  mounted(){
    let app = {
      translate: function () {
        
        // placeholder
        $('.translate-placeholder').each(function() {
          let $this = $(this);
          let i18n  = $this.attr('data-i18n')
          $this.attr('placeholder', $.i18n(i18n));
        });
  
        // text
        $('.translate-text').each(function() {
          let $this = $(this);
          let i18n  = $this.attr('data-i18n')
          $this.text($.i18n(i18n));
        });
  
        // html
        $('.translate-html').each(function() {
          let $this = $(this);
          let i18n  = $this.attr('data-i18n')
          $this.html($.i18n(i18n));
        });
        
      },
      initI18n: function() {
        if (window.jQuery) {
          let $ = window.jQuery;
  
          var set_locale_to = function(locale) {
            if (locale) {
              $.i18n().locale = locale;
              History.pushState(null, null, "?locale=" + locale);
            }
          };
          
          $.i18n().load( {
            'en': './js/locale/en.json',
            'cn': './js/locale/cn.json'
          }).done( function() {
            set_locale_to(url('?locale'));
            History.Adapter.bind(window, 'statechange', function(){
              set_locale_to(url('?locale'));
            });
            
            app.translate()
          });
          
        }
      },
      initMenu: function() {
        let $body = $('body');
        $(document).on('click','.btn-menu, .slide-menu-bg, .slide-close',function (){
          $body.toggleClass('active-menu');
        });
    
        $(document).on('click','.nav-link',function() {
          if( $(this).attr('data-toggle') === 'modal'){
            $body.removeClass('active-menu');
          }
        })
    
        // $('#withdrawModal').modal('show');
      },
      initSlider(){
        // index banner
        const $bannerSlider = $('.banner-slide');
        if($bannerSlider.length) {
          $bannerSlider.slick({
            arrows: true,
            infinite: true,
            slidesToScroll: 1,
            autoplay: true,
            dots: true,
            slidesToShow: 1,
            speed: 3000,
          });
        }
        
        //sidebar slider
        const $winnerList = $('.winner-list-slider');
        if($winnerList.length) {
          $winnerList.slick({
            arrows: false,
            infinite: true,
            slidesToScroll: 1,
            autoplay: false,
            dots: false,
            vertical: true,
            slidesToShow: 4,
            verticalSwiping: false,
            speed: 3000,
            autoplaySpeed: 1,
            cssEase: 'linear',
            swipe: false,
            pauseOnFocus: false,
            pauseOnHover: false,
          });
        }
  
        const $gameProviderList = $('.provider-slider');
        if($gameProviderList.length) {
          $gameProviderList.slick({
            arrows: false,
            infinite: true,
            slidesToScroll: 1,
            autoplay: false,
            dots: false,
            slidesToShow: 8,
            speed: 3000,
            autoplaySpeed: 1,
            cssEase: 'linear',
            swipe: false,
            pauseOnFocus: true,
            pauseOnHover: true,
          });
        }
      },
      initCopy: function() {
        $(document).on('click','.btn-copy-clipboard',function () {
          var copyText = document.getElementById($(this).data('target'));
          copyText.select();
          copyText.setSelectionRange(0, 99999);
          navigator.clipboard.writeText(copyText.value);
        })
      },
      initPromo: function() {
          $(document).on('click','.flip-trigger',function () {
          $(this).parents('.promo-card-wrapper').toggleClass('active')
        })
      },
      setDynamicLink: function () {
        var locale = url('?locale');
        if(locale) {
          $('.dynamic-link').each(function() {
            let _el = $(this);
            let _href = _el.attr('href');
            let _dynamic_link = _href.includes('.html') ? _href+'?locale='+locale : '#';
            _el.attr('href', _dynamic_link)
          })
        }
      },
      init() {
        app.initI18n();
        app.initMenu();
        app.initSlider();
        app.initCopy();
        app.initPromo();
        app.setDynamicLink();
        
        // disabled user profile dropdown to close
        $(document).on('click', '#userProfileBtn-dropdown', function (e) {
          e.stopPropagation();
        });
        
        $(document).on('click', '#userProfileBtn-dropdown .close', function () {
          $('#userProfileBtn').dropdown('toggle');
        });
        
        // deposit bonus
        $(document).on('click', '.bonus-list', function() {
          $('.bonus-list').removeClass('active');
          $(this).addClass('active');
        })
      }
    }
  
    jQuery(document).ready(function (){
      setTimeout(() => {
        app.init();
      }, 100);
    });
  }
});