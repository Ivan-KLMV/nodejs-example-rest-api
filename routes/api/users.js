const { Router } = require('express');

const {
  checkUserData,
  checkUserEmail,
  authProtect,
  checkEmail,
} = require('../../middleware/users');
const {
  getMe,
  registerUser,
  loginUser,
  logoutUser,
  changeUserSubscription,
  updateUserAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require('../../controllers/users');
const { uploadFile } = require('../../middleware/users/uploadFile');

const router = Router();

router.patch('/', authProtect, changeUserSubscription);

router.post('/register', checkUserData, checkUserEmail, registerUser);

router.get('/verify/:verificationToken', verifyEmail);

router.post('/verify', checkEmail, resendVerifyEmail);

router.post('/login', checkUserData, loginUser);

router.get('/current', authProtect, getMe);

router.post('/logout', authProtect, logoutUser);

router.patch(
  '/avatars',
  authProtect,
  uploadFile.single('avatar'),
  updateUserAvatar
);

module.exports = router;
