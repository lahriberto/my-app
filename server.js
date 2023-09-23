const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const httpServer = http.createServer(server);
  const io = new Server(httpServer);

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  io.on('connection', (socket) => {
    console.log('Cliente conectado ao Socket.io');

    socket.on('message', (message) => {
      // Recebe mensagens do cliente e as envia de volta para todos os clientes
      console.log(message)
      io.emit('message', message);
    });

    socket.on('disconnect', () => {
      console.log('Cliente desconectado do Socket.io');
    });
  });

  const PORT = process.env.PORT || 3000;
  httpServer.listen(PORT, () => {
    console.log(`Servidor Next.js está rodando na porta ${PORT}`);
  });
});