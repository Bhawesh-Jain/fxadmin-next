import connectMongoDb from "@/libs/mongodb";
import Terms from "@/models/Terms";
import { NextResponse } from "next/server";


export async function GET() {
  await connectMongoDb();

  var message = "Request Failed"
  var status = false
  var data

  const req = await Terms.findOne();

  if (req) {
      message = "Terms Found"
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

  const req = await Terms.findOneAndUpdate(body);

  if (req) {
      message = "Terms & Conditions Updated"
      status = true
      data = req
  }
  
  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}