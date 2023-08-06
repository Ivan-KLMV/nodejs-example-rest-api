const User = require('../../models/userModel');

exports.logoutUser = async (req, res) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { token: '' });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
