import React from 'react'
import { connectMongoDB } from '../../../lib/mongodb';
import Salas from '../../../models/salas';

export default async function ListFotos({ id_sala }) {
  async function getPendentes() {
    try {
      await connectMongoDB()
      const pendentes = await Salas.findById(id_sala, 'pendentes')
      return pendentes
    } catch (error) {
      console.log(error)
      return error
    }
  }

  const data = await getPendentes()
  console.log(await getPendentes())
  return (
    <>
        {
            data.map((item) => {
                return (
                    <div>
                      {item.id_user}
                    </div>
                )
            })
        }
    </>
)
}