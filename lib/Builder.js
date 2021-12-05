const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const generatePage = require('../src/page-template') //the template for the html page created by js

function Builder() {
    if (!this.employees) {
        this.employees = [];
    }
    this.newEmployee;

    const promptInfo = () => {
    
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'What is the name of the employee?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter employee name!');
                        return false;
                    }
                },
            },
            {
                type: 'text',
                name: 'id',
                message: "What is the employee's ID number?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter employee id!');
                        return false;
                    }
                },
            },
            {
                type: 'text',
                name: 'email',
                message: "What is the employee's email?",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter empployee email!');
                        return false;
                    }
                },
            },
            {
                type: 'list',
                name: 'role',
                message: "What is the employee's role?",
                choices: [new inquirer.Separator(), "Manager", new inquirer.Separator(), "Engineer", new inquirer.Separator(), "Intern"],
            }
        ])
        .then( data => {
            if (data.role === 'Manager') {
                this.newEmployee = new Manager(data.name, data.id, data.email, data.role);
                inquirer
                    .prompt([
                        {
                            type: 'text',
                            name: 'officeNumber',
                            message: "What is this manager's office number?",
                            validate: officeInput => {
                                if (officeInput) {
                                    return true;
                                } else {
                                    console.log('Please enter the office number!');
                                    return false;
                                }
                            },
                        },
                        {
                            type: 'confirm',
                            name: 'confirmAddEmployee',
                            message: "Would you like to add another employee?",
                            default: false,
                        },
                    ])
                    .then( data => {
                        this.newEmployee.officeNumber = data.officeNumber;
                        this.employees.push(this.newEmployee);
                        console.log(this.employees);
                        if (data.confirmAddEmployee) {
                            promptInfo();
                        } else {
                            generatePage(this.employees);
                        }
                    });
            } else if (data.role === 'Engineer') {
                this.newEmployee = new Engineer(data.name, data.id, data.email, data.role);
                inquirer
                    .prompt([
                        {
                            type: 'text',
                            name: 'github',
                            message: "What is this employee's github username?",
                            validate: githubInput => {
                                if (githubInput) {
                                    return true;
                                } else {
                                    console.log('Please enter a GitHub username!');
                                    return false;
                                }
                            },
                        },
                        {
                            type: 'confirm',
                            name: 'confirmAddEmployee',
                            message: "Would you like to add another employee?",
                            default: false,
                        },
                    ])
                    .then( data => {
                        this.newEmployee.github = data.github;
                        this.employees.push(this.newEmployee);
                        console.log(this.employees);
                        if (data.confirmAddEmployee) {
                            promptInfo();
                        } else {
                            generatePage(this.employees);
                        }
                    });
            } else if (data.role === 'Intern') {
                this.newEmployee = new Intern(data.name, data.id, data.email, data.role);
                inquirer
                    .prompt([
                        {
                            type: 'text',
                            name: 'school',
                            message: "Where does this intern go to school?",
                            validate: schoolInput => {
                                if (schoolInput) {
                                    return true;
                                } else {
                                    console.log('Please enter a school!');
                                    return false;
                                }
                            },
                        },
                        {
                            type: 'confirm',
                            name: 'confirmAddEmployee',
                            message: "Would you like to add another employee?",
                            default: false,
                        },
                    ])
                    .then( data => {
                        this.newEmployee.school = data.school;
                        this.employees.push(this.newEmployee);
                        console.log(this.employees);
                        if (data.confirmAddEmployee) {
                            promptInfo();
                        } else {
                            generatePage(this.employees);
                        }
                    });
            }
        });
    };
    promptInfo();
};

module.exports = Builder;