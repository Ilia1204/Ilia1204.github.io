$(function () {
	let div = $('div')
	let titleElem = $('.name')
	$('.add_tasks').click(function addTask(titleElem) {
		// подставляем данные которые пришли с формы
		let task = `
      <div class="todo-item">
				<input type="checkbox" class="checkbox">
				<span class="name task-1">${title}</span>
			</div>	
        `
		// добавляем нашу задачку и скрываем p, в котором находился текст 'Список пуст...'
		div.append(task)
	})
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
