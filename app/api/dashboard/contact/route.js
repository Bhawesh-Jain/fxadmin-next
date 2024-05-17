import connectMongoDb from "@/libs/mongodb";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";


export async function GET() {
  await connectMongoDb();

  var message = "Request Failed"
  var status = false
  var data

  const req = await Contact.find();

  if (req) {
      message = "Contacts Found"
      status = true
      data = req
  }
  
  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}