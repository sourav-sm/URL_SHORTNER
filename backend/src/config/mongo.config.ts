import mongoose from "mongoose";

const connectDB=async()=>{
    const DB_URL=process.env.DB_URL;

    if(!DB_URL){
        throw new Error("DB_URL not found in environment variables");
    }

    try {
        await mongoose.connect(DB_URL) ;
        console.log("db connected successfully")    
    } catch (error) {
        console.log("failed to connect with db ",error);
        process.exit(1);
    }
   
}

export default connectDB;

