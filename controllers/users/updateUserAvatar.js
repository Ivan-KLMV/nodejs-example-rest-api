const path = require('path');
const User = require('../../models/userModel');
const { jimpImgConverter } = require('../../utils');

exports.updateUserAvatar = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'upload an image' });
    }

    const { id, email } = req.user;
    const { path: tmpUploadDir } = req.file;
    const avatarDir = path.join('public', 'avatars');
    const avatarNewName = `${id}.jpg`;

    await jimpImgConverter(tmpUploadDir, avatarDir, avatarNewName);

    const avatarURL = path.join('avatars', avatarNewName);

    await User.updateOne({ email }, { avatarURL });

    res.status(200).json({ avatarURL });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
