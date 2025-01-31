import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["client", "lawyer"], required: true },
    specialization: { type: String }, // Only for lawyers
    verified: { type: Boolean, default: false }, // For lawyer verification
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
