'use strict';
(function($){
  var init = function() {
    $('.themeSamples').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 1
    });
  };

  $(document).ready(init)
})(jQuery);
