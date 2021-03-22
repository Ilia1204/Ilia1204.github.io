<?php
        //require 'connection.php';


        //проверяем, существуют ли переменные в массиве POST, т.е. если они не существуют в массиве ( ! )
        if(!isset($_POST['name']) and !isset($_POST['surname'])  and !isset($_POST['email_user']) and !isset($_POST['user_id']) and !isset($_POST['password']))
        {
        
        } 
        else  
        {
            /* $sql1 = "SELECT * FROM users WHERE `id_string`= '$user_id'";
                $query1 = $pdo->prepare($sql1);
                $query1->execute([$user_id]);
                $user1= $query1->fetch();
                if ($user1) { 
                    echo "Ошибка! Пользователь с таким идентификатором уже зарегистрирован в системе."
                } else {
                    // твой код на вставку
            } */

            $salt = "Some random string";

            $host = 'localhost'; // адрес сервера 
            $database = 'users'; // имя базы данных
            $user = 'root'; // имя пользователя
            $password1 = 'root'; // пароль
            $table = 'users_register'; //название таблицы


            //показываем форму
            $name = $_POST['name'];  //Создаём 5 переменныx, так как 6 инпутов, но один повторяется - пароль
            $surname = $_POST['surname'];
            $email_user = $_POST['email_user']; 
            $user_id = $_POST['user_id'];
            $password = $_POST['password']; 
            $password2 = $_POST['password'];


            $name = $_REQUEST['name'];  //Создаём 5 переменныx, так как 6 инпутов, но один повторяется - пароль
            $surname = $_REQUEST['surname']; // Отправляем в бд данные
            $email_user = $_REQUEST['email_user']; 
            $user_id = $_REQUEST['user_id'];
            $password = $_REQUEST['password']; 

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

               try {
                        $password = md5($salt.$password);
                        // Подключение к базе данных
                        $db = new PDO("mysql:host=$host;dbname=$database", $user, $password1);
                        // Устанавливаем корректную кодировку
                        $db->exec("set names utf8");
                        // Собираем данные для запроса
                        $data = array( 'name' => $name, 'surname' => $surname, 'email_user' => $email_user, 'user_id' => $user_id, 'password' => $password); 
                        // Подготавливаем SQL-запрос
                        $query = $db->prepare("INSERT INTO `users_register` (`id`, `name`, `surname`, `email`, `id_string`, `pass`, `con_pass`) VALUES (NULL, '$name', '$surname', '$email_user', '$user_id', '$password', '$password');");
                        // Выполняем запрос с данными
                        $query->execute($data);
                        // Запишим в переменую, что запрос отработал
                        $result = true;
                    } catch (PDOException $e) {
                        // Если есть ошибка соединения или выполнения запроса, выводим её
                        print "Ошибка!: " . $e->getMessage() . "<br/>";
                    }
                    
                    if ($result) {
                        echo "Информация занесена в базу данных. " . "<br/>";
                    }


                    if (mail("lower013634@gmail.com", "Внимание! Регистрация нового пользователя на сайте Martian.", "Имя пользователя: ". $name . "." . "\r\n" . "Фамилия: " . $surname . "." . "\r\n" . "Email пользователя: " . $email_user . "." . "\r\n" . "Идентификатор пользователя: " . $user_id . "." . "\r\n" . "Пароль: " . $password . "." . "\r\n" . "Подтверждение пароля: " . $password . ".". "\r\n" , "From: mail.temp.test12@gmail.com"))
                    {
                        echo 'Вы успешно зарегистрировались! Подтвердите пожалуйста вашу почту: ' . $email_user . "." . "<br />";
                    }
                    else {
                        echo ' При отправке данного сообщения возникли ошибки.';
                    }
                  
                    //Отправляем письмо на емэйл пользователя, но пароль пользователю отправляем не хэшируемый!
                    if (mail($email_user, "Вы успешно зарегистрировались на сайте Martian.", "Ваш Email: ". $email_user . "." . "\r\n" . "Пароль: ". $password2 . ".". "\r\n" . "\r\n" . "Если это были не вы, рекомендуем вам сменить пароль.", "From: mail.temp.test12@gmail.com"))
                    {
                        echo 'Проверьте письмо с регистрацией!.';
                    }
                    else {
                        echo 'При отправке данного письма возникли ошибки.';
                    }
        }    
            ini_set('display_errors','On'); //показываем все ошибки, если они будут.
            error_reporting('E_ALL');
?>
