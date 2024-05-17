import connectMongoDb from "@/libs/mongodb";
import About from "@/models/About";
import { NextResponse } from "next/server";


export async function GET() {
  await connectMongoDb();

  var message = "Request Failed"
  var status = false
  var data

  const req = await About.findOne();

  if (req) {
      message = "About Found"
      status = true
      data = req
  }
  
  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}

export async function PUT(request) {

  const body = await request.json()

  await connectMongoDb();

  var message = "Request Failed"
  var status = false
  var data

  const req = await About.findOneAndUpdate(body);

  if (req) {
      message = "About Us Updated"
      status = true
      data = req
  }
  
  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}