(function ($) {
    Drupal.behaviors.gearspinjs = {
	attach: function (context, settings) {

		$('#block-tools').hover(
			function() {
				$('.fa-cog').addClass('fa-spin');
			}, function() {
				$('.fa-cog').removeClass('fa-spin');
		});

		$('#block-tools').on('touchstart', function (e) {
		    'use strict'; //satisfy code inspectors
		    var link = $(this); //preselect the link
		    if (link.hasClass('hover')) {
		        return true;
		    } else {
		        link.addClass('hover');
		        $('#block-tools').not(this).removeClass('hover');
		        e.preventDefault();
		        return false; //extra, and to make sure the function has consistent return points
		    }
		});

		$('.navbar-header .input-group #edit-keys').hover(
			function() {
				$('.fa-cog').addClass('fa-spin');
			}, function() {
				$('.fa-cog').removeClass('fa-spin');
		});

		$('.navbar-header .input-group #edit-keys').focus(
			function() {
				$('.fa-cog').addClass('fa-spin');
		});
		$('.navbar-header .input-group #edit-keys').blur(
			function() {
				$('.fa-cog').removeClass('fa-spin');
		});
	}
    };
})(jQuery);
