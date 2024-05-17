import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    description: String,
  }, { timestamps: true }
)

const Terms = mongoose.models.Terms || mongoose.model("Terms", aboutSchema);

export default Terms;