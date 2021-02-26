let showPassword = document.querySelectorAll('.showPassword');
    showPassword.forEach(item =>
        item.addEventListener('click', toggleType)
    );
function toggleType() {     
    let input = this.closest('.dws-input2').querySelector('.password');
    
    if (input.type === 'password') {
        input.type = 'text';
    } 
    else {
        input.type = 'password';
    }
}
$('body').on('click', '.showPassword', function(){
	if ($(this).is(':checked')){
		$('#password-input').attr('type', 'text');
	} else {
		$('#password-input').attr('type', 'password');
	}
}); 







const url = {
        fixer: 'http://data.fixer.io/api/latest'
}

const access_key = 'e3aab1d37937c581eb001b37ed521292';

$.get(
    url.fixer, 
    {
        'access_key':access_key,
        'symbols':'USD, EUR, RUB',
        /*'base':'RUB'*/
    
    },
    (response) => {
        if(response.success){
            console.log(response);
            /*$('.valute-usd').html(())*/
        }
        else {
            alert('ERROR!' + response.error.type);
        }
    }
);



    $(document).scroll(function(event) {
        if($(window).scrollTop() > $(window).height()) {
            $('header').addClass('header-color');
        } else {
            $('header').removeClass('header-color');
        }

        navMenuLink();
    });


$('body').on('click', '.password-control', function(){
    if ($('#password-input').attr('type') == 'password'){
        $(this).addClass('view');
        $('#password-input').attr('type', 'text');
    } else {
        $(this).removeClass('view');
        $('#password-input').attr('type', 'password');
    }
    return false;
});
