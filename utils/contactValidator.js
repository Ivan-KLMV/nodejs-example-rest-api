const Joi = require('joi');

const contactDataValidator = Joi.object({
  name: Joi.string().trim().min(3).max(30).required(),
  email: Joi.string().email(),
  phone: Joi.string().min(3).required(),
});

const contactEditDataValidator = Joi.object({
  name: Joi.string().trim().min(3).max(30),
  email: Joi.string().email(),
  phone: Joi.string().min(3),
  favorite: Joi.boolean(),
});

module.exports = { contactDataValidator, contactEditDataValidator };
