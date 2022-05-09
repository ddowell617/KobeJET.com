(function ($) {
  Drupal.behaviors.timbersjs = {
    attach: function (context, settings) {

      var $window = $(window),
      $document = $(document),
      $body = $('body');

      $($window, context).once("timbersjs").each(function () {
        if ($window.scrollTop() > 400) {
          $body.addClass('timbers-base');
        }
        if ($document.height() <= ($window.height() + $window.scrollTop() + 200)) {
          $body.addClass('timbers-base');
        }
      });

      var isScrolled = false; // is the browser scrolling?
      var frequency = 100; // Milliseconds

      window.onscroll = function(){
          isScrolled = true;
      };

      var scrollTimer = setInterval(function() {
        if (isScrolled) {
          isScrolled = false;
          if ($(this).scrollTop() > 20) {
            $body.addClass('timbers-summit');
            if ($(this).scrollTop() > 200) {
              $body.addClass('timbers-top');
              if ($(this).scrollTop() > 400) {
                $body.addClass('timbers-mid');
              } else {
                $body.removeClass('timbers-mid');
              }
            } else {
              $body.removeClass('timbers-top timbers-mid');
            }
          } else {
            $body.removeClass('timbers-summit timbers-top timbers-mid');
          }
          if ($document.height() <= ($window.height() + $window.scrollTop() + 300)) {
            $body.addClass('timbers-bottom');
            if ($document.height() <= ($window.height() + $window.scrollTop() + 200)) {
              $body.addClass('timbers-base');
            } else {
              $body.removeClass('timbers-base');
            }
          } else {
            $body.removeClass('timbers-bottom timbers-base');
          }
        }
      },frequency);

      $('.back-to-top', context).once('timbersjs').each(function () {
        $(this).click(function () {
          $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function () {
            $('html, body').stop();
          });
          $('html,body').animate({scrollTop: 0}, 600, 'linear', function () {
            $("html, body").unbind("scroll mousedown DOMMouseScroll mousewheel keyup");
          });
          return false;
        });
      });

      // Get the container element
      var btnContainer = document.getElementsByClassName("block-timbers");

      // Get all buttons with class="site-item" inside the container
      var btns = document.getElementsByClassName("site-item");

      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

        // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");

            // If there's no active class
            if (current.length > 0) {
              current[0].className = current[0].className.replace(" active", "");
            }

            // Add the active class to the current/clicked button
            this.className += " active";
          });
        }
      }

      $(document.body).once('timbers-unfocus').bind('click keyup', function (e) {
        // If no button is currently open, do nothing.
        var openTimbers = document.getElementById("menu-open").checked;
        if (!openTimbers) {
          return;
        }

        // Determine if the Timbers Buttons is going out of focus.
        var isBlur = true;

        // If the event is coming from within Timbers Buttons.
        if ($(e.target).closest('.block-timbers').length !== 0) {
          isBlur = false;
        }

        // If the "escape" key was pressed.
        if (e.type === 'keyup' && e.keyCode == 27) {
          isBlur = true;
        }

        // Close Timbers Buttons if it is not in focus.
        if (isBlur) {
          document.getElementById("menu-open").checked = false;
        }
      });
    }
  };
})(jQuery);
