let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let res = document.getElementById('res')
let result
let katet1
let katet2

function desision() {
	katet1 = parseInt(num1.value)
	katet2 = parseInt(num2.value)
	result = Math.pow(katet1, 2) + Math.pow(katet2, 2)
	res.value = 'Гипотенуза равна:  ' + Math.sqrt(result)
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
