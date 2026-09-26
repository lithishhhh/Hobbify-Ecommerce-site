const express = require('express');
const { protectWithFirebase } = require('../middleware/firebaseAuth');

const router = express.Router();

router.post('/sync', protectWithFirebase, (req, res) => res.json(req.user));

module.exports = router;
