<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    require_once 'connection.php'; 
 
  
    $link = mysqli_connect($host, $user, $password, $database) 
        or die("Ошибка " . mysqli_error($link));
    
        $query ="SELECT * FROM users";
 
        $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
        
        if($result)
        {
            $rows = mysqli_num_rows($result); // количество полученных строк
             
            echo "<table><tr><th>Name_user</th><th>Surname_user</th><th>Email_user</th><th>Id_user</th><th>Password_user</th><th>Con_password_user</th></tr>";
            for ($i = 0 ; $i < $rows ; ++$i)
            {
                $row = mysqli_fetch_row($result);
                echo "<tr>";
                    for ($j = 0 ; $j < 7 ; ++$j) echo "<td>$row[$j]</td>";
                echo "</tr>";
            }
            echo "</table>";
             
            // очищаем результат
            mysqli_free_result($result);
        }
         
    
     mysqli_close($link);
?>
</body>
</html>




