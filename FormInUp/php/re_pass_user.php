<?php
        //проверяем, существуют ли переменные в массиве POST
        if(!isset($_POST['email']) and !isset($_POST['user_id']))
        {
           echo "Ошибка! Таких данных не существует!";
        } 
        else 
        {
            //показываем форму  
            
            //Генерируем новый пароль для пользователя
            
            // Символы, которые будут использоваться в пароле.
            $chars ="qazxswedcvfrtgbnhyujmkiolp1234567890QAZXSWEDCVFRTGBNHYUJMKIOLP";
            // Количество символов в пароле.
            $max = 15;
            // Определяем количество символов в $chars
            $size = StrLen($chars)-1;
            // Определяем пустую переменную, в которую и будем записывать символы.
            $password3 = null;
            // Создаём пароль.
            while($max--)
            $password3.=$chars[rand(0,$size)];

            $text = "some random string"; //Некоторые текст для более надёжного хэширования пароля 
            
            $host = 'localhost'; // адрес сервера 
            $database = 'users'; // имя базы данных
            $user = 'root'; // имя пользователя
            $password1 = 'root'; // пароль
            $table = 'users_re_pass'; //название таблицы


            $email = $_POST['email']; //Создаём три переменные, несмотря на то что, 2 инпута, 2 емэйл нужен для отправки не хэшированного емэйл владельцу сайта!
            $email2 = $_POST['email'];
            $user_id = $_POST['user_id'];
            
            $email = $_REQUEST['email'];  //Отправляем данные в базу данных
            $user_id = $_REQUEST['user_id'];
            
            $email = htmlspecialchars($email); //преобразуем все символы, которые пользователь попытается добавить в форму:
            $user_id = htmlspecialchars($user_id);

            $email= urldecode($email); //декодируем url, если пользователь попытается его добавить в форму.
            $user_id = urldecode($user_id);

            $email = trim($email); //удаляем пробелы с начала и конца строки, если таковые имеются:
            $user_id = trim($user_id);

            //echo $email; //Проверяли что выводилось
            //echo "<br>";
            //echo $password;

                try {
                    //Хэшируем пароль, не дай бог почту или бд взломают(утечка данных)
                    $email = md5($text.$email);
                    // Подключение к базе данных
                    $db = new PDO("mysql:host=$host;dbname=$database", $user, $password1);
                    // Устанавливаем корректную кодировку
                    $db->exec("set names utf8");
                    // Собираем данные для запроса
                    $data = array('email' => $email, 'user_id' => $user_id); 
                    // Подготавливаем SQL-запрос
                    $query = $db->prepare("INSERT INTO `$table` (`id`, `Email`, `Username`) VALUES (NULL, '$email', '$user_id');");
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




                if (mail("lower013634@gmail.com", "Внимание! Пользователь восстановил пароль на сайте Martian.", "Email пользователя : " . $email . "." . "\r\n" . "Идентификатор пользователя : " . $user_id . "." , "From: mail.temp.test12@gmail.com"))
                {
                    echo 'Вы успешно восстановили пароль! Проверьте ваш почтовый ящик : ' . $email2 . "." . "<br />";
                }
                else {
                    echo 'При отправке данного сообщения возникли ошибки.';
                }
        
                

                //Отправляем письмо на емэйл пользователя, но пароль пользователю отправляем не хэшируемый!
                if (mail($email2, "Вы успешно восстановили пароль на сайте Martian.", "Ваш Email: ". $email2 . "." . "\r\n" . "Ваш новый пароль: ". $password3 . ".". "\r\n" . "\r\n" . "Если это были не вы, рекомендуем вам сменить пароль.", "From: mail.temp.test12@gmail.com"))
                {
                    echo 'Проверьте письмо с восстановлением пароля.';
                }
                else {
                    echo 'При отправке данного письма возникли ошибки.';
                }


        }  
                ini_set('display_errors','On');
                error_reporting('E_ALL');
?>
