import connectMongoDb from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";



export async function GET(request, { params }) {
    const { id } = params

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


export async function PUT(request, { params }) {
    const { id } = params
    const req = await request.json();

    await connectMongoDb()

    var message = "Request Failed"
    var status = false

    try {

        var data = await User.findByIdAndUpdate(id, req)
            .catch(error => message = error);
        if (data) {
            message = "User Updated"
            status = true
        }
        return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

    } catch (error) {
        var message = error

    }

    return NextResponse.json({ status: status, message: message }, { status: 200 })


}