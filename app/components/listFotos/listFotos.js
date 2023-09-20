import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { connectMongoDB } from '../../../lib/mongodb';
import Fotos from '../../../models/fotos';

async function getFotos() {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id
  try {
    await connectMongoDB()
    const fotosUsuario = await Fotos.find({ user: id, active: true }).exec()
    return fotosUsuario
  } catch (error) {
    console.log(error)
    return error;
  }
}

export default async function ListFotos() {
  const data = await getFotos()
  return (<>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-indigo-800 dark:border-indigo-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          {
            data.map((foto) => {
              return (
                <div key={foto.path}>
                  <img src={foto.path} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  </>
  )
}