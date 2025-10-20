<?php
    echo '<h1>PHP File open, read, and close</h1>';

    $myFile = fopen("cs344.txt", "r") or die("Died for some reason.... V_V</body>
    </html>");
    echo "\n";

    $newline = fgets($myfile):
    while($newline !== false){
        echo "<p>" . newline . "</p>";
        $newline = fgets($myfile);
    }

    //echo fread($myfile, filesize("cs344.txt"));
    fclose($myfile);
?>