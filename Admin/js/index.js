    /*
        Модальное окно
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
        console.log(event.target);

        // Проверяем что мы нажали на родителя (т.е. само Модальное окно)
        // а не на то что наъодиться в нутри нее (Контент)
        if(event.target == this) {
            $(this).hide();
        }
    });

     $('.header-button').hover(function() {
       $('div.dropdown', this).slideDown(500);    
   },function() {
       $('div.dropdown', this).slideUp(500);             
   });

   $('.hamburger').click(function() {
        $('span:nth-child(1)').toggleClass('first_line');
        $('span:nth-child(2)').toggleClass('second_line');
        $('span:nth-child(3)').toggleClass('third_line');
        $('.menu_top').toggleClass('menu_top_active');
    });
    
    //$(this).toggleClass("is-active"), 
    //$(this).hasClass("is-active") ? $(".mnu_top").slideDown(300) : $(".mnu_top").slideUp(300)