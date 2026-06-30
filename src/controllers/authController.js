const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || 'supersecretjwtkey';

const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Usuário e senha são obrigatórios.' });
  }

  const user = {
    id: 1,
    username,
    role: 'user'
  };

  const token = jwt.sign(user, SECRET_KEY, {
    expiresIn: '2h'
  });

  res.json({ token, user });
};

module.exports = {
  login
};
