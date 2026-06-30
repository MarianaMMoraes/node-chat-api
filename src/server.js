const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const authRoutes = require('./routes/authRoutes');
const { verifySocketToken } = require('./middlewares/authMiddleware');
const { registerSocketHandlers } = require('./sockets/chatSocket');

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

io.use(verifySocketToken);
registerSocketHandlers(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
