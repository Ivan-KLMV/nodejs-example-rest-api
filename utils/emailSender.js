const nodemailer = require('nodemailer');
const { META_PASSWORD } = process.env;

exports.emailSender = async (data) => {
  const emailOptions = { ...data, from: 'ivan.klmv@meta.ua' };

  const config = {
    host: 'smtp.meta.ua',
    port: 465,
    secure: true,
    auth: {
      user: 'ivan.klmv@meta.ua',
      pass: META_PASSWORD,
    },
  };

  const transport = nodemailer.createTransport(config);

  transport.sendMail(emailOptions);
};
