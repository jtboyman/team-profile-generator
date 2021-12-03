const Employee = require('../lib/Employee.js');

test('create employee object', () => {
    const employee = new Employee('Hlaing', '123', 'hello@gmail.com', 'Manager');

    expect(employee.name).toBe('Hlaing');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('hello@gmail.com');
    expect(employee.role).toBe('Manager');
});

test('gets the employee name', () => {
    const employee = new Employee('Hlaing', '123', 'hello@gmail.com', 'Manager');

    expect(employee.getName()).toEqual(expect.stringContaining('Hlaing'));
});

test('gets the id of the employee', () => {
    const employee = new Employee('Hlaing', '123', 'hello@gmail.com', 'Manager');

    expect(employee.getId()).toEqual(expect.stringContaining('123'));
});

test('gets the employee email', () => {
    const employee = new Employee('Hlaing', '123', 'hello@gmail.com', 'Manager');

    expect(employee.getEmail()).toEqual(expect.stringContaining('hello@gmail.com'))
});

test('gets the employee role', () => {
    const employee = new Employee('Hlaing', '123', 'hello@gmail.com', 'Manager');

    expect(employee.getRole()).toEqual(expect.stringContaining('Manager'))
});