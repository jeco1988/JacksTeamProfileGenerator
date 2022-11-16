// using Intern constructor 
const Intern = require('../lib/Intern.js');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Jack', 90, 'jackeconomos0@gmail.com', 'PAC');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Jack', 90, 'jackeconomos0@gmail.com', 'PAC');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Jack', 90, 'jackeconomos0@gmail.com', 'PAC');

    expect(intern.getRole()).toEqual("Intern");
}); 