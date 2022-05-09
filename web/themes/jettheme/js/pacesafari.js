(function ($) {
    Drupal.behaviors.pacesafarijs = {
        attach: function (context, settings) {      
            if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
      var el;
      el = this.getElement();
      el.className = el.className.replace('pace-active', '');
      el.className += ' pace-inactive';
      document.body.className = document.body.className.replace('pace-running', '');
      return document.body.className += ' pace-done';
            }
        }
    }
});