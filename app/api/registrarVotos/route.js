import { getServerSession } from "next-auth"
import { connectMongoDB } from "../../../lib/mongodb"
import Salas from "../../../models/salas"
import { NextResponse } from "next/server"
import { authOptions } from "../auth/[...nextauth]/route"

export async function POST(req) {
    const session = await getServerSession(authOptions)
    const id = session?.user?.id
    try {
        const data = await req.json()
        await connectMongoDB()
        console.log(data)
        return NextResponse.json({ message: "Voto registrado." }, { status: 201 })
    } catch (error) {
        return NextResponse.json(
            { message: "Ocorreu um erro ao registrar o voto." },
            { status: 500 }
        )
    }
}