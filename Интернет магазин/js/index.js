$(document).ready(function () {
	// сварачиваем меню с помощью метода slideToggle
	$('.icon').click(function (e) {
		//после клика выбираем наше меню и применяем к нему метод slideToggle 500 скорость разворота в милисек
		e.preventDefault()
		$('header').slideToggle(500)
		$('span:nth-child(1)').toggleClass('first_line')
		$('span:nth-child(2)').toggleClass('second_line')
		$('span:nth-child(3)').toggleClass('third_line')
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
	document.addEventListener('DOMContentLoaded', e => {
		let file = document.querySelector('#file'), // Выбираем нужные
			preview = document.querySelector('#preview') // элементы

		file.addEventListener('change', e => {
			// При изменении input
			if (file.files.length === 0)
				// Если ничего не выбрано - выходим
				return

			let f = file.files[0], // Берём первый файл
				fr = new FileReader() // Создаём объект чтения файлов

			// В свойсте type mime (что-то типа image/png)
			if (f.type.indexOf('image') === -1)
				// Если файл не является изображением - выходим
				return

			fr.onload = e => {
				if (getComputedStyle(preview, null).display === 'none')
					// Если нужно - показываем img
					preview.style.display = 'block'

				preview.src = e.target.result // В src будет что-то типа data:image/jpeg;base64,....
			}
			fr.readAsDataURL(f) // Читаем blob выбранного файла
		})
	})
})
