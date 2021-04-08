$(function () {
	let div = $('div')

	function addTask(title) {
		// подставляем данные которые пришли с формы
		let task = `
      <div class="todo-item">
				<input type="checkbox" class="checkbox">
				<span class="name task-1">${title}</span>
			</div>

        <input type="text" placeholder="Название">${title}
        `
		// добавляем нашу задачку и скрываем p, в котором находился текст 'Список пуст...'
		div.append(task)
	}

	$('.checkbox').click(
		function () {
			$('.task-1').attr('style', 'text-decoration: none;')
		},
		function () {
			$('.task-1').attr('style', 'text-decoration: line-through;')
		}
	)
	$('.checkbox-2').click(
		function () {
			$('.task-2').attr('style', 'text-decoration: none;')
		},
		function () {
			$('.task-2').attr('style', 'text-decoration: line-through;')
		}
	)
})
