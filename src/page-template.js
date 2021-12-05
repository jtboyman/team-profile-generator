const fs = require('fs');

//create employee cards
const generatePage = (employeesArray) => {
    let employeeData = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Our Development Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div>
                <h1 class="header-text bg-success text-white">Our Development Team</h1>
            </div>
        </header>

        <main class="container">
            <div class="row justify-content-center">
                <section class="col">
                    <h2 class="header-text">Managers</h2>
                    <div>
                    ${employeesArray
                        .filter(({ role }) => {
                            return role === "Manager"
                        })
                        .map(({ name, id, email, role, officeNumber }) => {
                            return `
                        <div class="card">
                            <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${id}</li>
                                <li class="list-group-item">email: <a href="mailto:${email}">${email}</a></li>
                                <li class="list-group-item">Office Number: ${officeNumber}</li>
                            </ul>
                        </div>
                        `;
                        })
                        .join('')}
                    </div>
                </section>
                <section class="col">
                    <h2 class="header-text">Engineers</h2>
                    <div>
                    ${employeesArray
                        .filter(({ role }) => {
                            return role === "Engineer"
                        })
                        .map(({ name, id, email, role, github }) => {
                            return `
                            <div class="card">
                            <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${id}</li>
                                <li class="list-group-item">email: <a href="mailto:${email}">${email}</a></li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/${github}">${github}</a></li>
                            </ul>
                        </div>
                        `;
                        })
                        .join('')}
                    </div>
                </section>
                <section class="col">
                    <h2 class="header-text">Interns</h2>
                    <div>
                    ${employeesArray
                        .filter(({ role }) => {
                            return role === "Intern"
                        })
                        .map(({ name, id, email, role, school }) => {
                            return `
                            <div class="card">
                            <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${id}</li>
                                <li class="list-group-item">email: <a href="mailto:${email}">${email}</a></li>
                                <li class="list-group-item">School: ${school}</li>
                            </ul>
                        </div>
                        `;
                        })
                        .join('')}
                    </div>
                </section>
            </div>
        </main>
    </body>
    </html>
    `
    writeFile(employeeData);
};

//export full html builder using the create employee card gen functions
const writeFile = fileContent => {
    fs.writeFile("./dist/index.html", fileContent, err => {
        if (err) {
            reject(err);
            return;
        }

        console.log("Team Profile Created!");
    });

    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
            reject(err);
            return;
        }

        console.log("Team Profile Formatted!");
    });
}

module.exports = generatePage;