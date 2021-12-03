const Manager = require('../lib/Manager');

test('create Manager object', () => {
    const manager = new Manager('Hlaing', '123', 'hello@gmail.com', 'Manager', '23');

    expect(manager.name).toBe('Hlaing');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('hello@gmail.com');
    expect(manager.role).toBe('Manager');
    expect(manager.officeNumber).toBe('23');
});

test('gets the employee github username', () => {
    const manager = new Manager('Hlaing', '123', 'hello@gmail.com', 'Manager', '23');

    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining('23'));
});