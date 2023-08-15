const Joi = require('joi');
const { EMAIL_REGEXP } = require('../constants/EMAIL_REGEXP');

const userValidator = Joi.object({
  email: Joi.string()
    .pattern(EMAIL_REGEXP)
    .required()
    .options({
      messages: { 'string.pattern.base': 'Enter a valid email' },
    }),
  password: Joi.string()
    .min(6)
    .required()
    .options({
      messages: {
        'string.min': 'The password must be at least 6 characters long',
      },
    }),
});

const emailValidator = Joi.object({
  email: Joi.string()
    .pattern(EMAIL_REGEXP)
    .required()
    .options({
      messages: { 'string.pattern.base': 'Enter a valid email' },
    }),
});

module.exports = { userValidator, emailValidator };
