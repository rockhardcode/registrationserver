import mongoose from "mongoose";

const StockSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  type: { type: String, enum: ["incoming", "outgoing"] },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Stock", StockSchema);
