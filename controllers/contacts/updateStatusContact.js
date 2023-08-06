const Contact = require('../../models/contactModel');

exports.updateStatusContact = async (req, res) => {
  try {
    const { contactId } = req.params;

    if (!Object.keys(req.body).length) {
      return res.status(400).json({ message: 'missing field favorite' });
    }

    const { favorite } = req.body;

    const updatedUser = await Contact.findByIdAndUpdate(
      contactId,
      { favorite },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.sendStatus(500);
  }
};
