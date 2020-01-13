DROP DATABASE IF EXISTS employeesDB;
CREATE database employeesDB;

USE employeesDB;

CREATE TABLE employees (
  employee_id INT(11) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NOT NULL,
  manager_id INT NULL,
  PRIMARY KEY (employee_id)
);

CREATE TABLE roles (
  role_id INT(11) AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,2) NULL,
  department_id INT(4) NOT NULL,
  PRIMARY KEY (role_id)
);

CREATE TABLE departments (
  department_id INT(4) AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(30) NULL,
  PRIMARY KEY (department_id)
);


-- departments input
INSERT INTO departments (department_name)
VALUES ("IT");

INSERT INTO departments (department_name)
VALUES ("Finance");

INSERT INTO departments (department_name)
VALUES ("Human Resource");

INSERT INTO departments (department_name)
VALUES ("Marketing");

INSERT INTO departments (department_name)
VALUES ("Research and development");


-- roles input
INSERT INTO roles (title, salary, department_id)
VALUES ("assembler", 40000, 5);

INSERT INTO roles (title, salary, department_id)
VALUES ("forecaster", 45000, 5);

INSERT INTO roles (title, salary, department_id)
VALUES ("advertisement", 50000, 4);

INSERT INTO roles (title, salary, department_id)
VALUES ("digital", 55000, 4);

INSERT INTO roles (title, salary, department_id)
VALUES ("therapiest", 52000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ("recruiter", 65000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ("trader", 40000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ("analyst", 80000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ("supervisor", 75000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("communication ", 20000, 1);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Natasha", "Romanov", 7, 2);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Steve", "Trevor", 8);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Tony", "Stark", 1, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Clint", "Barton", 9, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Bruce", "Wayne", 2, 2);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Clark", "Kent", 6);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Oliver", "Queen", 10);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Diana", "Prince", 3, 9);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Scott", "Lang", 4, 6);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Logan", "Paul", 5, 6);