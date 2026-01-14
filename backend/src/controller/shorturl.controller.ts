import { createShortUrlService,redirectFromShorturlService } from "../services/shorturl.service.js"
import type { Request,Response } from "express";

export const createShorturl = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const { full_url } = req.body as { full_url?: string };

    if (!full_url) {
      return res.status(400).json({ message: "full_url is required" });
    }

    const newUrl = await createShortUrlService(full_url);

    return res.status(201).json(newUrl);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};


export const redirectFromShorturl=async(
  req:Request<{id:string}>,
  res:Response
):Promise<Response | void>=>{

  try {
    const {id}=req.params;
    const url=await redirectFromShorturlService(id);

    if(!url){
      return res.status(404).send("url not found");
    }

    return res.redirect(url.full_url);
  }
  catch (error) {
      res.status(500).send("internal server error ");
  }
}
