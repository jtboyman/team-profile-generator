const Engineer = require('./Employee');


/* maybe need this not sure
function Builder() {
    this.employee;
    
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
        .then( ({name}, {id}, {email}, {role}) => {
            this.employee = new Manager (name, id, email, role);
        });
};*/