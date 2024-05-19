import mongoose from "mongoose";

const loanSchema = new mongoose.Schema(
  {
    amount: {
      type: String,
    },
    userId: {
      type: String
    },
    status: {
      type: String,
      default: "Requested"
    },
    msg: {
      type: String
    }
  }, { timestamps: true }
)

const Loan = mongoose.models.Loan || mongoose.model("Loan", loanSchema);

export default Loan;