import express from "express";
import dotenv from "dotenv";
import { nanoid } from "nanoid";
import shortUrlSchema from "./models/shorturl.model.ts"

const app = express();

app.use(express.json());

dotenv.config();

app.get("/", (req, res) => {
//   res.send("OK");
res.send(nanoid(7));
});

//creat api for new url
app.post("/api/create",(req,res)=>{
    const {url}=req.body;
    shortUrl=nanoid(7);
    const newUrl=new shortUrlSchema({
        full_url:url,
        short_url:shortUrl
}) 


const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
