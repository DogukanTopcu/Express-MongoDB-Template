import express from "express";
import { get } from "../controllers/_control.js";

const router = express.Router();

router.get("/get", get);


export default router;