const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    id : {
        type: Number,
        default: 1
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

employeeSchema.pre('save', function(next){
    const employee = this;

    if(employee.isNew) {
        let lastOne = Employees.findOne({}).sort({ _id: -1 }).then((employeeDB) => {
            if(employeeDB === null) {
                employee.id = 1;
                employee._id = 1;
                next();
            } else {
                employee.id = employeeDB.id + 1;
                employee._id = employeeDB.id + 1;
                next();
            }
        });
    }
});

const Employees = mongoose.model('Employees', employeeSchema);

module.exports = Employees;