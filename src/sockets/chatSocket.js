function registerSocketHandlers(io) {
  io.on('connection', (socket) => {
    const user = socket.user;
    console.log(`Usuário conectado: ${user.username}`);

    socket.emit('message', {
      user: 'system',
      text: `Bem-vindo ao chat, ${user.username}!`
    });

    socket.on('message', (message) => {
      const payload = {
        user: user.username,
        text: message,
        timestamp: new Date().toISOString()
      };

      io.emit('message', payload);
    });

    socket.on('disconnect', (reason) => {
      console.log(`Usuário desconectado: ${user.username}. Motivo: ${reason}`);
    });
  });
}

module.exports = {
  registerSocketHandlers
};
