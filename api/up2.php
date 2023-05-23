<?php
if ($_FILES['file'] ['error'] === UPLOAD_ERR_OK ){
    $uploadDir = '/2bimestre/upload/images/';
    $uploadFile = $uploadDir . basename($_FILES['file'] ['name']);

    if (move_uploaded_file($_FILES['file'] ['tmp_name'], $uploadFile)){
        $response['message'] = 'Arquivo enviado com sucesso';
    } else {
        $response['message'] = '[ERRO]';
    }
} else {
    $response['message'] = '[ERRO]';
}

echo json_encode($response);

?>