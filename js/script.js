function fadedEls(el, shift) {
    el.css('opacity', 0);

    switch (shift) {
        case undefined:
            shift = 0;
            break;
        case 'h':
            shift = el.eq(0).outerHeight();
            break;
        case 'h/2':
            shift = el.eq(0).outerHeight() / 2;
            break;
    }

    $(window).resize(function() {
        if (!el.hasClass('ani-processed')) {
            el.eq(0).data('scrollPos', el.eq(0).offset().top - $(window).height() + shift);
        }
    }).scroll(function() {
        if (!el.hasClass('ani-processed')) {
            if ($(window).scrollTop() >= el.eq(0).data('scrollPos')) {
                el.addClass('ani-processed');
                el.each(function(idx) {
                    $(this).delay(idx * 200).animate({
                        opacity : 1
                    }, 600);
                });
            }
        }
    });
}

(function($) {
    $(function() {

        $(window).resize(function() {
            var sH = $(window).height();
            $('section.header-21-sub').css('height', (sH - $('header').outerHeight()) + 'px');

            if($(window).width()<= 768){
                console.log($(window).width());
                $('section.content-17').css('height', (sH + 'px'));
            } else{
                $('section.content-17').css('height', 'auto');
            }
        });

        // Faded elements
        if ($(window).width() > 480) {
            $('h3 img:not(.hl)').each(function() {
                fadedEls($(this), 'h/2');
            });
        }

    });
})(jQuery);
