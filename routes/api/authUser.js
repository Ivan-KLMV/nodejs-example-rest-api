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
} = require('../../controllers/users');

const router = Router();

router.post('/register', checkUserData, checkUserEmail, registerUser);

router.post('/login', checkUserData, loginUser);

router.get('/current', authProtect, getMe);

router.post('/logout', authProtect, logoutUser);

module.exports = router;
