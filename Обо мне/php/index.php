<?php
  
  
  echo $_POST;
  
  $count = 5; /*создание переменных */
  
  echo "count = ", $count, "!", "http://php/" . "index.html"; /*переменные,  склеивание строк*/
 
  echo '<h1>Hello world!</h1>' , 124141424, '2144124'; /* вывод текста*/
  
  if ($count == 5) {
    echo "Yes";
  }
  else  {
    echo "No";
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action = "index.php" method = "post">
            <input type= "text" name = "name">
            <input type="submit" value="Отправиь">
    </form>
</body>
</html>


