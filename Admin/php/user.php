<?php 

    require_once 'my_sql_builder.php';

    class User {
        private $username, $password, $re_password;    
    
    
        public function LogIn() {
             $query_builder = new Query_builder();
             $response = $query_builder->$query('SELECT * FROM `users_login` WHERE `Email` = "$username"');
          
            if( === $this->$password) {
                return true;
             }
            else {
                echo "Ошибка"
            }
            }


        public function SignUp() {
            
        }
    
    }


?>