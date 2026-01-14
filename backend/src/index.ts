import express from "express";
import dotenv from "dotenv";
import { nanoid } from "nanoid";
import connectDB from "./config/mongo.config.js";
import shortUrlRoutes from "./routes/shorturl.route.js";
import { redirectFromShorturl } from "./controller/shorturl.controller.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(
  cors({
      origin:"http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
  })
)
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
app.get("/:id",redirectFromShorturl);


const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
