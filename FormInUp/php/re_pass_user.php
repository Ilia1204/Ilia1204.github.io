    <?php
        //проверяем, существуют ли переменные в массиве POST
        if(!isset($_POST['email']) and !isset($_POST['user_id']))
        {
        
        } 
        else 
        {
            //показываем форму
            $email = $_POST['email'];  //Создаём две переменный, так как два инпута
            $user_id = $_POST['user_id'];
            
            $email = htmlspecialchars($email); //преобразуем все символы, которые пользователь попытается добавить в форму:
            $user_id = htmlspecialchars($user_id);

            $email= urldecode($email); //декодируем url, если пользователь попытается его добавить в форму.
            $user_id = urldecode($user_id);

            $email = trim($email); //удаляем пробелы с начала и конца строки, если таковые имеются:
            $user_id = trim($user_id);

            //echo $email; //Проверяли что выводилось
            //echo "<br>";
            //echo $password;

                if (mail("lower013634@gmail.com", "Внимание! Пользователь восстановил пароль на сайте Martian.", "Email пользователя : " . $email . "." . "\r\n" . "Идентификатор пользователя : " . $user_id . "." , "From: mail.temp.test12@gmail.com"))
                {
                    echo 'Вы успешно восстановили пароль! Проверьте ваш почтовый ящик : ' . $email . ".";
                }
                else {
                    echo 'При отправке данного сообщения возникли ошибки.';
                }
              }  
                ini_set('display_errors','On');
                error_reporting('E_ALL');
?>
