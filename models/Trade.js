import mongoose from "mongoose";

const tradeSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      default: "-"
    },
    amount: {
      type: Number,
      default: "-"
    },
    quantity: {
      type: Number,
      default: "-"
    },
    buy: {
      type: Number,
      default: "-"
    },
    sell: {
      type: Number,
      default: "-"
    },
    profit: {
      type: Number,
      default: "-"
    },
  }, { timestamps: true }
)

const Trade = mongoose.models.Trade || mongoose.model("Trade", tradeSchema);

export default Trade;