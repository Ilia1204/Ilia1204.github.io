$(function () {
	function navMenuLink() {
		$('.lists-item a').removeClass('active')

		if (($(window).scrollTop() >= 0) & ($(window).scrollTop() < 800)) {
			$('.lists-item').find('a:contains(Home)').addClass('active')
		} else if (($(window).scrollTop() > 800) & ($(window).scrollTop() < 1600)) {
			$('.lists-item').find('a:contains(About)').addClass('active')
		} else if (
			($(window).scrollTop() > 1600) &
			($(window).scrollTop() < 2400)
		) {
			$('.lists-item').find('a:contains(Portfolio)').addClass('active')
		} else if ($(window).scrollTop() > 2400) {
			$('.lists-item').find('a:contains(Contact)').addClass('active')
		}
	}
	$('a[href*="#"]').on('click', function (event) {
		event.preventDefault()

		$('html, body').animate(
			{
				scrollTop: $($(this).attr('href')).offset().top,
			},
			500,
			'linear'
		)

		$('.lists-item a').removeClass('active')

		if ($(this).attr('class') === 'logo') {
			$('.lists-item').find('a:contains(Home)').addClass('active')
		} else {
			if ($(this).attr('id') === 'cont-me') {
				$('.lists-item').find('a:contains(Contact)').addClass('active')
			} else {
				const elemNav = `a:contains(${$(this).text()})`
				$('.lists-item').find(elemNav).addClass('active')
			}
		}
	})
	$(document).ready(function () {
		$('.icn').click(function () {
			$(this).toggleClass('open')
			$('open').slideDown(300)
		})
	})
	navMenuLink()

	$(document).scroll(function (event) {
		if ($(window).scrollTop() > $(window).height()) {
			$('header').addClass('header-color')
		} else {
			$('header').removeClass('header-color')
		}

		navMenuLink()
	})
	$(function () {
		$('.hamb').click(function () {
			$('.menu-lists').animate({
				right: 0,
			})
			$(this).hide()
			$('.overlay').fadeIn()
		})
		$('.menu-lists span, .overlay').click(function () {
			$('.menu-lists').animate({
				right: -250,
			})
			$('.hamb').show()
			$('.overlay').fadeOut()
		})
	})
})
$(document).ready(function () {
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
		$(this).toggleClass('open')
	})
})

$('.hamburger').click(function () {
	$('span:nth-child(1)').toggleClass('first_line')
	$('span:nth-child(2)').toggleClass('second_line')
	$('span:nth-child(3)').toggleClass('third_line')
	$('ul.menu_lists').toggleClass('menu_top_active')
})
