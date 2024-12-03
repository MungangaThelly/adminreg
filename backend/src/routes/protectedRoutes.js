const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

router.get('/', authenticateToken, (req, res) => {
  res.json({ message: 'This is protected data' });
});

module.exports = router;
