<?php
    $name = $EmailID = $Password= "";
    $phone ="";

    if($_SERVER["REQUEST_METHOD"]== "POST"){
        $name = $_POST["name"];
        $phone = $_POST["phoneno"];
        $EmailID = $_POST["emailid"];
        $Password = $_POST["password"];
    }

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "electrothon";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if($conn ->connect_error) {
        die("Connection failed: ". $conn -> connect_error);
    }

    $sql = "INSERT INTO donor(Name, Phoneno, Email, Password) VALUES ('". $name."',". $phone.",'".$EmailID."','".$Password."')";

    if($conn ->query($sql)==TRUE){
    }else {
        echo "ERROR: ".$sql."<br>".$conn ->error;
    }

    $conn -> close();

    $myfile = fopen("login.html", "r") or die("Unable to open file!");
    echo fread($myfile,filesize("login.html"));
    fclose($myfile);
?>