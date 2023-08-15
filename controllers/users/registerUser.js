const { nanoid } = require('nanoid');
const User = require('../../models/userModel');
const { emailSender } = require('../../utils');

exports.registerUser = async (req, res) => {
  try {
    const verificationToken = nanoid();
    const { BASE_URL } = process.env;
    const { email } = req.body;
    const newUser = await User.create({ ...req.body, verificationToken });

    newUser.password = undefined;

    const verifyEmail = {
      to: email,
      subject: 'Verify email',
      html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click verify email</a>`,
    };

    await emailSender(verifyEmail);

    res.status(201).json({
      user: { emal: newUser.email, subscription: newUser.subscription },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
