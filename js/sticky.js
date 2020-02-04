(function ($) {
    "use strict";

    /* One Page Nav */
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrolloffset: top_offset,
    });

    /* Sticky Menu */

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if(scroll > 20) {
            $(".header-sticky").remonveClass("sticky");
        }
        else{
            $(".header-sticky").addClass("sticky");
        }
    });


})(jQuery);	