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
} = require('../../controllers/users');

const router = Router();

router.patch('/', authProtect, changeUserSubscription);

router.post('/register', checkUserData, checkUserEmail, registerUser);

router.post('/login', checkUserData, loginUser);

router.get('/current', authProtect, getMe);

router.post('/logout', authProtect, logoutUser);

module.exports = router;
