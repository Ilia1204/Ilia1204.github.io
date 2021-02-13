<?php
  echo $_POST;
  
  var_dump(1,"txt",$_POST) ;
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
            <input type= "text" name = "age">
            <input type="submit" value="Отправить">
    </form>
    
<?php
  $log = "Login";
  $Pass = "Pass";
  
  if($_SERVER['REQUEST METHOD'] == 'POST') {
    echo $_POST['name']; 
    echo $_POST['age'];  
  }
  
  var_dump($_POST['name'], (int)$_POST['age'] + 10) ;

?>
</body>
</html>

