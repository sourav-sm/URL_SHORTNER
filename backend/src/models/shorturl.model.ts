import mongoose from "mongoose";

const shortUrlSchema=new mongoose.Schema({
    full_url:{
        type:String,
        require:true
    },
    short_url:{
        type:String,
        require:true,
        index:true,//for better searching using indexing
        unique:true
    },
    clicks:{
        type:Number,
        require:true,
        default:0
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    }
});

const short_url=mongoose.model("shortUrl",shortUrlSchema);
export default short_url;