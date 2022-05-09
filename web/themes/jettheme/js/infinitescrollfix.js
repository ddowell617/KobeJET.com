(function ($) { Drupal.behaviors.infinitescrollfixjs = {
    attach: function (context, settings) {

    // infinite scroll display row | and IE 11 problems
    $(document).ready(function () {
        $('.views-infinite-scroll-content-wrapper').addClass('row');
        var isAtLeastIE11 = !!(navigator.userAgent.match(/Trident/) && !navigator.userAgent.match(/MSIE/));
        if (isAtLeastIE11 == true) {
            $('.views-infinite-scroll-content-wrapper').parent().removeClass('row');
            $('.aktuelle-ausgabe-uebersicht').children('.view-content').removeClass('row');
        }
        else {
            // empty
        }
    });

    }
};})(jQuery);