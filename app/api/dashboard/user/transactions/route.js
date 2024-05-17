import connectMongoDb from "@/libs/mongodb";
import Transaction from "@/models/Transactions";
import { NextResponse } from "next/server";




export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")

    await connectMongoDb();
    await Transaction.findByIdAndDelete(id);

    return NextResponse.json({status: true, message: "Transaction Deleted"}, {status: 200});
}