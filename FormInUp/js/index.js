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

$(document).ready(function(){
    $("#setCookie").click(function () {
    $.cookie("popup", "", { expires:0, path: '/' });
    $("#bg_popup").hide();
    });
     
    if ( $.cookie("popup") == null )
    {
    setInterval(function(){
    $("#bg_popup").show();
    }, 1000)
    }
    else { $("#bg_popup").hide();
    }
     
});

