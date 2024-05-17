import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    description: String,
  }, { timestamps: true }
)

const About = mongoose.models.About || mongoose.model("About", aboutSchema);

export default About;