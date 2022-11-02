const { EmployeesService } = require('../services');
const utils = require('../utils');
const jwt = require("jsonwebtoken");

module.exports = {
    create: async (req, res) => {
        try {
            let employee = null;

            if( req.body.id == undefined) {
                employee = await EmployeesService.create(req.body);
            } else {
                const employeeToUpdate = await EmployeesService.findOne({ id: req.body.id });
                employee =  await EmployeesService.update(employeeToUpdate, req.body);
            }
            const token = utils.decodeToken(req.headers.authorization);

            res.status(201).send({ data: employee, token});
        } catch(err) {
            console.log('Create', err);
            res.status(404).send({ message: 'Error creating employee', err });
        }
    },
    find: async (req, res) => {
        try {
            const employees = await EmployeesService.find(),
                token = utils.decodeToken(req.headers.authorization);
            res.status(200).send({ employees, token});
        } catch (err) {
            res.status(404).send({ message: 'Employees not found', err });
        }
    },
    findById: async (req, res) => {
        const { id } = req.params;
        try {
            const employee = await EmployeesService.findById(id);
            res.status(200).send({data: employee, toke: ''});
        } catch (err) {
            res.status(404).send({ message: 'User not found', err });
        }
    },
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
            res.status(200).send({ updatedEmployee, token });
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