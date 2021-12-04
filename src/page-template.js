const fs = require('fs');

//create employee cards
const generatePage = (employeesArray) => {
    console.log("We did it bois", employeesArray);
    let employeeData = `
    <section>
        <h2>Employee cards</h2>
        <div>
        ${employeesArray
            .filter(({ role }) => {
                return role === "Manager"
            })
            .map(({ name, id, email, role, officeNumber }) => {
                return `
            <div> ${name} ${id} ${email} ${role} ${officeNumber}</div>
            `;
            })
            .join('')}
        </div>
    </section>`
    //do it again and again :(

    // constant file data = array w render
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