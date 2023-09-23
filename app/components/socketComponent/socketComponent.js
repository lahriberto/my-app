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
      <div className="h-96 bg-indigo-100 rounded border border-slate-300">
        {messages.map((msg, index) => (
          <div className='text-indigo-800 text-left m-2' key={index}>{msg}</div>
        ))}
      </div>
      <input
        className='text-indigo-800 my-5 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
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
