'use client'

import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

const socket = io()

const SocketComponent = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on('message', (message) => {
      // Recebe mensagens do servidor e as adiciona ao estado de mensagens

      setMessages((prevMessages) => [...prevMessages, message]);
      
    });

    return () => {
        socket.off('message');
      };

  }, []);

  console.log(messages)

  const sendMessage = () => {
    // Envia a mensagem para o servidor
    socket.emit('message', message);
    setMessage(''); // Limpa a mensagem após o envio
  };

  return (
    <div>
      <h2>Chat</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Digite sua mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
};

export default SocketComponent;
