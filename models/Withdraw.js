import mongoose from "mongoose";

const withdrawSchema = new mongoose.Schema(
  {
    name: String,
    amount: String,
    type: String,
    msg: String,
    userId: String,
    bankName: String,
    accountNumber: String,
    accountHolder: String,
    ifscCode: String,
    status: {
      type: String,
      default: "PENDING"
    }
  }, { timestamps: true }
)

const Withdraw = mongoose.models.Withdraw || mongoose.model("Withdraw", withdrawSchema);

export default Withdraw;