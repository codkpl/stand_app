<?php

    // Подключение к базе данных (mysqli_connect)
    $connect = mysqli_connect('localhost','root','root','vkminigame');

    // Отправляем запрос к базе данных, на получение списка продуктов
    $query = 'SELECT * FROM users WHERE vkid="'.$vkid.'"';
    $result = mysqli_query($query) or die('Запрос не удался: ' . mysql_error());

    // Тут будем хранить список продуктов
    $users = [];

        // Вносим все продукты из БД в переменную
    while($row = mysqli_fetch_assoc($result)) {
        $users[] = $row;
    }

    // Возвращаем JSON со списоком продуктов
    echo json_encode($users);

?>