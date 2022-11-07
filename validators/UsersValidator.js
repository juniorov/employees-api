const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            username: Joi.string().alphanum().max(30),
            fullname: Joi.string().required(),
            email: Joi.string().email({ minDomainSegments: 2 }).required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            is_active: Joi.bool(),
        }),
    }),
};

