const Contact = require('../../models/contactModel');
const { contactEditDataValidator } = require('../../utils');

exports.updateContact = async (req, res) => {
  try {
    const contactId = req.params.contactId;

    if (!Object.keys(req.body).length) {
      return res.status(400).json({ message: 'missing fields' });
    }

    const { error, value } = contactEditDataValidator.validate(req.body);

    if (error) {
      return res.status(400).json({ message: 'invalid data' });
    }

    const contact = await Contact.findById(contactId);

    Object.keys(value).forEach((key) => (contact[key] = value[key]));

    const updatedContactData = await contact.save();

    res.status(200).json(updatedContactData);
  } catch (error) {
    res.sendStatus(500);
  }
};
