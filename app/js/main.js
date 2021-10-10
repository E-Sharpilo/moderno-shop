$(function () {
    if ($('.products__inner-box').length) {
        var mixer = mixitup('.products__inner-box');
    }

    $('.rate-star').rateYo({
        starWidth: '12px',
        rating: 5,
        readOnly: true
    });


    $('.product__slider-inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: '$',
    });

    $('.icon-th-list').on('click', function () {
        $('.product__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');
    });
    $('.icon-th-large').on('click', function () {
        $('.product__item').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active')
    });

    $('.header__btn-menu').on('click', function () {
        $('.header__box').toggleClass('active');
    });
    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

    $('.some-product__tabs .tab').on('click', function (event) {
        let id = $(this).attr('data-id');
        $('.some-product__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.some-product__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });


    $('.settings__aside-tabs .settings__tab').on('click', function (event) {
        let id = $(this).attr('data-id');
        $('.settings__tab-content').find('.settings__tab-item').removeClass('active-tab').hide();
        $('.settings__aside-tabs .settings__tabs').find('.settings__tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('input[type="file"], select').styler();


});