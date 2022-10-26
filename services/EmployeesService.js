const Employee = require('../models/Employee');

module.exports = {
    create: body => {
        const employee = new Employee(body);
        return employee.save();
    },
    find: () => { Employee.find() },
    findById: id => Employee.findById(id),
    update: (employee, body) => {
        Object.assign(employee, body);
        return employee.save();
    },
    delete: id => Employee.deleteOne({'id' : id})
}