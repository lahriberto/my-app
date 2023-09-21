import { connectMongoDB } from "../../../lib/mongodb"
import Mensagem from "../../../models/mensagem"
import { NextResponse } from "next/server"

export async function POST(req) {
  
  try {
    const { mensagem } = await req.json();
    await connectMongoDB()
    await Mensagem.create({ mensagem: mensagem })
    return NextResponse.json({ message: "User registered." }, { status: 201 });

} catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}