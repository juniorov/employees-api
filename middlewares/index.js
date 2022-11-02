const jwt = require('jsonwebtoken');

module.exports = {
    verifyToken: (req, res, next) => {
        try {
            if(!req.headers.authorization) res.status(403).send({ error: "Authorization header must be provided" });

            const { authorization } = req.headers,
                token = authorization.split(' ')[1];

            req.decoded = jwt.verify(token, process.env.JWT_SECRET);
            next();
        } catch (err) {
            res.status(403).send({ err });
        }
    }
}