const express = require('express');
const router = express.Router();
const { EmployeesController } = require('../controllers');
const { EmployeesValidator } = require('../validators');



/* GET show all employees. */
router.get('/employees', EmployeesController.find);

/* POST create an employee. */
router.post('/employees', EmployeesValidator.create, EmployeesController.create);

/* GET show an employee. */
router.get('/employees/:id', EmployeesController.findById);

/* PUT update an employee. */
router.put('/employees/:id', EmployeesController.findByIdAndUpdate);

/* DELETE remove an employee. */
router.delete('/employees/:id', EmployeesController.findByIdAndUpdate);

module.exports = router;