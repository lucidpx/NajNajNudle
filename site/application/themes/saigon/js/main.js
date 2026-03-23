$(function(){
	  // Mobile menu: CSS handles open/close; close on link tap + when viewport passes desktop breakpoint
      var $mainMenuState = $('#main-menu-state');
      if ($mainMenuState.length) {
          var mqNav = window.matchMedia('(max-width: 650px)');
          function syncMenuWithViewport() {
              if ($mainMenuState[0].checked && !mqNav.matches) {
                  $mainMenuState[0].checked = false;
              }
          }
          $('#main-menu a').on('click', function () {
              if (mqNav.matches && $mainMenuState[0].checked) {
                  $mainMenuState[0].checked = false;
              }
          });
          $(window).on('resize', syncMenuWithViewport);
          $(window).on('beforeunload unload', function() {
              if ($mainMenuState[0].checked) {
                  $mainMenuState[0].checked = false;
              }
          });
      } 

      var $overlay = $('#overlay');
      if ($overlay.length) {
        $('.button-reservation').on('click', function () {
          $overlay.fadeIn(250);
        });
        $('.close-it').on('click', function () {
          $overlay.fadeOut(250);
        });
        $overlay.on('click', function (e) {
          if (e.target !== this) return;
          $(this).fadeOut();
        });
        $(document).on('keydown', function (event) {
          if (event.key == 'Escape' && $overlay.is(':visible')) {
            $overlay.fadeOut(250);
          }
        });
      }

});

