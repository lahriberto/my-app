'use client'

import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

const socket = io()

const SocketComponent = (props) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  socket.emit('join_room', props.id_sala)

  useEffect(() => {
    socket.on('message', (message) => {
      // Recebe mensagens do servidor e as adiciona ao estado de mensagens
      setMessages((prevMessages) => [...prevMessages, message])
    })

    return () => {
      socket.off('message')
    }
  }, [])

  // Envia a mensagem para o servidor
  const sendMessage = () => {
    if (message !== '') {
      const messageData = {
        id_sala: props.id_sala,
        id_user: props.id_user,
        message: message,
      }
      socket.emit('message', messageData)
    }
    setMessage('') // Limpa a mensagem após o envio
  }

  function extrairNomeAbreviado(nomeCompleto) {
    // Divida a string pelo espaço em branco para obter partes separadas
    const partesDoNome = nomeCompleto.split(' ');
  
    // Verifique se existem pelo menos duas partes (nome e sobrenome)
    if (partesDoNome.length >= 2) {
      const nome = partesDoNome[0];
      const primeiroSobrenome = partesDoNome[1][0]; // Primeira letra do primeiro sobrenome
  
      return `${nome} ${primeiroSobrenome}.`;
    } else {
      // Se não houver espaço em branco, considere a string inteira como o nome
      return nomeCompleto;
    }
  }
  

  return (
    <div>
      <div className="h-96 bg-indigo-100 rounded border border-slate-300">
        {messages.map((msg, index) => (
          <div className='text-indigo-800 text-left m-2' key={index}>
            <p>Usuário: {extrairNomeAbreviado(msg.remetente)}</p>
            <p>Mensagem: {msg.conteudo}</p>
          </div>
        ))}
      </div>
      <input
        className='text-indigo-800 my-5 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
        type="text"
        placeholder="Digite sua mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Enviar Mensagem &rarr;</button>
    </div>
  )
}

export default SocketComponent
