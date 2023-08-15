const User = require('../../models/userModel');
const { emailSender } = require('../../utils');

exports.resendVerifyEmail = async (req, res) => {
  try {
    const { BASE_URL } = process.env;
    const { email } = req.body;

    if (!email)
      return res.status(400).json({ message: 'missing required field email' });

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: 'User not found' });

    if (user.verify)
      return res
        .status(400)
        .json({ message: 'Verification has already been passed' });

    const verifyEmail = {
      to: email,
      subject: 'Verify email',
      html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click verify email</a>`,
    };

    await emailSender(verifyEmail);

    res.status(200).json({
      message: 'Verification email sent',
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
