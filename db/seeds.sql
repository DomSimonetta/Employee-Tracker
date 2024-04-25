INSERT INTO department (department_name)
VALUES ("Accounting"),
       ("HR"),
       ("Sales"),
       ("IT"),
       ("Marketing");

INSERT INTO role (title, salary, department_id)
VALUES ('Head Accountant', 200000, 1),
       ('HR Leader', 90000, 2),
       ('Salesman', 45000, 3),
       ('IT Tech', 40000, 4),
       ('Marketing Manager', 250000, 5);

INSERT INTO employee (employee_db, role_id, department_id)
VALUES ('Kevin Love', 1, 1),
       ('Austin Carr', 2, 2),
       ('Mark Price', 3, 3),
       ('Darius Garland', 4, 4),
       ('Bingo Smith', 5, 5);

