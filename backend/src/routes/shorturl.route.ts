import { Router } from "express";
import { createShorturl } from "../controller/shorturl.controller.js";

const router=Router();
router.post("/create",createShorturl);

export default router;