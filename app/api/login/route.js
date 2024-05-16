import connectMongoDb from "@/libs/mongodb";
import Admin from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {email, password} = await request.json();

  await connectMongoDb();

  await Admin.create({email, password})

  return NextResponse.json({message: "Login"}, {status: 201})
}