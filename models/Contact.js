import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    subject: String,
    description: String,
    dob: String,
    bankName: String
  }, { timestamps: true }
)

const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export default Contact;