import connectMongoDb from "@/libs/mongodb";
import Transaction from "@/models/Transactions";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDb()

    var message = "No Transactions Found!"
    var status = false

    var data = await Transaction.find();
    // var data = null

    if (data) {
        message = "Found Transactions"
        status = true
    }

    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}
