import connectMongoDb from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";



export async function GET(request, {params}) {
    const {id} = params

    await connectMongoDb()

    var message = "Request Failed"
    var status = false

    var data = await User.findById(id);

    if (data) {
        message = "Found User"
        status = true
    }

    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

}