const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    id : {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true,
    },
    salary: {
        type: Number,
        required: true
    }
});

const Employees = mongoose.model('Employees', employeeSchema);

module.exports = Employees;