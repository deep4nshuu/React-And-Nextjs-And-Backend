import mongoose from "mongoose";

export async function connectDB(){
    try {
       await mongoose.connect(process.env.MONGO_URI)
       console.log("DB connnected successfully 🟢"); 
    } catch (error) {
        throw new Error("Not connected", error)
    }
}