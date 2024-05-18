import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      default: "-"
    },
    currency: {
      type: String,
      default: "USD"
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
    userId: {
      type: String
    },   
    status: {
      type: String,
      default: "LIVE"
    },
  }, { timestamps: true }
)

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;