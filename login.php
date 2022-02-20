<?php
    $phone = $password  = "";

    if($_SERVER["REQUEST_METHOD"]== "POST"){
        $phone = $_POST["phone"];
        $password = $_POST["password"];
    }
    $servername = "localhost";
    $username = "root";
    $Password = "";
    $dbname = "electrothon";

    $conn = new mysqli($servername, $username, $Password, $dbname);
        $sql = "SELECT Password from donor where Phoneno = '". $phone. "'";
        $result = $conn ->query($sql);

        if($result ->num_rows == 0){
            echo "<script>alert('Username is invalid')</script>";
            $myfile = fopen("login.html", "r") or die("Unable to open file!");
            echo fread($myfile,filesize("login.html"));
            fclose($myfile);
        }else {
            $row = $result ->fetch_assoc();
            if($row["Password"]!= $password){
                echo "<script>alert('Password is invalid')</script>";
                $myfile = fopen("login.html", "r") or die("Unable to open file!");
                echo fread($myfile,filesize("login.html"));
                fclose($myfile);
            }else {
                header("location: finaldonor.php");
            }
        }
?>