const { emailValidator } = require('../../utils');

exports.checkEmail = (req, res, next) => {
  const { error, value } = emailValidator.validate(req.body);

  if (error) return res.status(400).json(error.message);

  req.body = value;

  next();
};
