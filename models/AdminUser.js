import mongoose from "mongoose";

const adminUserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
    }
  }, { timestamps: true }
)

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminUserSchema);

export default Admin;