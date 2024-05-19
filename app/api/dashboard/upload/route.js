import connectMongoDb from "@/libs/mongodb";
import Payment from "@/models/PaymentItem";
import { NextResponse } from "next/server";


export async function GET() {
  await connectMongoDb()

  var message = "Request Failed"
  var status = false

  var data = await Payment.findOne();

  if (data) {
    message = "Found!"
    status = true
  }

  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

}


export async function PUT(request, { params }) {
  const req = await request.json();

  await connectMongoDb()

  var message = "Request Failed"
  var status = false

  try {
    var data = await Payment.findOne();

    var data = await Payment.findByIdAndUpdate(data["_id"], req)
      .catch(error => message = error);
    if (data) {
      message = "Qr Updated"
      status = true
    }
    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

  } catch (error) {
    var message = error

  }

  return NextResponse.json({ status: status, message: message }, { status: 200 })


}