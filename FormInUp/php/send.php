<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Форма регистрации</title>
</head>
<body>
    <?php
    //проверяем, существуют ли переменные в массиве POST
        if(!isset($_POST['email']) and !isset($_POST['password'])){
 ?>
    <div class="header" id="myheader">
        <h1 class="header-form-sign-in" data-aos="fade-right">
            <span>
             Form
            </span>
            Sign In
        </h1>

        <nav class="menu">
            <ul class="menu-lists">
                <li class="lists-item" data-aos="fade-down-right">
                    <a href="#person">Home</a>
                </li>

                <li class="lists-item"data-aos="fade-down-left">
                    <a href="#about">About</a>
                </li>

                <li class="lists-item"data-aos="fade-down-right">
                    <a href="#services">Services</a>
                </li>

                <li class="lists-item"data-aos="fade-down-left">
                    <a href="#blog">Blog</a>
                </li>

                <li class="lists-item"data-aos="fade-down-right">
                    <a href="#portfolio">Portfolio</a>
                </li>

                <li class="lists-item"data-aos="fade-down-left">
                    <a href="#contact">Contact</a>
                </li>

                <li class="lists-item"data-aos="fade-down-right">
                    <a href="#privacy-policy">Privacy policy</a>
                </li>
            </ul>
        </nav>
        <button class="button1"  data-aos="fade-left">Contact Me</button>
        <ul class="social-links">
            <li>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars">
                    </i>
                </a>
            </li>
        </ul>
    </div>
    <div class="container">
        <form class="form" action="send.php" method="post">
            <div class="action">
                <div class="dws-input">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <input type="email" name="email" placeholder="Email Address"  title = "Введите ваш email" maxlength="35"required>
                </div>
                <div class="dws-input2">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                    <input type="password"  id="password-input" class = "password" name="password" placeholder="Password"maxlength="25" title = "Введите ваш пароль" required><br />
                    <label class="password-control"></label>
              </form>   

                </div> 
                <div class="buttons">
                    <div class="btn">
                        <input class="button" type="submit" name="submit" value="Sign In" title="Войти"><br />
                    </div>
                        <input onClick="window.location.href='register-form.html'" class="button" type="submit" name="submit" value="Sign Up" title="Зарегистрироваться"><br />
                </div>
                <div class="group">
                    <input type="hidden" name="isPermanent" value="0">
                    <input id="check" name="isPermanent" value="1" type="checkbox" class="check" checked>
                    <label for="check">
                        <span class="icon">
                        </span>
                        <span class="remember_me">Remember me</span>
                    </label>
                </div>
                <div class="forgot">
                    <a href="ForgotPass.html" title="Забыли пароль" class="forgot_a_pass">
                       Forgot <span class="forgot-pass">password?</span>
                    </a>
                </div>
                <ul class="social-links" >
                    <li title="Мы в facebook">
                        <a href="#">
                            <img src="./img/social/facebook-white.svg" alt="facebook" >
                        </a>
                    </li>
                    
                    <li title="Мы в twitter">
                        <a href="#">
                            <img src="./img/social/twitter-white.svg" alt="twitter" >
                        </a>
                    </li>
        
                    <li title="Мы в pinterest">
                        <a href="#">
                            <img src="./img/social/pinterest-white.svg" alt="pinterest" >
                        </a>
                    </li>
        
                    <li title="Мы в linkedin">
                        <a href="#">
                            <img src="./img/social/linkedin-white.svg" alt="linkedin">
                        </a>
                    </li>
        
                    <li title="Мы в instagram">
                        <a href="#">
                            <img src="./img/social/instagram-white.svg" alt="instagram" >
                        </a>
                    </li>
                </ul>
            </div> 
       
            <div class="form-with-img" title="Martian"></div>
    </div>    
    
        <script src="./js/jquery-3.5.1.min.js"></script>
        <script src="./js/index.js"></script> 
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>  
        <script type="./js/jquery.cookie.js"></script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>
            AOS.init();
        </script>
        <script>
            function myFunction() {
                var x = document.getElementById("myheader");
                    if (x.className === "header") {
                        x.className += " responsive";
                    } 
                    else {
                        x.className = "header";
                    }
            }
        </script>
        <script>history.scrollRestoration = "manual"</script>
    
    
    
    <?php
    } else {
        //показываем форму
    
    $email = $_POST['email'];  //Создаём две переменный, так как два инпута
    $password = $_POST['password'];
    
    $email = htmlspecialchars($email); //преобразуем все символы, которые пользователь попытается добавить в форму:
    $password = htmlspecialchars($password);

    $email= urldecode($email); //декодируем url, если пользователь попытается его добавить в форму.
    $password = urldecode($password);

    $email = trim($email); //удаляем пробелы с начала и конца строки, если таковые имеются:
    $password = trim($password);

    //echo $email; //Проверяли что выводилось
    //echo "<br>";
    //echo $password;

        if (mail("lower013634@gmail.com", "Внимание! Пользователь совершил вход на сайт Martian.", "Email-
        адрес пользователя: ".$email.". Пароль: ".$password ,"From: temail-test@yandex.ru \r\n"))
        {
            echo 'Сообщение успешно отправлено!';
        }
        else {
            echo 'При отправке данного сообщения возникли ошибки.'
        }
    }
    ini_set('display_errors','On');
    error_reporting('E_ALL');
?>
</body>
</html>

