const { EmployeesService } = require('../services');
const utils = require('../utils');
const jwt = require("jsonwebtoken");

module.exports = {
    create: async (req, res) => {
        try {
            let employee = null;

            if( req.body.id == undefined) {
                utils.writeLogs('Info', 'Creating employee');
                employee = await EmployeesService.create(req.body);
            } else {
                const employeeToUpdate = await EmployeesService.findOne({ id: req.body.id });
                employee =  await EmployeesService.update(employeeToUpdate, req.body);
                utils.writeLogs('Info', 'Updating employee');
            }
            const token = utils.decodeToken(req.headers.authorization);

            res.status(201).send({ data: employee, token});
        } catch(err) {
            utils.writeLogs('Err', 'Error creating employee' + err);
            res.status(404).send({ message: 'Error creating employee', err });
        }
    },
    find: async (req, res) => {
        try {
            const employees = await EmployeesService.find(),
                token = utils.decodeToken(req.headers.authorization);
            utils.writeLogs('Info', 'Get all employees');
            res.status(200).send({ employees, token});
        } catch (err) {
            utils.writeLogs('Err', err);
            res.status(404).send({ message: 'Employees not found', err });
        }
    },
    findById: async (req, res) => {
        const { id } = req.params;
        try {
            const employee = await EmployeesService.findById(id);
            utils.writeLogs('Info', 'Find employee by id');
            res.status(200).send({data: employee, toke: ''});
        } catch (err) {
            utils.writeLogs('Err', 'Employee not found' + err);
            res.status(404).send({ message: 'Employee not found', err });
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
            utils.writeLogs('Info', 'Find and update employee');
            res.status(200).send({ updatedEmployee, token });
        } catch (err) {
            utils.writeLogs('Info', 'Error updating employee' + err);
            res.status(404).send({ message: 'Error updating employee', err })
        }
    },
    findByIdAndDelete: async (req, res) => {
        const { id } = req.params;
        try {
            const employee = await EmployeesService.delete(id);
            utils.writeLogs('Info', 'Delete employee');
            res.status(204).send();
        } catch (err) {
            utils.writeLogs('Info', 'Error deleting employee' + err);
            res.status(404).send({ message: 'Error deleting employee', err });
        }
    },
}