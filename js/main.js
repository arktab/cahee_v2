'use strict';

(function ($) {
    $(document).ready(function () {
        // slick slider__________________________
//        $('.blog__grid').slick({
//            infinite: true,
//            slidesToShow: 3,
//            dots: false,
//            arrows: false,
//            autoplay: true,
//            autoplaySpeed: 2000
//        });
  
        // Mobile menu___________________________
        $('.burger-menu').click(function () {
            $(this).toggleClass('burger-menu--active');
            $('body').toggleClass('is-menu-shown');
        });

    });
})(jQuery);
