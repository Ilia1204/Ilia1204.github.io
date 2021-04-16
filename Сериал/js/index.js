$(function () {
	$('.button_films').click(function () {
		$('.modal').show()
		console.log('Открытие модального окна')
	})

	$('.close').click(function () {
		$('.modal').hide()
	})

	$('.modal').click(function (event) {
		console.log(event.target)

		if (event.target == this) {
			$(this).hide()
		}
	})

	function filePreview(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader()
			reader.onload = function (e) {
				$('#uploadForm + embed').remove()
				$('#uploadForm').after(
					'<embed src="' + e.target.result + '" width="450" height="300">'
				)
			}
			reader.readAsDataURL(input.files[0])
		}
	}

	$('#file').change(function () {
		filePreview(this)
	})
})
