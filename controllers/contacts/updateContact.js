const Contact = require('../../models/contactModel');

exports.updateContact = async (req, res) => {
  try {
    const { contactId } = req.params;

    if (!Object.keys(req.body).length) {
      return res.status(400).json({ message: 'missing fields' });
    }

    const contact = await Contact.findById(contactId);

    Object.keys(req.body).forEach((key) => (contact[key] = req.body[key]));

    const updatedContactData = await contact.save();

    res.status(200).json(updatedContactData);
  } catch (error) {
    res.sendStatus(500);
  }
};
