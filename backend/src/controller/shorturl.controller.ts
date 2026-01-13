import { nanoid } from "nanoid";
import short_url from "../models/shorturl.model.js";


export const createShorturl=async (req,res)=>{
  try {
      const {full_url}=req.body;

    if(!full_url){
      res.status(400).json({message:"full_url is required"});
    }

    const shortId=nanoid(7);

    const newUrl=await short_url.create({
      full_url,
      short_url:shortId,
    });

    res.status(201).json(newUrl);
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Server Error"})
  }
}
