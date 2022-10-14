var express = require('express');
const { Sequelize } = require('sequelize');
var router = express.Router();
// ID, name, surname, level and salary.
// Name and surname are strings,
// ID, level and salary are numeric.

/* GET employees listing. */
router.get('/', function(req, res, next) {
    res.send([{ id: 1, name: "junior"}, { id:2, name: 'Jonathan'}]);
});

/* POST employees store. */
router.post('/', function(req, res, next) {
    // req.body
    res.send();
});

/* GET employees show. */
router.get('/:id', function(req, res, next) {
    res.send(req.params);
});

/* PUT employees update. */
router.put('/:id', function(req, res, next) {
    res.send(req.params);
});

/* GET employees delete. */
router.delete('/:id', function(req, res, next) {
    res.send(req.params);
});

module.exports = router;