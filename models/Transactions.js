import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    type: String,
    amount: String,
    msg: String,
    userId: String,
    transactionId: String,
    status: {
      type: String,
      default: "Pending"
    },
  }, { timestamps: true }
)

const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema);

export default Transaction;