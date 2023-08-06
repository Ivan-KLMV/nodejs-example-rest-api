const Contact = require('../../models/contactModel');

exports.listContacts = async (req, res) => {
  try {
    const findParams = { owner: req.user.id };

    const searchByFavorite = req.query.favorite;

    if (searchByFavorite) {
      findParams.favorite = searchByFavorite;
    }

    const { page = 1, limit = 5 } = req.query;
    const skip = (page - 1) * limit;

    const contacts = await Contact.find(findParams).skip(skip).limit(limit);

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
