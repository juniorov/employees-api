const jwt = require('jsonwebtoken');
const { EXPIRES_IN, JWT_SECRET } = process.env
// const JWT_SECRET = process.env.JWT_SECRET;
const MINUTES = EXPIRES_IN ?? 2;

const createToken = payload => {
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * MINUTES),
        data: payload
    }, JWT_SECRET);

    return token;
}

const decodeToken = data => {
    const token = data.split(' ')[1];

    return createToken(jwt.verify(token, JWT_SECRET));
}

module.exports = {
    createToken,
    decodeToken
}