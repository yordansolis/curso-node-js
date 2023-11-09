CREATE DATABASE IF NOT EXISTS dbcrud;

use dbcrud;

SHOW dbcrud;

use dbcrud;
CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

use dbcrud;
SHOW TABLES;

DESCRIBE employee;

INSERT INTO  employee ( name, salary ) VALUES(
    'ana', 1000
);

SELECT * FROM employee;

