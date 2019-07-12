$(document).ready(function(){

    // Блок портфолио, адаптив к слайдеру

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots: true
            },
            600:{
                items:2,
                nav:false,
                dots: true
            },
            800:{
                items:2,
                nav:false,
                dots: true
            },
            1024:{
                items:3,
                nav:true,
                loop:true,
                dots: false
            }
        }
    })

    // Показ меню для мобильных устройств по клику

    $('.menu-icon').on('click', function() {
        $('.menu-icon-item').toggleClass('menu-icon-item-active');
        $('.menu-modal-container').toggleClass("menu-modal-container-active");
    });

    // Добавление блока меню в header на мобильных устройствах

     $('.header').prepend("<div class='menu-modal-container'>" +
                                "<span class='menu-modal-logo'>" + "</span>" +
                                "<nav class='menu-modal'>" +
                                    "<ul class='menu-modal-list'>" +
                                        "<li class='menu-modal-list-item'>" +
                                            "<a href='#' class='menu-modal-list-item-link'>" + "Услуги" + "</a>" +
                                        "</li>" +
                                        "<li class='menu-modal-list-item'>" +
                                            "<a href='#' class='menu-modal-list-item-link'>"+ "Портфолио" + "</a>" +
                                        "</li>" +
                                        "<li class='menu-modal-list-item'>"+
                                            "<a href='#' class='menu-modal-list-item-link'>" + "Стоимость" + "</a>" +
                                        "</li>" +
                                    "</ul>" +
                                "</nav>" +
                            "</div>");

    // Добавление блока so-bl-lf в sectionone на мобильных устройствах

     $('.section-one').after("<section class='section-one-media'>" +
                                "<div class='container-block'>" +
                                    "<div class='so-bl-lf-media'>" +
                                        "<h1 class='title-site'>" + "Дмитрий&nbsp;Алексеев" + "</h1>" +
                                        "<p class='description-site'>" + "Frontend-разработчик и веб-&nbsp;верстальщик" + "</p>" +
                                        "<button class='so-bt bt-all-style'>" + "Узнать больше" + "</button>" +
                                    "</div>" +
                                "</div>" +
                         "</section>");

    // Пявление и скрытие модальных окон

    // $('.bt-callback').on('click', function() {
    //     $('body').css("overflow-y", "hidden");
    //     $('.modal-callback-container').fadeIn(400);
    //
    // });
    //

    //
    // $('.bt-all-active').on('click', function() {
    //     $('.modal-other-container').fadeIn(400);
    //     $("body").css("overflow-y","hidden");
    // });

    //Modal window
    var modalWindow = $('.modal-window');
    var btnClick = $('.btnClick');

    btnClick.on('click', function() {
    	var windowIndex = $(this).attr('date-index-window');

    	for(var i = 0; i < modalWindow.length; i++) {
    		if(i == windowIndex) {
                $('body').css("overflow-y", "hidden");
                modalWindow.eq(i).fadeIn(400);
    		}
    	}
    });

    $('.close-modal-window').on('click', function() {
        $('.modal-window').fadeOut(400);
        $('body').css("overflow-y", "auto");
    });


    // Открытие портфолио
    // $('.bl-portfolio-link-zoo').on('click', function() {
    //     $('.modal-project-container-zoo').fadeIn(500);
    // });
    //
    // $('.bl-portfolio-link-mksm').on('click', function() {
    //     $('.modal-project-container-mksm').fadeIn(500);
    // });
    //
    // $('.bl-portfolio-link-baby').on('click', function() {
    //     $('.modal-project-container-baby').fadeIn(500);
    // });



    // скролл по якорям

    $(".so-bt").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $('.section-two').offset().top;
        $('html, body').animate({ scrollTop: destination }, 600);
        return false;
    });

     $(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 600);
                return false;
        });
    });

});
