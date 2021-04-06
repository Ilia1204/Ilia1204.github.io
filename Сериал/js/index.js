$(function () {
	let viewport = $('.viewport').width() // сохраняем ширину всего блока с котором находится наша галерея
	let slider = $('ul.slider')
	let viewSliders = $('.dot')
	let viewSlide = 0

	$('.next').click(function () {
		$(viewSliders[viewSlide]).removeClass('active') // удаляем класс у первой картинки так как она больше не активная
		if (viewSlide < 4) {
			viewSlide++
		} else {
			viewSlide = 0
		}
		$(viewSliders[viewSlide]).addClass('active') // добавляем активный класс для точки, чтобы понимать на какой мы картинке сейчас находимся
		slider.animate({ left: -viewSlide * viewport + 'px' }, { duration: 500 }) // делаем сдвиг влево на ширину картинки
	})
	$('.prev').click(function () {
		$(viewSliders[viewSlide]).removeClass('active')

		if (viewSlide > 0) {
			viewSlide--
		} else {
			viewSlide = 4
		}

		$(viewSliders[viewSlide]).addClass('active')
		slider.animate({ left: -viewSlide * viewport + 'px' }, { duration: 500 })
	})
	const btnOff = $('.scroll-off'),
		btnOn = $('.scroll-on'),
		main = $('body'),
		landing = $(window)
})
