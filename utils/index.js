const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const MINUTES = 2;

module.exports = {
    createToken: payload => {
        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * MINUTES),
            data: payload
        }, JWT_SECRET);

        return token;
    }
}