import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        icon: {
            type: String
        },
        library: {
            type: String
        },
        description: {
            type: String
        }
    }, { timestamps: true }
)

const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Service;