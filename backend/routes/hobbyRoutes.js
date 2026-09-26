const express = require('express');
const {
  getHobbies,
  getHobbyById,
  createHobby,
  updateHobby,
  deleteHobby,
} = require('../controllers/hobbyController');

const router = express.Router();

router.get('/', getHobbies);
router.get('/:id', getHobbyById);
router.post('/', createHobby);
router.put('/:id', updateHobby);
router.delete('/:id', deleteHobby);

module.exports = router;
