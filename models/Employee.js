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
        type: FLOAT,
        required: true
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;