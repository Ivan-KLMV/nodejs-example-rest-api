const User = require('../../models/userModel');

exports.checkUserEmail = async (req, res, next) => {
  const { email } = req.body;

  const isExists = await User.exists({ email });

  if (isExists) {
    return res.status(409).json({
      message: 'Email in use',
    });
  }

  next();
};
