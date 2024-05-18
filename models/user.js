import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
    name: String,
    phone: String,
    aadharNo: String,
    panNo: String,
    gender: String,
    dob: String,
    bankName: String,
    accountNumber: String,
    accountHolder: String,
    ifscCode: String,
    address: String,
    nomineeName: String,
    nomineeRelation: String,
    investmentAmount: {
      type: String,
      default: "0"
    },
    marketValue: {
      type: String,
      default: "0"
    },
    overallGain: {
      type: String,
      default: "0"
    },
    profit: {
      type: String,
      default: "0"
    },
    status: {
      type: String,
      default: "Pending"
    },
  }, { timestamps: true }
)

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;