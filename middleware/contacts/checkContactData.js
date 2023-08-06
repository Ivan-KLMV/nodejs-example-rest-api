const { contactDataValidator } = require('../../utils');

exports.checkContactData = (req, res, next) => {
  const { error, value } = contactDataValidator.validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ message: `missing required ${error.message} field` });
  }

  req.body = value;

  next();
};
