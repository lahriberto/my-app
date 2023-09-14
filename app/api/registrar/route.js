import { connectMongoDB } from "../../../lib/mongodb";
import User from "../../../models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  
  try {
    const { nome, email, senha } = await req.json();

    await connectMongoDB()
    await User.create({ nome, email, senha})

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  


} catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}