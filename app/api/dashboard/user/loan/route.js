import connectMongoDb from "@/libs/mongodb";
import Loan from "@/models/Loan";
import { NextResponse } from "next/server";

export async function GET(request) {
  const id = request.nextUrl.searchParams.get("id")

  await connectMongoDb()

  var message = "Request Failed"
  var status = false

  var data = await Loan.find({ userId: id }).sort({ createdAt: -1 });

  if (data) {
    message = "Found Loan"
    status = true
  }

  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

}

export async function PUT(request) {
  const { loanStatus, userId, id } = await request.json()

  console.log(loanStatus, userId);

  await connectMongoDb()

  var message = "Request Failed"
  var status = false



  var data = await Loan.findByIdAndUpdate(id, { status: loanStatus });

  if (data) {
    message = "Loan Updated"
    status = true
  }

  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

}

export async function PATCH(request) {
  const { amount, msg, loanStatus, userId, id } = await request.json()

  await connectMongoDb()

  var message = "Request Failed"
  var status = false



  var data = await Loan.findByIdAndUpdate(id,
    {
      status: loanStatus,
      msg: msg,
      amount: amount
    });

  if (data) {
    message = "Loan Updated"
    status = true
  }

  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

}
