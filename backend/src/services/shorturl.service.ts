import { nanoid } from "nanoid";
import ShortUrlModel from "../models/shorturl.model.js";

export const createShortUrlService = async (
  full_url: string
) => {
  const shortId = nanoid(7);

  const newUrl = await ShortUrlModel.create({
    full_url,
    short_url: shortId,
  });

  return newUrl;
};

export const redirectFromShorturlService=async(
    id:string
)=>{
    const url= await ShortUrlModel.findOne({short_url:id});
    return url;
}