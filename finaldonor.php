<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
        <link rel="stylesheet" href="finaldonor.css">
    <title></title>
</head>

<body>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html"><img id="logo"src="wheat.png" alt=""> अन्नदान</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>

    <h1 id="Welcome">Welcome !!</h1>

    <div id="start">Start Donating By searching a Charitable trust near you</div>
    

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        <div class="input-group">
            <select name="city"class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option > Select charitable trust near you.....</option>
                <option value="agra">Agra</option>
                <option value="chandigarh">chandigarh</option>
                <option value="Jammu">Jammu</option>
                <option value="amritsar">Amritsar</option>
                <option value="ludhiana">Ludhiana</option>
                <option value="Dehradun">Dehradun</option>
                <option value="kernal">Kernal</option>
                <option value="Meerut">Meerut</option>
                <option value ="muradabaad">Muradabaad</option>
                <option value="Lucknow">Lucknow</option>
                <option value="hamirpur">Hamirpur</option>
                <option value="Kanpur">Kanpur</option>
            </select>
            <input type="submit" class="btn btn-outline-light">
        </div>
    </form><br>

    <?php
        $city = "";
        $servername="localhost";
        $username = "root";
        $password = "";
        $dbname = "electrothon";

        $conn = new mysqli($servername, $username, $password, $dbname);
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            $city = $_POST["city"];
        }

        $sql = "SELECT Name, Website, address, phone FROM ngo WHERE City = '". $city."'";
        $result = $conn ->query($sql);
        if ($city ==""){
            echo "";
        }else if($city != "Select charitable trust near you....."){
            if($result ->num_rows>0){
                echo "<table class='table table-dark'> <tr> <th>Name</th> <th>Website</th><th>Address</th><th>Phone no.</th></tr>";
                while($row=$result ->fetch_assoc()){
                    echo "<tr><td>".$row["Name"]."</td><td>".$row["Website"]."</td><td>".$row["address"]."</td><td>".$row["phone"]."</td></tr>";
                }
                echo"</tr></table>";
            
            }else {
                echo "<script>alert('Sorry, There are no charitable trust around you.')</script>";
            }
        }
    ?>

    <div id="Paymentlinks">Want to Buy a Meal for a hungry one? Follow these links:-
        <a href="https://donate.stop-hunger.org/b/mon-don?_cv=1" class="btn btn-outline-light btn-lg">Stop Hunger</a>
        <a href="https://www.riseagainsthunger.org/?form=resolve2022"class="btn btn-outline-light btn-lg">Rise against hunger</a>
        <a href="https://saharvest.org/donate/"class="btn btn-outline-light btn-lg">Saharvest</a>
    </div>
</body>

</html>