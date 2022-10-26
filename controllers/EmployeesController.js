const { EmployeesService } = require('../services');
const utils = require('../utils');

module.exports = {
    create: async (req, res) => {
        try {
            const employee = await EmployeesService.create(req.body);
            res.status(201).send(employee);
        } catch(err) {
            console.log('Create', err);
            res.status(404).send({ message: 'Error creating employee', err });
        }
    },
    find: async (req, res) => {
        try {
            const employees = await EmployeesService.find();
            res.status(200).send(employees);
        } catch (err) {
            res.status(404).send({ message: 'Employees not found', err });
        }
    },
    findById: async (req, res) => {},
    findByIdAndUpdate: async (req, res) => {
        const { id } = req.params,
            { body } = req;

        try {
            const employee = await EmployeesService.findById(id);
            const updatedEmployee =  await EmployeesService.update(employee, body);

            const token = {
                id: updatedEmployee.id,
                name: updatedEmployee.name,
                surname: updatedEmployee.surname,
            }
            res.status(200).send({token});
        } catch (err) {
            console.log('Update', err);
            res.status(404).send({ message: 'Error updating employee', err })
        }
    },
    findByIdAndDelete: async (req, res) => {
        const { id } = req.params;
        try {
            const employee = await EmployeesService.delete(id);
            res.status(204).send();
        } catch (err) {
            console.log('Delete', err);
            res.status(404).send({ message: 'Error deleting employee', err });
        }
    },
}