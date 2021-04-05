let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let res = document.getElementById('res')
let result

function plus() {
	num11 = parseInt(num1.value)
	num22 = parseInt(num2.value)
	result = num11 + num22
	res.value = 'Ответ: ' + result
}

function minus() {
	num11 = parseInt(num1.value)
	num22 = parseInt(num2.value)
	result = num11 - num22
	res.value = 'Ответ: ' + result
}

function mnog() {
	num11 = parseInt(num1.value)
	num22 = parseInt(num2.value)
	result = num11 * num22
	res.value = 'Ответ: ' + result
}

function delenie() {
	num11 = parseInt(num1.value)
	num22 = parseInt(num2.value)
	result = num11 / num22
	res.value = 'Ответ: ' + result
}

//Только числа в инпут
$('input').on('keydown', function (event) {
	console.log('Код нажатого символа:', event.which)

	// Разрешаем использование Backspace - это для того, чтобы мы моги стирать написанные числа
	if (event.which == 8) {
		return true
	}

	// Запрещаем выводит все кроме чисел
	if (event.which < 48 || event.which > 57) {
		return false
	}
})
