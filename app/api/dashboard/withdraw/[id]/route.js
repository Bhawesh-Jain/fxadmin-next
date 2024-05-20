import connectMongoDb from "@/libs/mongodb"
import Transaction from "@/models/Transactions"
import Withdraw from "@/models/Withdraw"
import User from "@/models/user"
import { NextResponse } from "next/server"


export async function PUT(request, { params }) {
  const wStatus = request.nextUrl.searchParams.get("status")
  const id = request.nextUrl.searchParams.get("id")
  const res = await request.json()


  console.log(wStatus);
  console.log(id);
  console.log(res);

  await connectMongoDb()

  var message = "Request Failed"
  var status = false

  var transaction = await Transaction.create(res)

  console.log(transaction);
  if (transaction) {

    var data = await Withdraw.findByIdAndUpdate(id, { status: wStatus })
    console.log(data);

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

  console.log(wStatus);
  console.log(id);
  console.log(res);
  console.log(userId);

  await connectMongoDb()

  var message = "Request Failed"
  var status = false

  var user = await User.findById(userId)

  console.log(user);
  if (user) {

    var amount = res["amount"]

    var investment = parseInt(user["investmentAmount"]) - parseInt(amount)
    var marketValue = parseInt(user["marketValue"]) - parseInt(amount)

    var userUpdate = await User.findByIdAndUpdate(userId, {
      investmentAmount: investment,
      marketValue: marketValue
    })

    console.log(userUpdate);
    if (userUpdate) {
      var transaction = await Transaction.create(res)

      console.log(transaction);
      if (transaction) {

        var data = await Withdraw.findByIdAndUpdate(id, { status: wStatus })
        console.log(data);

        if (data) {
          message = "Update Succesful"
          status = true
        }
      }
    }
  }


  return NextResponse.json({ status: status, message: message }, { status: 200 })

}


export async function GET() {
  await connectMongoDb()

  var message = "No Withdraw Found!"
  var status = false

  var data = await Withdraw.find({ status: "PENDING" }).sort({ createdAt: -1 });
  // var data = null

  if (data) {
    message = "Found Withdraw"
    status = true
  }

  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}
