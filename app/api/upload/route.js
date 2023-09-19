import { writeFile } from 'fs/promises'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'
import { connectMongoDB } from '../../../lib/mongodb'
import Fotos from "../../../models/fotos";



export async function POST(request) {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email
  const id = session?.user?.id

  const data = await request.formData()
  const file = data.get('file')
  if (!file) {
    return NextResponse.json({ success: false })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  const path = `./public/fotos/${Date.now()+file.name}`

  //Salvar o path no banco de dados como o caminho da foto do usuário X

  await writeFile(path, buffer)

  await connectMongoDB()
  await Fotos.create({ path: path, user: id, active: true })
  
  return NextResponse.json({"message": "file uploaded", success: true })
}