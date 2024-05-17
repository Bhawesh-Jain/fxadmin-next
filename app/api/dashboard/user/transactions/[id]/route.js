import connectMongoDb from "@/libs/mongodb";
import Transaction from "@/models/Transactions";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params

    await connectMongoDb()

    var message = "No Transactions Found!"
    var status = false

    var data = await Transaction.find({ userId: id });

    if (data) {
        message = "Found Transactions"
        status = true
    }

    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}

export async function PUT(request, { params }) {
    const { id } = params

    const req = await request.json()

    await connectMongoDb()


    const filter = { _id: req["id"] };
    const update = { status: req["status"] };

    console.log(req, filter, update);

    var message = "No Transactions Found!"
    var status = false

    var data = await Transaction.findOneAndUpdate(filter, update);

    if (data) {
        message = "Updated Transaction"
        status = true
    }

    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}


export async function DELETE({params}) {
    const {id} =params

    await connectMongoDb();
    await Transaction.findByIdAndDelete(id);

    return NextResponse.json({status: true, message: "User Deleted"}, {status: 200});
}