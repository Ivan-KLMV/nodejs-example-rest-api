const Jimp = require('jimp');
const path = require('path');
const fs = require('fs/promises');

exports.jimpImgConverter = (fromDir, toDir, newName) => {
  Jimp.read(fromDir, (err, avatar) => {
    if (err) throw err;
    avatar.cover(250, 250).quality(60).write(path.join(toDir, newName));
  });

  fs.unlink(fromDir);
};
