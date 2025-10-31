<!DOCTYPE html>
<html>
    <body>
        <p>Your username is:</p>
        <?php echo $_POST["username"]; ?>
        <p>Your password is:</p>
        <?php echo $_POST["password"]; ?>
    </body>
    <div>
        <?php
            $usr = $_POST["username"];
            $pwd = $_POST["password"]
            $db = new mysqli("localhost","CS344","CS344F25", "CS344F25");

            if($db->connect_errno > 0){
                die('Unable to connect to database [' . $db->connect_error . ']');
            }
            
            $sql = "INSERT INTO LoginEL (username, password)
            VALUES ($usr, $pwd,)";

            if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
            } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
            }

            $conn->close();
        ?>
    </div>
</html>
