const { nanoid } = require('nanoid');
const User = require('../../models/userModel');

exports.registerUser = async (req, res) => {
  try {
    const verificationToken = nanoid();
    console.log(verificationToken);
    const newUser = await User.create({ ...req.body, verificationToken });
    newUser.password = undefined;

    res.status(201).json({
      user: { emal: newUser.email, subscription: newUser.subscription },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
