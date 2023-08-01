const { Router } = require('express');
const { checkUserData, checkUserEmail } = require('../../middleware/users');
const { registerUser } = require('../../controllers/users/registerUser');
const { loginUser } = require('../../controllers/users/loginUser');

const router = Router();

router.post('/register', checkUserData, checkUserEmail, registerUser);

router.post('/login', checkUserData, loginUser);
module.exports = router;
