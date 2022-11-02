const Users = require('../models/Users');
const bcrypt = require('bcrypt');

module.exports = {
    create: (body) => {
        body.email = (body.email).toLowerCase();
        const user = new Users(body);
        return user.save();
    },
    find: () => Users.find({ is_active: true, is_deleted: false }),
    findById: (id) => Users.findById(id),
    findByEmail: (email) => Users.findOne({ email }),
    update: (user, body) => {
        body.email = (body.email).toLowerCase();
        Object.assign(user, body);
        return user.save();
    },
    comparePasswords: (candidatePassword, password) => {
        return bcrypt.compareSync(candidatePassword, password);
    },
}
