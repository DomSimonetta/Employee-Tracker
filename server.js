const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app =express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

function promptQuestions() {
    inquirer.prompt(
        {
            type: 'list',
            message: 'select one of the following',
            name: 'Options',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'and update an employee role']
        }
    )
}
.then((answer) => {
    if(answer.Options == 'view all departments')
    db.query('SELECT * FROM departments', 
    function (err, res) {
        console.table(res)
        if (err) throw err
        promptQuestions();
    })
} else if(answer.Options == 'view all roles') {
    db.query('SELECT * FROM roles',
    function (err, res) {
        console.table(res)
        if (err) throw err
        promptQuestions();
    })
} else if(answer.Options == 'view all employees') {
    db.query('SELECT * FROM employees',
    function (err, res) {
        console.table(res)
        if (err) throw err
        promptQuestions();
    })
}  else if(answer.Options == 'add a department') {
    inquirer.prompt({
        type: 'input',
        message: 'What would you like to call the new department?',
        name: 'Department'
    })
    .then((answer) => {
        const sql = 'INSERT INTO department (department_name) VALUES (`${answer.department}`)';
        console.table(res)
        if (err) throw err
        promptQuestions();
    })
} else if(answer.Options == 'add a role') {
    inquirer.prompt({
        type: 'input',
        message: 'What would you like to call the new role?',
        name: 'Role'
    })
    .then((answer) => {
        const sql = 'INSERT INTO role (role_name) VALUES (`${answer.role}`)';
        console.table(res)
        if (err) throw err
        promptQuestions();
    })
} else if(answer.Options == 'add an employee') {
    inquirer.prompt({
        type: 'input',
        message: 'What is the new employees name?',
        name: 'Name'
    })
    .then((answer) => {
        const sql = 'INSERT INTO name (employee_name) VALUES (`${answer.employee}`)';
        console.table(res)
        if (err) throw err
        promptQuestions();
    })
}

promptQuestions()