import connectMongoDb from "@/libs/mongodb";
import Admin from "@/models/AdminUser";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {email, password} = await request.json();

  await connectMongoDb();

  const user = await Admin.findOne({email:email, password:password})

  var message = "Invalid User"
  var status = false
  var data 
  if (user) {
    message = "Login Successful"
    status = true
    data = user.toObject()

    delete data["password"];
  }

  return NextResponse.json({status: status, message: message, data: data}, {status: 200})
}