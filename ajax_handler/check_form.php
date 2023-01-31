<?php

$login = $_POST['login'];
$password = $_POST['new_password'];
$key = $_POST['key'];

$secret_user_key = 'secretKey';

if ($key != $secret_user_key) {
	echo 'error_key';
} else {
	echo 'success';
}
