/**
 * @file
 * Collapse menu items when search active.
 */

(function ($, Drupal, window) {

  Drupal.behaviors.searchActive = {
    attach: function (context) {

      $(context).find(".navbar-header").once("search-active").each(function () {

        function myFunction(x) {
          if (x.matches) {

            $('.navbar-header .block-search').click(function (event) {

              $('.navbar-header .block-search').addClass('searching');
              $('.ultimenu--main').addClass('condense');

            });

          }
        }

      $(document.body).once('search-unfocus').bind('click keyup', function (e) {
        // If Search is inactive, do nothing.
        var activeSearch = document.getElementsByClassName('searching');
        if (!activeSearch) {
          return;
        }

        // Determine if the Search is going out of focus.
        var isBlur = true;

        // If the event is coming from within Search.
        if ($(e.target).closest('.navbar-header .block-search').length !== 0) {
          isBlur = false;
        }

        // If the "escape" key was pressed.
        if (e.type === 'keyup' && e.keyCode == 27) {
          isBlur = true;
        }

        // Close Search if it is not in focus.
        if (isBlur) {
          $('.navbar-header .block-search').removeClass('searching');
          $('.ultimenu--main').removeClass('condense');

          // setTimeout(function() {
          //   $('.ultimenu--main').removeClass('condense');
          // }, 250);
        }
      });

      var x = window.matchMedia("(min-width: 944px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes
      });
    }
  }
})(jQuery, Drupal, this);
