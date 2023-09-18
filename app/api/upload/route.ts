import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const data = await request.formData()
  const file: File | null = data.get('file') as unknown as File

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
  
  return NextResponse.json({"message": "file uploaded", success: true })
}