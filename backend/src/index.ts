import express from "express";
import dotenv from "dotenv";
import { nanoid } from "nanoid";
import connectDB from "./config/mongo.config.js";
import short_url from "./models/shorturl.model.js";


dotenv.config();

const app = express();
app.use(express.json());

//connect db
connectDB();


app.get("/", (req, res) => {
//   res.send("OK");
res.send(nanoid(7));
});

//creat api for new url
app.post("/api/create",async (req,res)=>{
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
});

//redirection url
app.get("/:id",async(req,res)=>{
  const {id}=req.params;
  const url=await short_url.findOne({short_url:id});

  if(url){
    res.redirect(url.full_url);
  }else{
    res.status(404).send("url not found");
  }
})


const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
