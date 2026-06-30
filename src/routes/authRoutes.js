const express = require('express');
const { login } = require('../controllers/authController');
const { authenticateToken } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/login', login);
router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Acesso autorizado', user: req.user });
});

module.exports = router;
