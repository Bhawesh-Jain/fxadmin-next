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
    status: {
      type: String,
      default: "Pending"
    },
  }, { timestamps: true }
)

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;