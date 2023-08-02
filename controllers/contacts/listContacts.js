const Contact = require('../../models/contactModel');

exports.listContacts = async (req, res) => {
  try {
    const { _id: owner } = req.user;
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    const contacts = await Contact.find({ owner }).skip(skip).limit(limit);

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
