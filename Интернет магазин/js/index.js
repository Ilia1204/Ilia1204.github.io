$(document).ready(function () {
	// сварачиваем меню с помощью метода slideToggle
	$('.icon').click(function (e) {
		//после клика выбираем наше меню и применяем к нему метод slideToggle 500 скорость разворота в милисек
		e.preventDefault()
		$('header').slideToggle(500)
	})
	//при размере экрана больше 500px наше меню будет пропадать, исправим это убрав у тега ul атрибут style = 'display: none'
	//при изменении окна запускаем функцию
	$(window).resize(function () {
		//c проверкой - если (окно).шириной > 500
		if ($(window).width() > 100) {
			// то убрать у &('nav ul').removeAttr('style') атрибут style
			$('header ul').removeAttr('style')
		}
	})
})
