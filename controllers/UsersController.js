const { UsersService } = require('../services');
const utils = require('../utils');

module.exports = {
    create: async (req, res) => {
        try {
            const user = await UsersService.create(req.body);
            res.status(201).send(user)
        } catch (err) {
            console.log(err);
            res.status(400).send({ message: 'Error creating user', err });
        }
    },
    find: async (req, res) => {
        try {
            const users = await UsersService.find();
            res.status(200).send(users)
        } catch (err) {
            res.status(404).send({ message: 'Users not found', err });
        }
    },
    findById: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await UsersService.findById(id);
            res.status(200).send(user)
        } catch (err) {
            res.status(404).send({ message: 'User not found', err });
        }
    },
    findByIdAndUpdate: async (req, res) => {
        const { id } = req.params;
        const { body } = req;
        try {
            const user = await UsersService.findById(id);
            const updatedUser = await UsersService.update(user, body);
            const token = utils.createToken({
                id: updatedUser._id,
                username: updatedUser.username,
                fullname: updatedUser.fullname,
                email: updatedUser.email,
            });
            res.status(200).send({token})
        } catch (err) {
            res.status(404).send({ message: 'User not found', err });
        }
    },
    findByIdAndDelete: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await UsersService.findById(id);
            await UsersService.update(user, { is_deleted: true });
            res.status(204).send();
        } catch (err) {
            res.status(404).send({ message: 'Error deleting user', err });
        }
    },
    signup: async (req, res) => {
        try {
            const user = await UsersService.create(req.body);
            res.status(201).send({ message: "Signup successfully", user });
        } catch (err) {
            console.log('signup',err);
            res.status(400).send({ message: 'Error singing up', err });
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await UsersService.findByEmail(email);
            if (!user) res.status(404).send({ message: 'User not found' });
            const isMatch = UsersService.comparePasswords(password, user.password);
            if (!isMatch) res.status(400).send({ message: 'Invalid credentials' });
            const token = utils.createToken({
                id: user._id,
                username: user.username,
                fullname: user.fullname,
                email: user.email,
            });
            res.status(200).send({ message: "Get inside", 'token' : token });
        } catch (err) {
            console.log('login',err);
            res.status(400).send({ message: 'Error on login', err });
        }
    }
}
