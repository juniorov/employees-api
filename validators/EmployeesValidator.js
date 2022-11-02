const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            id: Joi.number().integer(),
            name: Joi.string().min(3).required(),
            surname: Joi.string().min(3).required(),
            level: Joi.number().integer(),
            salary: Joi.number().integer(),
        }),
    }),
}