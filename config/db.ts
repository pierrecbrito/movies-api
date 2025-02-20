import mongoose from "mongoose";
import config from "config";

async function connectDB() {
  const dbUri = config.get<string>("dbUri");

  try {
    console.log(dbUri)
    await mongoose.connect(dbUri);
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to the database");
    console.error(error);
  }
}

export default connectDB;