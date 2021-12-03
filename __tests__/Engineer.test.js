const Engineer = require('../lib/Engineer');

test('create engineer object', () => {
    const engineer = new Engineer('Hlaing', '123', 'hello@gmail.com', 'Engineer', 'myUsername');

    expect(engineer.name).toBe('Hlaing');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('hello@gmail.com');
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toBe('myUsername');
});

test('gets the employee github username', () => {
    const engineer = new Engineer('Hlaing', '123', 'hello@gmail.com', 'Engineer', 'myUsername');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('myUsername'));
});