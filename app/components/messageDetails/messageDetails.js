'use client'

import React from 'react'

export default function MessageDetails({ user_name, data, fotoPerfil }) {

  return (
    <div>
        <div>
          <h2>Nome: {user_name}</h2>
          {fotoPerfil && (
            <img src={fotoPerfil} alt="Foto de Perfil" />
          )}
          <p>Mensagem: {data}</p>
        </div>
    </div>
  )
}
