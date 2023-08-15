const Joi = require('joi');
const { EMAIL_REGEXP } = require('../constants/EMAIL_REGEXP');

exports.emailValidator = Joi.object({
  email: Joi.string()
    .pattern(EMAIL_REGEXP)
    .required()
    .options({
      messages: { 'string.pattern.base': 'Enter a valid email' },
    }),
});
