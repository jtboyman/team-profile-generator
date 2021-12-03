const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

function Builder() {
    this.employees = [];
    this.newEmployee;

    Builder.prototype.initializeBuilder = function() {
    
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is the name of the employee?',
            },
            {
                type: 'text',
                name: 'id',
                message: "What is the employee's ID number?",
            },
            {
                type: 'text',
                name: 'email',
                message: "What is the employee's email?",
            },
            {
                type: 'list',
                name: 'role',
                message: "What is the employee's role?",
                choices: [new inquirer.Separator(), "Manager", new inquirer.Separator(), "Engineer", new inquirer.Separator(), "Intern"],
            }
        ])
        .then( (data) => {
            if (data.role === 'Manager') {
                this.newEmployee = new Manager(data.name, data.id, data.email, data.role);
                inquirer
                    .prompt({
                        type: 'text',
                        name: 'officeNumber',
                        message: "What is this manager's office number?",
                    })
                    .then( (data) => {
                        this.newEmployee.officeNumber = data.officeNumber;
                        this.employees.push(this.newEmployee);
                        console.log(this.employees);
                    });
            } else if (data.role === 'Engineer') {
                this.newEmployee = new Engineer(data.name, data.id, data.email, data.role);
                inquirer
                    .prompt({
                        type: 'text',
                        name: 'github',
                        message: "What is this employee's github username?",
                    })
                    .then( (data) => {
                        this.newEmployee.github = data.github;
                        this.employees.push(this.newEmployee);
                        console.log(this.employees);
                    });
            } else if (data.role === 'Intern') {
                this.newEmployee = new Intern(data.name, data.id, data.email, data.role);
                inquirer
                    .prompt({
                        type: 'text',
                        name: 'school',
                        message: "Where does this intern go to school?",
                    })
                    .then( (data) => {
                        this.newEmployee.school = data.school;
                        this.employees.push(this.newEmployee);
                        console.log(this.employees);
                    });
            }
        });
    };
};

module.exports = Builder;