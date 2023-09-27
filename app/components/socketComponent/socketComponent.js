'use client'

import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import MessageDetails from "../messageDetails/messageDetails"

const socket = io()

const SocketComponent = (props) => {
  const [message, setMessage] = useState('')
  const [oldMessages, setOldMessages] = useState(JSON.parse(props.mensagens))

  socket.emit('join_room', props.id_sala)

  useEffect(() => {
    socket.on('message', (message) => {
      // Recebe mensagens do servidor e as adiciona ao estado de mensagens
      setOldMessages((prevMessages) => [...prevMessages, message])
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
  
  return (
    <div>
      <div className="h-96 bg-indigo-100 rounded border border-slate-300 overflow-auto">
        {oldMessages.map((msg, index) => (
          <div className='text-indigo-800 text-left m-2' key={index}>
            <MessageDetails user_id={msg.remetente} data={msg.conteudo}/>
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
