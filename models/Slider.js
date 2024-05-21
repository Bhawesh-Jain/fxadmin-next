import mongoose from "mongoose";

const SliderSchema = new mongoose.Schema(
  {
    icon: {
      type: String,
      default: "-"
    },
    name: {
      type: String,
      default: "USD"
    },
    description: {
      type: String,
      default: "-"
    },
    amount: {
      type: Number,
      default: 0
    },
    ask: {
      type: Number,
      default: 0
    },
    bid: {
      type: Number,
      default: 0
    }
  }, { timestamps: true }
)

const Slider = mongoose.models.Slider || mongoose.model("Slider", SliderSchema);

export default Slider;