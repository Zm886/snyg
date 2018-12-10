<?php
$a = $_POST["username"];
$b = $_POST["password"];
$arr = array("志玲", "柳岩", "王菲");
$arr2 = array("志玲" => "123", "柳岩" => "123", "王菲" => "123");
if (in_array($a, $arr)) {
    if ($arr2[$a] == $b) {
        echo '{"code":2}';
    } else {
        echo '{"code":1}';
    }
} else {
    echo '{"code":0}';
}
?>
