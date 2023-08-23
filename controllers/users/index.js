const { changeUserSubscription } = require('./changeUserSubscription');
const { getMe } = require('./getMe');
const { loginUser } = require('./loginUser');
const { logoutUser } = require('./logoutUser');
const { registerUser } = require('./registerUser');
const { updateUserAvatar } = require('./updateUserAvatar');
const { verifyEmail } = require('./verifyEmail');
const { resendVerifyEmail } = require('./resendVerifyEmail');

module.exports = {
  getMe,
  loginUser,
  logoutUser,
  registerUser,
  changeUserSubscription,
  updateUserAvatar,
  verifyEmail,
  resendVerifyEmail,
};
