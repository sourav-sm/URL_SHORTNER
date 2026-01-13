import express from "express";
import dotenv from "dotenv";
import { nanoid } from "nanoid";
import connectDB from "./config/mongo.config.js";
import short_url from "./models/shorturl.model.js";
import shortUrlRoutes from "./routes/shorturl.route.js";


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
app.use("/api",shortUrlRoutes);

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
