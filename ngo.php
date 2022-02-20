<?php
    $namecharity=$name= $Website = $EmailID = $Password=$address =  $city = "";
    $phone ="";

    if($_SERVER["REQUEST_METHOD"]== "POST"){
        $name = $_POST["name"];
        $phone = $_POST["phoneno"];
        $EmailID = $_POST["emailid"];
        $Website = $_POST["website"];
        $address = $_POST["address"];
        $city = $_POST["city"];
    }

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "electrothon";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if($conn ->connect_error) {
        die("Connection failed: ". $conn -> connect_error);
    }

    $sql = "INSERT INTO ngo(Name, Phone, Email,Website, address, City) VALUES ('". $name."','". $phone."','".$EmailID."','".$Website."','".$address."','".$city."')";

    if($conn ->query($sql)===TRUE){
        echo "<html><body><script>alert('Thank you for Registering. as soon as any donor in your location want to donate. we will give your information😊.');</script></body></html>";
        header("Location: index.html");
        
    }else {
        header("Location: login.html");
    }

    $conn -> close();

    $myfile = fopen("thankyou.html", "r") or die("Unable to open file!");
    echo fread($myfile,filesize("thankyou.html"));
    fclose($myfile);
?>