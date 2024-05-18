import connectMongoDb from "@/libs/mongodb"
import Transaction from "@/models/Transactions"
import Withdraw from "@/models/Withdraw"
import { NextResponse } from "next/server"


export async function PUT(request, { params }) {
  const { id } = params
  const wStatus = request.nextUrl.searchParams.get("status")
  const res = await request.json()

  await connectMongoDb()

  var message = "Request Failed"
  var status = false

  var transaction = await Transaction.create(res)

  if (transaction) {

    var data = await Withdraw.findByIdAndUpdate(id, { status: wStatus })

    if (data) {
      message = "Update Succesful"
      status = true
    }
  }

  return NextResponse.json({ status: status, message: message }, { status: 200 })

}