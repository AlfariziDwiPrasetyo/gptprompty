import mongoose from "mongoose";

let isConnected = false;
export const connectToDb = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB alreadt connected!");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopologu: true,
    });
    isConnected = true;
    console.log();
  } catch (error) {
    console.log(error);
  }
};
