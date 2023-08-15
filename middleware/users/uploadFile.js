const multer = require('multer');
const path = require('path');

const tmpDir = path.join('tmp');

const multerConfig = multer.diskStorage({
  destination: tmpDir,
  filename: (req, file, clbk) => {
    clbk(null, file.originalname);
  },
});

exports.uploadFile = multer({ storage: multerConfig });
