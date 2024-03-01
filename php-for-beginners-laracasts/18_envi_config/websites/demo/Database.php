<?php

// Connect to the database, and execute a query.
class Database
{
    public $connection;

    public function __construct()
    {
        $config = [
            'host' => 'localhost',
            'port' => 3306,
            'dbname' => 'myapp',
            'charset' => 'utf8mb4'
        ];

        /* 
            Replaces:
            host=localhost&port=3306&dbname=myapp

            Into:
            host=localhost;port=3306;dbname=myapp
        */
        $dsn = 'mysql:' . http_build_query($config, '', ';');

        // Old version
        // $dsn = "mysql:host={$config['host']};port={$config['port']};dbname={$config['dbname']};charset={$config['charset']}";

        $this->connection = new PDO($dsn, 'root', '', [
            // Default fetch mode return an associative array
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);
    }

    public function query($query)
    {
        $statement = $this->connection->prepare($query);

        $statement->execute();

        return $statement;
    }
}
