import mongoose from "mongoose"


export async function connectDB(){
    try {
        await mongoose.connect("mongodb://localhost:27017/")
        console.log("DB connected successfully👍")
    } catch (error) {
        throw new Error("DB not connected")
    }
}