import React from 'react'
import { connectMongoDB } from '../../../lib/mongodb';
import Salas from '../../../models/salas';

async function getPendentes() {
  try {
    await connectMongoDB()
    const Pendentes = await Salas.find({ 'pendentes': {} }).exec()
    console.log(Pendentes)
    return Pendentes
  } catch (error) {
    console.log(error)
    return error;
  }
}

export default async function ListFotos() {
  const data = await getPendentes()
  return (<>
         {data}
  </>
  )
}