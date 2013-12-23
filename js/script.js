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


        // Focus state for append/prepend inputs
        $('.input-prepend, .input-append').on('focus', 'input', function() {
            $(this).closest('.control-group, form').addClass('focus');
        }).on('blur', 'input', function() {
            $(this).closest('.control-group, form').removeClass('focus');
        });

        // Faded elements
        if ($(window).width() > 480) {
            $('h3 img:not(.hl)').each(function() {
                fadedEls($(this), 'h/2');
            });
        }

        if ($(window).width() > 480) {
            (function(el) {
                $(window).resize(function() {

                    var wndHeight = $(window).height();
                    var offsetTop = el.offset().top;

                    el.data('aniInStart', offsetTop - wndHeight);
                    el.data('aniInStop', offsetTop - wndHeight + wndHeight / 3 * 2);

                    el.data('aniOutStart', offsetTop + el.outerHeight() - wndHeight / 3 * 2);
                    el.data('aniOutStop', offsetTop + el.outerHeight());

                }).scroll(function() {

                    var aniType = '';
                    var factor = 1;
                    var scrollTop = $(window).scrollTop();

                    if (scrollTop < el.data('aniInStop')) {
                        aniType = 'in';
                        factor = -(el.data('aniInStart') - scrollTop) / (el.data('aniInStop') - el.data('aniInStart'));
                    } else {
                        aniType = 'out';
                        factor = -(el.data('aniOutStart') - scrollTop) / (el.data('aniOutStop') - el.data('aniOutStart'));
                    }

                    factor = Math.min(1, Math.max(0, factor));

                    if (aniType == 'in') {
                        el.css('opacity', factor);
                    } else {
                        el.css('opacity', 1 - factor);
                    }

                });
            })($('.blog-2'));
        }

        

    });
})(jQuery);
