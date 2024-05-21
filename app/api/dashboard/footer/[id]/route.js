import connectMongoDb from "@/libs/mongodb";
import Footer from "@/models/Footer";
import { NextResponse } from "next/server";


export async function GET() {
  await connectMongoDb()

  var message = "Request Failed"
  var status = false

  var data = await Footer.findOne();

  if (data) {
    message = "Found!"
    status = true
  }

  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

}


export async function POST(request, { params }) {
  const req = await request.json();

  await connectMongoDb()

  var message = "Request Failed"
  var status = false

  try {
    var data = await Footer.findOne();

    if (!data) {
      var data = await Footer.create(req);

    }

    var data = await Footer.findByIdAndUpdate(data["_id"], req)
      .catch(error => message = error);
    if (data) {
      message = "Footer Updated"
      status = true
    }
    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

  } catch (error) {
    var message = error

  }

  return NextResponse.json({ status: status, message: message }, { status: 200 })


}