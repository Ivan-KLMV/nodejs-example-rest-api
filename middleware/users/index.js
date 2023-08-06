const { checkUserData } = require('./checkUserData');
const { checkUserEmail } = require('./checkUserEmail');
const { authProtect } = require('./authProtect');

module.exports = {
  checkUserData,
  checkUserEmail,
  authProtect,
};
