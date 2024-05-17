import connectMongoDb from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDb();

    var message = "Request Failed"
    var status = false
    var data

    const req = await User.find();

    if (req) {
        message = "Users Found"
        status = true
        data = req
    }
    
    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}
