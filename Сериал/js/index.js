$(function() {
        /*
        6 Блок
    */

    // Открытие Модального окна через кнопку
    $('.open-modal').click(function() {
        $('.modal').show();
    });

    // Закрытие Модально окна через Кнопку Крестик
    $('.close').click(function() {
        $('.modal').hide();
    });

    // Закрытие Модального окна нажам на любое место кроме модального окна
    $('.modal').click(function(event) {
        
        // Проверяем что мы нажали на родителя (т.е. само Модальное окно)
        // а не на то что наъодиться в нутри нее (Контент)
        if(event.target == this) {
            $(this).hide();
        }
    });
    let viewport = $(".viewport").width(); // сохраняем ширину всего блока с котором находится наша галерея
    let slider = $("ul.slider");
    let viewSliders = $(".dot");
    let viewSlide = 0;

    $(".next").click(function () { 
        $(viewSliders[viewSlide]).removeClass('active'); // удаляем класс у первой картинки так как она больше не активная

        if (viewSlide < 4) {
            viewSlide++;
        } else {
            viewSlide = 0;
        }

        $(viewSliders[viewSlide]).addClass('active'); // добавляем активный класс для точки, чтобы понимать на какой мы картинке сейчас находимся

        slider.animate({'left': -viewSlide * viewport + "px"}, {'duration': 500})   // делаем сдвиг влево на ширину картинки
    });

    $(".prev").click(function () { 
        $(viewSliders[viewSlide]).removeClass('active');

        if (viewSlide > 0) {
            viewSlide--;
        } else {
            viewSlide = 4;
        }

        $(viewSliders[viewSlide]).addClass('active');

        slider.animate({'left': -viewSlide * viewport + "px"}, {'duration': 500})  
    });
    const btnOff = $('.scroll-off'),
	btnOn = $('.scroll-on'),
    main = $('body'),
    landing = $(window);


    //Универсальное отключение скролла
    let disableScroll = function () {
    let pagePosition = landing.scrollTop();
    main.addClass('disable-scroll');
    main.offset({top: pagePosition});
    main.css('top', -pagePosition + 'px');
        }

    let enableScroll = function () {
    let pagePosition = -main.offset().top;
    main.css('top', 'auto');
    main.removeClass('disable-scroll');
    landing.scrollTop(pagePosition);
        }

        btnOff.on('click', (e) => {
    disableScroll();
    $(e.currentTarget).css('pointerEvents', 'none');
    btnOn.css(
        {
        'pointerEvents': 'auto',
        'cursor': 'pointer'
        }
    );
});

btnOn.on('click', (e) => {
    enableScroll();
    $(e.currentTarget).css('pointerEvents', 'none');
    btnOff.css('pointerEvents', 'auto');
});
});
  