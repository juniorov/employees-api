const express = require('express');
const sequelize = require('../database/config');
const { Sequelize, DataTypes } = require('sequelize');
const Employee = require('../models/employees'); // import model employee
const { celebrate, Joi, errors, Segments } = require('celebrate');
const router = express.Router();

/* GET employees listing. */
router.get('/', function(req, res, next) {
    (async () => {
        const employees = await Employee.findAll();
        res.send(employees);
    })();
});

/* POST employees store. */
router.post('/', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.number().integer(),
        name: Joi.string().min(3).required(),
        surname: Joi.string().min(3).required(),
        level: Joi.number().integer(),
        salary: Joi.number().integer(),
    })
}),(req, res, next) => {
    (async () => {
        if(!req.body.id) {
            await sequelize.sync();
            const employee = await Employee.create(req.body);
            res.send({'message': 'not', 'result' : employee.toJSON()});
        }else {
            await sequelize.sync();
            const employee = await Employee.update(req.body, {
                where: {
                    id: req.body.id
                }
            });
            res.send('Employee updated');
        }
    })();
});

/* GET employees show. */
router.get('/:id', function(req, res, next) {
    (async () => {
        const employee = await Employee.findByPk(req.params.id);

        if (employee !== null) {
            res.send(employee);
        } else {
            res.status(404).send();
        }
    })();
});

/* PUT employees update. */
router.put('/:id', function(req, res, next) {
    res.send(req.params);
});

/* GET employees delete. */
router.delete('/:id', function(req, res, next) {
    (async () => {
        await Employee.destroy({
            where: {id: req.params.id }
        });
        res.send();
    })();
});

module.exports = router;