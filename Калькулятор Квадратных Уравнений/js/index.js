let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let num3 = document.getElementById('num3')
let res = document.getElementById('res')
let factor1
let factor2
let factor3
let discriminant
let x1
let x2
let result
let result2

function desision() {
	factor1 = parseInt(num1.value)
	factor2 = parseInt(num2.value)
	factor3 = parseInt(num3.value)
	discriminant = Math.pow(factor2, 2) - 4 * factor1 * factor3
	x1 = (-factor2 + Math.sqrt(discriminant)) / 2
	x2 = (-factor2 - Math.sqrt(discriminant)) / 2
	result = x1
	result2 = x2
	res.value = 'Ответ: ' + 'x1 = ' + result2 + ';' + ' x2 = ' + result
}

//Только числа в инпут
$('input').on('keydown', function (event) {
	console.log('Код нажатого символа:', event.which)

	// Разрешаем использование Backspace - это для того, чтобы мы моги стирать написанные числа
	if (event.which == 8) {
		console.log('Был нажат Backspace')
		return true
	}
	//Разрешаем использование минуса
	if (event.which == 189) {
		console.log('Был нажат Минус')
		return true
	}

	// Запрещаем выводит все кроме чисел
	if (event.which < 48 || event.which > 57) {
		return false
	}
})
