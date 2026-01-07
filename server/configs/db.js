import 'dotenv/config'
import mongoose from "mongoose";
const connectDB = async ()=>{
    try{
        console.log("HIIIII", process.env.MONGODB_URI);
        mongoose.connection.on('connected', ()=>{ //this is an event listener
            console.log('Database Connected')

        }) // this does not do anything perticular, just notifies when connection is made.
        await mongoose.connect(`${process.env.MONGODB_URI}/MERNBlog`) // this is the actual connection proccess
        

    }
    catch(err){
        console.log(err.message)
    }
}

export default connectDB;