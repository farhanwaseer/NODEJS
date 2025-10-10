import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Listen to MongoDB connection events
    mongoose.connection.on("connected", () => {
      console.log("✅ Database Connected Successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB Connection Error:", err);
    });

    // Connect to MongoDB
    await mongoose.connect(`${process.env.MONGODB_URI}/car-rental`);

  } catch (error) {
    console.error("❌ Failed to Connect to Database:", error);
    process.exit(1); // Exit process on failure
  }
};

export default connectDB;
