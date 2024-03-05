<?php

// Connect to the database, and execute a query.
class Database
{
    public $connection;
    public $statement;

    public function __construct($config, $username = 'root', $password = '')
    {
        /* 
            Replaces:
            host=localhost&port=3306&dbname=myapp

            Into:
            host=localhost;port=3306;dbname=myapp
        */
        $dsn = 'mysql:' . http_build_query($config, '', ';');

        // Old version
        // $dsn = "mysql:host={$config['host']};port={$config['port']};dbname={$config['dbname']};charset={$config['charset']}";

        $this->connection = new PDO($dsn, $username, $password, [
            // Default fetch mode return an associative array
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);
    }

    public function query($query, $params = [])
    {
        $this->statement = $this->connection->prepare($query);

        $this->statement->execute($params);

        return $this;
    }

    public function get()
    {
        return $this->statement->fetchAll();
    }

    public function find()
    {
        return $this->statement->fetch();
    }

    public function findOrFail()
    {
        $result = $this->find();

        // The result returns false if the query does not find a record
        if (!$result) {
            abort();
        }

        return $result;
    }
}
