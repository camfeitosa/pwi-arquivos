<?php
    try {
        $pdo = new PDO('mysql:host=localhost;dbname=camila', 'root', '');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo ("Conectado");
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
        echo ("Não conectado");
    }

?>