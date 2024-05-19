import mongoose from "mongoose";

const PaymentItemSchema = new mongoose.Schema(
  {
    qr: String,
    upiId: String
  }, { timestamps: true }
)
let Payment;

try {
  Payment = mongoose.model('Payment');
} catch (error) {
  Payment = mongoose.model('Payment', PaymentItemSchema);
}
export default Payment;