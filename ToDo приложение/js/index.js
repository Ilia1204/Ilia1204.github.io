$(function () {
	let ul = $('ul')
	let titleElem = $('.name')
	let input = $('.input_name')
	$('.add_tasks').click(function addTask(title) {
		// подставляем данные которые пришли с формы
		let task = `
			<li>
				<input type="checkbox">
				<span>${title}</span>	
    	</li>    
			`
		// добавляем нашу задачку
		ul.append(task)
		document.getElementById('input_name').value = document.getElementById(
			'input_name'
		).defaultValue
	})

	input.submit(function (event) {
		// делаем так чтобы форма не отправляла данные
		event.preventDefault()

		// собираем данные с полей
		const title = titleElem.val()

		// приводим форму к первоночальному виду

		// вызываем нашу написанную функцию и отправляем ей данные взятые из формы
		addTask(title)
	})

	$('.item-1').click(
		function () {
			$('.task-1').attr('style', 'text-decoration: none;')
		},
		function () {
			$('.task-1').attr('style', 'text-decoration: line-through;')
		}
	)
	$('.todo-item').click(function () {
		$(this).find(':checkbox').attr('checked', 'checked')
	})

	$('li').click(
		function () {
			$('.task-1').attr('style', 'text-decoration: none;')
		},
		function () {
			$('.task-1').attr('style', 'text-decoration: line-through;')
		}
	)
	$('.item-2').click(
		function () {
			$('.task-2').attr('style', 'text-decoration: none;')
		},
		function () {
			$('.task-2').attr('style', 'text-decoration: line-through;')
		}
	)

	$('.delete_tasks').click(function () {
		// написать удаление при нажатие на кнопку delete
		let li = 'li'
		$(li).remove()
	})
})
