import 'dotenv/config'
import mongoose from "mongoose";
const connectDB = async ()=>{
    try{
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is missing in .env");
        }

        mongoose.connection.on('connected', ()=>{
            console.log('Database connected');
        });

        await mongoose.connect(`${process.env.MONGODB_URI}/MERNBlog`);
    }
    catch(err){
        console.error("MongoDB connection failed:", err.message);
        throw err;
    }
}

export default connectDB;
