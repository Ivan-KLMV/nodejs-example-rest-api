const { checkUserData } = require('./checkUserData');
const { checkUserEmail } = require('./checkUserEmail');
const { authProtect } = require('./authProtect');
const { checkEmail } = require('./checkEmail');

module.exports = {
  checkUserData,
  checkUserEmail,
  authProtect,
  checkEmail,
};
