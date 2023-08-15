const User = require('../../models/userModel');

exports.verifyEmail = async (req, res) => {
  try {
    const { verificationToken } = req.params;

    const user = await User.findOne({ verificationToken });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await User.findByIdAndUpdate(user.id, {
      verify: true,
      verificationToken: null,
    });

    res.status(200).json({ message: 'Verification successful' });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
