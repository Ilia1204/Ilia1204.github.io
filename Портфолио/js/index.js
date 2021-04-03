window.onload = function () {
	let preloader = document.getElementById('preloader')
	preloader.style.display = 'none'
}
$('.li_side_bar a').hover(function () {
	if ($(this).hasClass('.li_side_bar a:hover:before')) {
		$(this)
			.addClass('.li_side_bar a:before')
			.removeClass('.li_side_bar a:hover:before')
	} else {
		$(this)
			.addClass('.li_side_bar a:hover:before')
			.removeClass('.li_side_bar a:before')
	}
})
