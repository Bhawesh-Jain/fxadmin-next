import mongoose from "mongoose";

const footerSchema = new mongoose.Schema(
  {
    address: String,
    contact: String,
    email: String,
  }, { timestamps: true }
)

const Footer = mongoose.models.Footer || mongoose.model("Footer", footerSchema);

export default Footer;