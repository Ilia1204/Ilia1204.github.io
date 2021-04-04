let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let res = document.getElementById('res')
var result

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
