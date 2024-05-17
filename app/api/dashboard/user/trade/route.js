import connectMongoDb from "@/libs/mongodb";
import Trade from "@/models/Trade";
import { NextResponse } from "next/server";


export async function POST(request) {
    const res = await request.json();

    await connectMongoDb();

    var message = "Request Failed"
    var status = false
    var data

    const req = await Trade.create(res);

    if (req) {
        message = "Created Trade"
        status = true
        data = req
    }
    
    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}


export async function GET(request, {params}) {
    const id = request.nextUrl.searchParams.get("id")

    await connectMongoDb()

    var message = "Request Failed"
    var status = false

    var data = await Trade.findById(id);

    if (data) {
        message = "Found Trade"
        status = true
    }

    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

}
