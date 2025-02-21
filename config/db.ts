import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

async function connectDB() {
  const dbUri = config.get<string>("dbUri");

  try {
    console.log(dbUri)
    await mongoose.connect(dbUri);
    Logger.info("Database connected");
  } catch (error) {
    Logger.error("Error connecting to the database");
    Logger.error(error);
  }
}

export default connectDB;