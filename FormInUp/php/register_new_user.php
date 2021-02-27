    <?php
        //проверяем, существуют ли переменные в массиве POST
        if(!isset($_POST['name']) and !isset($_POST['surname'])  and !isset($_POST['email_user']) and !isset($_POST['user_id']) and !isset($_POST['password']))
        {
        
        } 
        else 
        {
            //показываем форму
            $name = $_POST['name'];  //Создаём 5 переменныx, так как 6 инпутов, но один повторяется - пароль
            $surname = $_POST['surname'];
            $email_user = $_POST['email_user']; 
            $user_id = $_POST['user_id'];
            $password = $_POST['password']; 
          
    
            $name = htmlspecialchars($name); //преобразуем все символы, которые пользователь попытается добавить в форму:
            $surname = htmlspecialchars($surname);
            $email_user = htmlspecialchars($email_user);
            $user_id = htmlspecialchars($user_id);
            $password = htmlspecialchars($password);

            $name = urldecode($name); //декодируем url, если пользователь попытается его добавить в форму.
            $surname = urldecode($surname);
            $email_user = urldecode($email_user);
            $user_id = urldecode($user_id);
            $password = urldecode($password);

            $name = trim($name); //удаляем пробелы с начала и конца строки, если таковые имеются:
            $surname = trim($surname);
            $email_user = trim($email_user);
            $user_id = trim($user_id);
            $password = trim($password);


                if (mail("lower013634@gmail.com", "Внимание! Регистрация нового пользователя на сайте Martian.", "Имя пользователя: ". $name . "." . "\r\n" . "Фамилия: " . $surname . "." . "\r\n" . "Email пользователя: " . $email_user . "." . "\r\n" . "Идентификатор пользователя: " . $user_id . "." . "\r\n" . "Пароль: " . $password . "." . "\r\n" . "Подтверждение пароля: " . $password . ".". "\r\n" , "From: mail.temp.test12@gmail.com"))
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
