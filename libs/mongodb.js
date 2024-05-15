import mongoose from "mongoose";
import Error from "next/error";

export const connectMongoDB = async () => {
  const connection = {}
  
  try {
    if(connection.isConnected) return;
    const db = await mongoose.connect(process.env.ATLAS_URI);

    connection.isConnected = db.connections[0].readyState;
    
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
