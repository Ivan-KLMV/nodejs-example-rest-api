const Contact = require('../../models/contactModel');

exports.addContact = async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);

    res.status(201).json(newContact);
  } catch (error) {
    res.sendStatus(500);
  }
};
