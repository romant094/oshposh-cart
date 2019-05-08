$(document).ready(function () {
    // Скролл
    $("body").on('click', '[href*="#"]', function (e) {
        var fixed_offset = 200;
        $('html,body').stop().animate({
            scrollTop: $(this.hash).offset().top - fixed_offset
        }, 1000);
        e.preventDefault();
    });

    $('.phone').mask('+7 (999) 999-99-99');
// модадка

    $('.cart-btn').on('click', function () {
        $('.popup-modal').fadeIn();
    });

    $('.modal-close').on('click', function () {
        $('.popup-modal').fadeOut();
    });

//моб меню{}
    $('.menu-count__burger').on('click', function () {
        $(this).toggleClass('menu-active');
        $(this).toggleClass('menu-count__burger');
        $('.menu-mob-active').slideToggle();
    });

    link = $('.menu-mob-active a').on('click', function () {
        $('#burger').removeClass('menu-active');
        $('#burger').addClass('menu-count__burger');
        $('.menu-mob-active').slideToggle();
    });

//slider-feedback
    $('.recept-slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        //  slidesToScroll: 1,
        prevArrow: ('.arrows-feed_prev1'),
        nextArrow: ('.arrows-feed_next1'),
        variableWidth: true,
    });

    $('.main-slider').slick({
        infinite: true,
        //  arrows: true,
        slidesToShow: 1,
        dots: true
        //  slidesToScroll: 1,

        //  variableWidth: true
    });
//  $(button)
//слайдер

    let slideIndex = 1,
        slides = document.getElementsByClassName('slider-item_feed'),
        // slides1 = document.getElementsByClassName('slider-item1'),
        prev = document.querySelector('.arrows-feed_prev'),
        // prev1 = document.querySelector('.arrows-left1'),
        next = document.querySelector('.arrows-feed_next'),
        // next1 = document.querySelector('.arrows-right1'),
        dotsWrap = document.querySelector('.dots-flex'),
        // dotsWrap1 = document.querySelector('.slider-dots1'),
        dots = document.getElementsByClassName('dot');
    // dots1 = document.getElementsByClassName('dot1');

    showSlides(slideIndex);

    // showSlides1(slideIndex);

    function showSlides(n) {
        if (n > slides.length) { // если закончились слайды ставим на первую позию
            slideIndex = 1;
        }
        ;
        if (n < 1) {
            slideIndex = slides.length; // ставим в конец
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';

        }
        ;
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active-dots');

        }
        ;
        slides[slideIndex - 1].style.display = 'flex';
        dots[slideIndex - 1].classList.add('active-dots');
    };


    function plusSlides(n) {
        showSlides(slideIndex += n)
    }

    function currentSlide(n) {
        showSlides(slideIndex = n)
    };

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
                // currentSlide1(i);
            }
        }
    });


    function rand() {
        var h = new Date();
        var hours = h.getHours();

        var total = 0;

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        getRandomInt(1, 12);
        if (hours == 10) {
            total = 5 + getRandomInt(1, 12)
        }
        if (hours == 11) {
            total = 9 + getRandomInt(1, 12)
        }
        if (hours == 12) {
            total = 12 + getRandomInt(1, 12)
        }
        if (hours == 1) {
            total = 17 + getRandomInt(1, 12)
        }
        if (hours == 2) {
            total = 22 + getRandomInt(1, 12)
        }
        if (hours == 3) {
            total = 25 + getRandomInt(1, 12)
        }
        if (hours == 4) {
            total = 26 + getRandomInt(1, 12)
        }
        if (hours == 5) {
            total = 30 + getRandomInt(1, 12)
        }
        if (hours == 6) {
            total = 35 + getRandomInt(1, 12)
        }
        if (hours == 7) {
            total = 37 + getRandomInt(1, 12)
        }
        if (hours == 8) {
            total = 40 + getRandomInt(1, 12)
        }
        document.getElementById("myspan").textContent = total;

    }

    rand();
// 


});