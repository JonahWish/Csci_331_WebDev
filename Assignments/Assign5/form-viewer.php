<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Results</title>
    <!-- TODO: We're going to need some styling... -->
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <h1>Form Results</h1>
    <?php
    /* The form submission is collected in a PHP array called $_GET or $_POST */
    echo "<p>Here is the start of a form viewer: a PHP array of name/value pairs.</p>";
    if ($_GET) {
        echo "<h2>GET Array:</h2>";
        print_r($_GET);
        $array = $_GET;
    }
    if ($_POST) {
        echo "<h2>POST Array:</h2>";
        print_r($_POST); 
        $array = $_POST;
    }
    echo "<p>Note the syntax, and try looping the array with <a href='https://www.php.net/manual/en/control-structures.foreach.php'>foreach</a> </p>";

    // foreach ($array as $key => $value) {
    //     echo "Key: $key => Value: $value\n";
    // }
    ?>

    <!-- TODO: Going need a table here: All the key/vaule pairs from the form.   -->

    <?php

    echo "<table border='1'>";
    echo "<tr><th>Field</th><th>Value</th></tr>";

    foreach ($array as $key => $value) {
        if($value != ""){
            echo "<tr>";
            echo "<td>" . htmlspecialchars($key) . "</td>";
            if (is_array($value)) {
                echo "<td>";

                foreach ($value as $item) {
                    echo htmlspecialchars($item) . "<br>";
                }

                echo "</td>";
            } else {
                    echo "<td>$value</td>";
            }
            
            echo "</tr>";

        }

    }

    echo "</table>";
    ?>


</body>

</html>