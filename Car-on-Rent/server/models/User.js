import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["owner", "user"],
      default: "user",
    },
    image: {
      type: String,
      default: "", // you can store image URL or path
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
