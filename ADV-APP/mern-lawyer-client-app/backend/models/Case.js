import mongoose from "mongoose";

const caseSchema = new mongoose.Schema(
  {
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    budget: { type: Number, required: true },
    status: { type: String, enum: ["open", "in progress", "closed"], default: "open" },
  },
  { timestamps: true }
);

export default mongoose.model("Case", caseSchema);
