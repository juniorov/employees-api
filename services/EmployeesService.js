const Employee = require('../models/Employees');

module.exports = {
    create: body => {
        const employee = new Employee(body);
        return employee.save();
    },
    find: () => Employee.find(),
    findOne: (filters = {}) => Employee.findOne(filters),
    findById: id => Employee.findById(id),
    update: (employee, body) => employee.updateOne(body),
    delete: id => Employee.deleteOne({'id' : id})
}