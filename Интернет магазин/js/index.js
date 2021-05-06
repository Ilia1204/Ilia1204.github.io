$(document).ready(function () {
	$('.icon').click(function (e) {
		e.preventDefault()
		$('header').slideToggle(500)
		$('span:nth-child(1)').toggleClass('first_line')
		$('span:nth-child(2)').toggleClass('second_line')
		$('span:nth-child(3)').toggleClass('third_line')
	})

	$('.btn_close_notif').click(function () {
		$(this).closest('.notification_success').remove()
		return false
	})
})
