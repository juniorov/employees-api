const jwt = require('jsonwebtoken');
const fs = require("fs");
const { EXPIRES_IN, JWT_SECRET } = process.env;
const MINUTES = EXPIRES_IN ?? 2;
const date = new Date();

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

const writeLogs = (type = 'INFO', message = '') => {
    try {
        const fileName = 'logs/logs-app.txt';
        fs.appendFileSync(fileName, date.toLocaleString()+' => '+type+" : "+message + '\n', 'utf-8');
    } catch(err) {
        console.log('Error appending data to file in sync mode', err);
    }
}

module.exports = {
    createToken,
    decodeToken,
    writeLogs
}