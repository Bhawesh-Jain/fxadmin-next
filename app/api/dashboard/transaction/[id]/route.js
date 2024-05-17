import connectMongoDb from "@/libs/mongodb"
import Transaction from "@/models/Transactions"
import { NextResponse } from "next/server"

export async function GET(request, {params}) {
    const {id} = params

    await connectMongoDb()

    var message = "Request Failed"
    var status = false

    var data = await Transaction.findById(id);

    if (data) {
        message = "Found Transaction"
        status = true
    }

    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

}


export async function PUT(request, {params}) {
    const {id} = params
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