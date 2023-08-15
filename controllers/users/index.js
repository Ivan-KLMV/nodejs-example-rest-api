const { changeUserSubscription } = require('./changeUserSubscription');
const { getMe } = require('./getMe');
const { loginUser } = require('./loginUser');
const { logoutUser } = require('./logoutUser');
const { registerUser } = require('./registerUser');
const { updateUserAvatar } = require('./updateUserAvatar');

module.exports = {
  getMe,
  loginUser,
  logoutUser,
  registerUser,
  changeUserSubscription,
  updateUserAvatar,
};
