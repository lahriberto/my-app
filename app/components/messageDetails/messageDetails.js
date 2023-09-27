import React from 'react'
import { connectMongoDB } from '../../../lib/mongodb';
import User from "../../../models/user"

export default async function MessageDetails({ user_id, data }) {


  const dados = await User.findById(user_id).exec()
  console.log(dados)




  return (
    <div>
      {loading ? (
        <p>Carregando informações do usuário...</p>
      ) : user ? (
        <div>
          <h2>Nome: {user.nome}</h2>
          {user.fotoPerfil && (
            <img src={user.fotoPerfil} alt="Foto de Perfil" />
          )}
          <p>Mensagem: {data}</p>
        </div>
      ) : (
        <p>Usuário não encontrado</p>
      )}
    </div>
  );
}
