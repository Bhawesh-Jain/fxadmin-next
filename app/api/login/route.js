import connectMongoDb from "@/libs/mongodb";
import Admin from "@/models/AdminUser";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();

  await connectMongoDb();

  const user = await Admin.findOne({ email: email })

  var message = "Invalid User"
  var status = false
  var data
  if (user) {
    if (user.toObject()["password"] === password) {
      if (user.toObject()["status"] === "Pending") {
        message = "Verification Pending!"
        status = false
      } else {
        message = "Login Successful"
        status = true
        data = user.toObject()

        delete data["password"];
      }
    } else {
      message = "Invalid Password!"
      status = false
    }
  } else {
    message = "User Not Found!"
    status = false
  }
  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}