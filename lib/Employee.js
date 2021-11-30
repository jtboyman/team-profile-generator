const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getBasicInfo() {
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
            ])
            .then( function({name}, {id}, {email}) {
                return basicInfo = [name, id, email]
            });
    };
};

module.exports = Employee;