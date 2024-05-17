import connectMongoDb from "@/libs/mongodb";
import Order from "@/models/Order";
import { NextResponse } from "next/server";


export async function POST(request) {
    const res = await request.json();

    console.log(res);

    await connectMongoDb();

    var message = "Request Failed"
    var status = false
    var data

    const req = await Order.create(res);

    if (req) {
        message = "Created Trade"
        status = true
        data = req
    }
    
    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}

export async function PUT(request) {
    const id = request.nextUrl.searchParams.get("id")
    const res = await request.json();

    console.log(id);

    await connectMongoDb();

    var message = "Request Failed"
    var status = false
    var data

    const req = await Order.findByIdAndUpdate(id, res);

    if (req) {
        message = "Created Trade"
        status = true
        data = req
    }
    
    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}


export async function GET(request) {
    const id = request.nextUrl.searchParams.get("id")

    await connectMongoDb()

    var message = "Request Failed"
    var status = false

    var data = await Order.find({userId: id});

    if (data) {
        message = "Found Trade"
        status = true
    }

    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
  
    await connectMongoDb()
  
    console.log(id);
  
  
    var message = "Request Failed"
    var status = false
  
    var data = await Order.findByIdAndDelete(id);
  
    if (data) {
        message = "Trade Deleted"
        status = true
    }
  
    return NextResponse.json({ status: status, message: message }, { status: 200 })
  
  }