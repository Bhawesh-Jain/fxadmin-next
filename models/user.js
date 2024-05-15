import mongoose, { Schema } from "mongoose";

const adminUserSchema = new Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    }
  }, { timestamps: true }
)

const AdminUser = mongoose.models.AdminUser || mongoose.model("AdminUser", adminUserSchema);

export default AdminUser;