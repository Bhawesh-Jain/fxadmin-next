import connectMongoDb from "@/libs/mongodb"
import Transaction from "@/models/Transactions"
import Withdraw from "@/models/Withdraw"
import User from "@/models/user"
import { NextResponse } from "next/server"


export async function PUT(request, { params }) {
  const wStatus = request.nextUrl.searchParams.get("status")
  const id = request.nextUrl.searchParams.get("id")
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

export async function PATCH(request, { params }) {
  const wStatus = request.nextUrl.searchParams.get("status")
  const id = request.nextUrl.searchParams.get("id")
  const res = await request.json()

  const userId = res["userId"]

  await connectMongoDb()

  var message = "Request Failed"
  var status = false

  var user = await User.findById(userId)

  if (user) {

    var amount = res["amount"]

    var investment = parseInt(user["investmentAmount"]) - parseInt(amount)
    var marketValue = parseInt(user["marketValue"]) - parseInt(amount)

    var userUpdate = await User.findByIdAndUpdate(userId, {
      investmentAmount: investment,
      marketValue: marketValue
    })

    if (userUpdate) {
      var transaction = await Transaction.create(res)

      if (transaction) {

        var data = await Withdraw.findByIdAndUpdate(id, { status: wStatus })

        if (data) {
          message = "Update Succesful"
          status = true
        }
      }
    }
  }


  return NextResponse.json({ status: status, message: message }, { status: 200 })

}