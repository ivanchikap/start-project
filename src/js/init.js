$(document).ready(function(){

    //SVG Fallback
    if(!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };
    //Замінюєм svg на png якщо не підтримується

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });
    //Зображення і ссилки не переміщуютсья

    $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        verticalOffset: 80,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: 'scroll'
    });
    //Прокрутка бекграунда разом зі скролом. Необхідно stellar.min.js і наче jquery-migrate.min.js



    if (document.getElementById('btnMenu')) {
        let navMenuBtn = document.getElementById('btnMenu');
        let closeMenu = document.getElementById('closeMenu');
        let menu = document.getElementById('menu');

        navMenuBtn.addEventListener("click", function() {
            let menu = document.getElementById('menu');
            setTimeout(function () {
                menu.classList.toggle('mobile-menu--active');
            }, 100)
        });
        menu.addEventListener("click", function(e) {
            let target = e.target;

            if (target === closeMenu || target === menu || target.classList.contains('nav__item--mobile')) {
                //коли тиснема на переход по якорю також прибирати клас --active
                setTimeout(function () {
                    menu.classList.toggle('mobile-menu--active');
                }, 100);
            }
        });
    }

    //mobile menu

    let contentWayPoint = function() {
        let i = 0;
        $('.ftco-animate').waypoint( function( direction ) {

            if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function(){

                    $('body .ftco-animate.item-animate').each(function(k){
                        let el = $(this);
                        setTimeout( function () {
                            let effect = el.data('animate-effect');
                            if ( effect === 'fadeIn') {
                                el.addClass('fadeIn ftco-animated');
                            } else if ( effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft ftco-animated');
                            } else if ( effect === 'fadeInRight') {
                                el.addClass('fadeInRight ftco-animated');
                            } else {
                                el.addClass('fadeInUp ftco-animated');
                            }
                            el.removeClass('item-animate');
                        },  k * 50, 'easeInOutExpo' );
                    });

                }, 100);

            }

        } , { offset: '95%' } );
    };
    contentWayPoint();
    //анімація при прокрутці - працює разом з
    // jquery-waypoints.min.js, animate.css та в base .ftco-animate { opacity: 0, visibility: hidden;}
    //

    /*
    $(function(){
        $('a[href^="#"]').on('click', function(event) {
            // отменяем стандартное действие
            event.preventDefault();

            var sc = $(this).attr("href"),
                dn = $(sc).offset().top;
            /!*
            * sc - в переменную заносим информацию о том, к какому блоку надо перейти
            * dn - определяем положение блока на странице
            *!/

            $('html, body').animate({scrollTop: dn}, 500);

            /!*
            * 1000 скорость перехода в миллисекундах
            *!/
        });
    });
*/
    //Плавна прокрутка по якорям сайту
});