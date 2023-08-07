const { Router } = require('express');

const {
  checkUserData,
  checkUserEmail,
  authProtect,
} = require('../../middleware/users');
const {
  getMe,
  registerUser,
  loginUser,
  logoutUser,
  changeUserSubscription,
  updateUserAvatar,
} = require('../../controllers/users');
const { uploadFile } = require('../../middleware/users/uploadFile');

const router = Router();

router.patch('/', authProtect, changeUserSubscription);

router.post('/register', checkUserData, checkUserEmail, registerUser);

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
