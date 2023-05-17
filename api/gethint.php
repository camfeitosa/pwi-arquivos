<?php
// array

$a[] = "Lucifer";
$a[] = "You";
$a[] = "Friends";
$a[] = "Euphoria";
$a[] = "Loki";
$a[] = "Loki";
$a[] = "All of us are dead";
$a[] = "The idol";
$a[] = "The umbrella academy";
$a[] = "The walking dead";
$a[] = "Alice in borderland";
$a[] = "The Politician";
$a[] = "How I Met Your Mother";

$q = $_REQUEST["q"];

$hint = "";

if($q !== ""){
    $q = strtolower($q);
    $len=strlen($q);
    foreach($a as $name){
        if(stristr($q, substr($name, 0, $len))){
            if($hint == ""){
                $hint = $name;
            } else {
                $hint .= ", $name";
                }
            }
        }
    }



    echo $hint == "" ? "Sem sugestão" : $hint;
?>