const Contact = require('../../models/contactModel');

exports.addContact = async (req, res) => {
  try {
    const { _id: owner } = req.user;

    const newContact = await Contact.create({ ...req.body, owner });

    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
