<?php
    require_once 'define.php';
    class Query_Builder {
        private $mysqli;


        public function __constract() {
            $this->$mysqli = new mysqli(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
            
            if ($this->$mysqli->connect_error) {
                echo "Не удалось подключится к MYSQL";
            }
        }
    }
?>