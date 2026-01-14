import mongoose, { Schema } from "mongoose";

const shortUrlSchema=new Schema({
    full_url:{
        type:String,
        required:true
    },
    short_url:{
        type:String,
        required:true,
        index:true,//for better searching using indexing
        unique:true
    },
    clicks:{
        type:Number, 
        required:true,
        default:0
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});

const short_url=mongoose.model("shortUrl",shortUrlSchema);
export default short_url;