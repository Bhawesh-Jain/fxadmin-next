import connectMongoDb from "@/libs/mongodb"
import Service from "@/models/service"

export async function PUT(request, {params}) {
    const {id} = params
    const {name, description, icon} = await request.json()

    await connectMongoDb()

    var message = "Request Failed"
    var status = false

    var data = await Service.findByIdAndUpdate(id, { name, description, icon })

    if (data) {
        message = "Update Succesful"
        status = true
    }

    return NextResponse.json({ status: status, message: message }, { status: 200 })

}

export async function GET({params}) {
    console.log("test:" + params);
    // const {id} = params

    await connectMongoDb()

    var message = "Request Failed"
    var status = false

    var data = await Service.findById(id);

    if (data) {
        message = "Found Service"
        status = true
    }

    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

}