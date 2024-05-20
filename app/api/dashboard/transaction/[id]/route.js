import connectMongoDb from "@/libs/mongodb"
import Transaction from "@/models/Transactions"
import User from "@/models/user"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
    const { id } = params


    await connectMongoDb()

    var message = "Request Failed"
    var status = false
    if (id === "all") {
        var data = await Transaction.find().sort({ createdAt: -1 });
    }
    else
        var data = await Transaction.findById(id);

    if (data) {
        message = "Found Transaction"
        status = true
    }

    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

}


export async function PUT(request, { params }) {
    const { id } = params
    const res = await request.json()

    await connectMongoDb()

    var message = "Request Failed"
    var status = false

    var data = await Transaction.findByIdAndUpdate(id, res)

    if (data) {
        message = "Update Succesful"
        status = true
    }

    return NextResponse.json({ status: status, message: message }, { status: 200 })

}

export async function PATCH(request, { params }) {
    const wStatus = request.nextUrl.searchParams.get("status")
    const { id } = params
    const res = await request.json()

    await connectMongoDb()

    var message = "Request Failed"
    var status = false

    if (res["type"] === "Deposit") {
        var userId = res["userId"]
        var amount = res["amount"]

        var user = await User.findById(userId)

        if (user) {

            var investment = parseInt(user["investmentAmount"]) + parseInt(amount)
            var marketValue = parseInt(user["marketValue"]) + parseInt(amount)
            var userUpdate = await User.findByIdAndUpdate(userId, {
                investmentAmount: investment,
                marketValue: marketValue
            })
        }
    }

    var data = await Transaction.findByIdAndUpdate(id, { status: wStatus })

    if (data) {
        message = "Update Succesful"
        status = true
    }

    return NextResponse.json({ status: status, message: message }, { status: 200 })

}