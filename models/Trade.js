import mongoose from "mongoose";

const tradeSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      default: "-"
    },
    amount: {
      type: String,
      default: "-"
    },
    quantity: {
      type: Number,
      default: 0
    },
    buy: {
      type: Number,
      default: 0
    },
    sell: {
      type: Number,
      default: 0
    },
    profit: {
      type: Number,
      default: 0
    },
    userId: String,
  }, { timestamps: true }
)

const Trade = mongoose.models.Trade || mongoose.model("Trade", tradeSchema);

export default Trade;