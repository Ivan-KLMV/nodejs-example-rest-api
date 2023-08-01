const express = require('express');
const router = express.Router();

const {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
  updateStatusContact,
} = require('../../controllers/contacts');

const {
  checkContactById,
  checkContactData,
  checkContactEditData,
  checkContactStatus,
} = require('../../middleware/contacts');

router.get('/', listContacts);

router.post('/', checkContactData, addContact);

router.use('/:contactId', checkContactById);

router.get('/:contactId', getContactById);

router.delete('/:contactId', removeContact);

router.put('/:contactId', checkContactEditData, updateContact);

router.patch('/:contactId/favorite', checkContactStatus, updateStatusContact);

module.exports = router;
