const express = require('express');
const { createUserQuery } = require('../controllers/userQueryController');

const router = express.Router();

router.post('/', createUserQuery);

module.exports = router;
