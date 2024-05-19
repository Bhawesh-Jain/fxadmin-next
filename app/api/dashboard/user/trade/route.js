import connectMongoDb from "@/libs/mongodb";
import Order from "@/models/Order";
import User from "@/models/user";
import { NextResponse } from "next/server";


export async function POST(request) {
    const res = await request.json();

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

    var message = "Request Failed"
    var status = false
    var data

    const userId = res["userId"]

    await connectMongoDb();

    const user = await User.findOne({ _id: userId })

    if (user) {

        var marketValue = parseInt(user["marketValue"])
        var overallGain = parseInt(user["overallGain"])
        var profit

        var fMarketValue
        var fOverallGain

        if (res["type"] === "edit") {
            var prevProfit = parseInt(res["prevProfit"])

            fMarketValue = marketValue - prevProfit
            fOverallGain = overallGain - prevProfit
        }

        profit = parseInt(res["profit"])

        fMarketValue = marketValue + profit
        fOverallGain = overallGain + profit

        var updateItems = { 
            marketValue: fMarketValue, 
            overallGain: fOverallGain,
        }

        if (res["type"] !== "edit") {
            updateItems["profit"] = profit
        }

        const updateUser = await User.findByIdAndUpdate(userId, updateItems)

        if (updateUser) {
            const req = await Order.findByIdAndUpdate(id, res);

            if (req) {
                message = "Updated Trade"
                status = true
                data = req
            }
        }
    }

    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}


export async function GET(request) {
    const id = request.nextUrl.searchParams.get("id")

    await connectMongoDb()

    var message = "Request Failed"
    var status = false

    const user = await User.findOne({ _id: id })

    var data = await Order.find({ userId: id });

    if (data) {
        message = "Found Trade"
        status = true
    }

    return NextResponse.json({ status: status, message: message, data: data, user: user }, { status: 200 })

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