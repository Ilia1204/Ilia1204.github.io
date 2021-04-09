let List = $('#ToDoApp ul')
let Mask = 'tdl_'
function showTasks() {
	//	Узнаём размер хранилища
	let Storage_size = localStorage.length
	// Если в хранилище что-то есть…
	if (Storage_size > 0) {
		// то берём и добавляем это в задачи
		for (let i = 0; i < Storage_size; i++) {
			let key = localStorage.key(i)
			if (key.indexOf(Mask) == 0) {
				//	и делаем это элементами списка
				$(`<li title="Нажмите, чтобы удалить"></li>`)
					.addClass('tdItem')
					.attr('data-itemid', key)
					.text(localStorage.getItem(key))
					.appendTo(List)
			}
		}
	}
}
showTasks()
$('#input_name').on('keydown', function (e) {
	if (e.keyCode != 13) return
	let str = e.target.value
	e.target.value = ''
	// Если в поле ввода было что-то написано — начинаем обрабатывать
	if (str.length > 0) {
		let number_Id = 0
		List.children().each(function (index, el) {
			let element_Id = $(el).attr('data-itemid').slice(4)
			if (element_Id > number_Id) number_Id = element_Id
		})
		number_Id++
		// Отправляем новую задачу сразу в память
		localStorage.setItem(Mask + number_Id, str)
		// и добавляем её в конец списка
		$(`<li title="Нажмите, чтобы удалить"></li>`)
			.addClass('tdItem')
			.attr('data-itemid', Mask + number_Id)
			.text(str)
			.appendTo(List)
	}
})
$(document).on('click', '.tdItem', function (event) {
	// Находим задачу, по которой кликнули
	let note = $(event.target)
	// Убираем её из памяти
	localStorage.removeItem(note.attr('data-itemid'))
	// и убираем её из списка
	note.remove()
})
$('.delete_tasks').click(function () {
	const allNotes = $('.tdItem')
	$(allNotes).remove()

	if (allNotes.length == 0) {
		console.log('Нечего удалять')
	}
})
