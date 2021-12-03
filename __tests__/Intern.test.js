const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('Hlaing', '123', 'hello@gmail.com', 'intern', 'Harvard');

    expect(intern.name).toBe('Hlaing');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('hello@gmail.com');
    expect(intern.role).toBe('intern');
    expect(intern.school).toBe('Harvard');
});

test('gets the employee school', () => {
    const intern = new Intern('Hlaing', '123', 'hello@gmail.com', 'intern', 'Harvard');

    expect(intern.getSchool()).toEqual(expect.stringContaining('Harvard'));
});