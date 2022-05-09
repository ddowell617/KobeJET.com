/**
 * @file
 * Open ultimenu items with a click rather than the default hover.
 */

(function ($, Drupal, window) {
  Drupal.ultimenuOverrides = Drupal.ultimenuOverrides || {};

  Drupal.behaviors.ultimenuOverrides = {
    attach: function (context) {

      $(context).find("#block-ultimenumenu").once("click-override").each(function () {

        function myFunction(x) {
          if (x.matches) {

          $('.ultimenu--main .ultimenu__link').click(function (event) {

            // This stops the previous statement so that this click works.
            // event.stopPropagation();
            // event.preventDefault();

            if ($(this).closest('.ultimenu__item').hasClass('is-active')) {
              $('.ultimenu__item').removeClass('is-active');

            } else {

                // Clears the megamenu if click another link in the menu.
                $('.ultimenu__item').removeClass('is-active');

                // Add the CSS to make the megamenu appear.
                $(this).closest('.ultimenu__item').addClass('is-active');
              }

            });

          }
        }

      $(document.body).once('ultimenu-unfocus').bind('click keyup', function (e) {
        // If no ultimenu is currently open, do nothing.
        var openUltimenu = document.getElementsByClassName('is-active');
        if (!openUltimenu) {
          return;
        }

        // Determine if the Ultimenu is going out of focus.
        var isBlur = true;

        // If the event is coming from within Ultimenu.
        if ($(e.target).closest('.block-ultimenu').length !== 0) {
          isBlur = false;
        }

        // If the "escape" key was pressed.
        if (e.type === 'keyup' && e.keyCode == 27) {
          isBlur = true;
        }

        // Close Ultimenu if it is not in focus.
        if (isBlur) {
          $('.ultimenu__item').removeClass('is-active');
        }
      });

      var x = window.matchMedia("(min-width: 944px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes
      });
    }
  }
})(jQuery, Drupal, this);
