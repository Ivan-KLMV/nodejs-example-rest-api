const User = require('../../models/userModel');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Email or password is wrong' });
    }

    const passwordIsValid = await user.checkPassword(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).json({ message: 'Email or password is wrong' });
    }

    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });

    await User.findByIdAndUpdate(user._id, { token });
    res.status(200).json({
      token: token,
      user: { email: user.email, subscription: user.subscription },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
