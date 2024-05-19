import connectMongoDb from "@/libs/mongodb";
import Withdraw from "@/models/Withdraw";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDb()
 
    var message = "No Withdraw Found!"
    var status = false

    var data = await Withdraw.find({status: "PENDING"}).sort({ createdAt: -1 });
    // var data = null

    if (data) {
        message = "Found Withdraw"
        status = true
    }

    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}
