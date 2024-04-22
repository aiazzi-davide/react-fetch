<?php
require __DIR__ . '/../vendor/autoload.php';
class db{
    const host = 'localhost';
    const user = 'root';
    const password = 'ciccio';
    const database = 'scuola';

    public static function connect(){
        $mysqli_connection = new MySQLi(self::host, self::user, self::password, self::database);
        if ($mysqli_connection->connect_error) {
            die('Connect Error (' . $mysqli_connection->connect_errno . ') '
                . $mysqli_connection->connect_error);
        }
        return $mysqli_connection;
    }
}