const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares');

const usersRouter = require('./users');
const employeesRouter = require('./EmployeesRoutes');

router.use(verifyToken);
router.use(require('./EmployeesRoutes'));
router.use('/employees', employeesRouter);

module.exports = router;
