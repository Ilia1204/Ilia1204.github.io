<?php
        //проверяем, существуют ли переменные в массиве POST, т.е. если они не существуют в массиве ( ! )
        if(!isset($_POST['email']) and !isset($_POST['password'])) 
        {
         return false;
        } 
        else 
        {
            $salt = "some random string"; //Некоторые текст для более надёжного хэширования пароля 
            
            $host = 'localhost'; // адрес сервера 
            $database = 'users'; // имя базы данных
            $user = 'root'; // имя пользователя
            $password1 = 'root'; // пароль
            $table = 'users_login'; //название таблицы
                                                                                                            
            $email = $_POST['email'];  //Создаём три переменные, несмотря на то что, 2 инпута, 2 пароль нужен для отправки не хэшированного пароля пользователю!
            $password = $_POST['password'];
            $password2 = $_POST['password'];

            $email = $_REQUEST['email'];  //Отправляем данные в базу данных
            $password = $_REQUEST['password'];

            $email = htmlspecialchars($email); //преобразуем все символы, которые пользователь попытается добавить в форму:
            $password = htmlspecialchars($password);
            $password2 = htmlspecialchars($password2);
           
            $email= urldecode($email); //декодируем url, если пользователь попытается его добавить в форму.
            $password = urldecode($password);
            $password2 = urldecode($password2);
            
            $email = trim($email); //удаляем пробелы с начала и конца строки, если таковые имеются:
            $password = trim($password);
            $password2 = trim($password2);
            
            //echo $email; //Проверяли что выводилось
            //echo "<br>";
            //echo $password;

            try {
                    //Хэшируем пароль, не дай бог почту или бд взломают(утечка данных)
                    $password = md5($salt.$password);
                    // Подключение к базе данных
                    $db = new PDO("mysql:host=$host;dbname=$database", $user, $password1);
                    // Устанавливаем корректную кодировку
                    $db->exec("set names utf8");
                    // Собираем данные для запроса
                    $data = array('email' => $email, 'password' => $password); 
                    // Подготавливаем SQL-запрос
                    $query = $db->prepare("INSERT INTO `$table` (`id`, `Email`, `Password`) VALUES (NULL, '$email', '$password');");
                    // Выполняем запрос с данными
                    $query->execute($data);
                    // Запишим в переменую, что запрос отработал
                    $result = true;
                } catch (PDOException $e) {
                    // Если есть ошибка соединения или выполнения запроса, выводим её
                    print "Ошибка!: " . $e->getMessage() . "<br/>";
                }
                
                if ($result === true) {
                    echo "Информация занесена в базу данных. " . "<br/>";
                }
              





                //Отправляем письмо на наш емэйл
                if (mail("lower013634@gmail.com", "Внимание! Пользователь совершил вход на сайт Martian.", "Email пользователя: ". $email . "." . "\r\n" . "Пароль: ". $password . "." ,"From: mail.temp.test12@gmail.com"))
                {
                    echo 'Вы успешно Авторизовались!' . "\r\n";
                }
                else {
                    echo 'При отправке данного сообщения возникли ошибки.';
                }
                
                
                //Отправляем письмо на емэйл пользователя, но пароль пользователю отправляем не хэшируемый!
                if (mail($email, "Вы успешно авторизовались на сайте Martian.", "Ваш Email: ". $email . "." . "\r\n" . "Пароль: ". $password2 . ".". "\r\n" . "\r\n" . "Если это были не вы, рекомендуем вам сменить пароль.", "From: mail.temp.test12@gmail.com"))
                {
                    echo 'Проверьте письмо с авторизацией.';
                }
                else {
                    echo 'При отправке данного письма возникли ошибки.';
                }

        }  
            ini_set('display_errors','On');
            error_reporting('E_ALL');
?>
