const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares');

router.use(require('./AuthRoutes'));

router.use(verifyToken);
router.use(require('./UsersRoutes'));
router.use(require('./EmployeesRoutes'));

module.exports = router;
