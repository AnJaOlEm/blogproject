import express from "express";
import { authenticate } from "../controllers/auth.js";

const router = express.Router();

router.get("/auth", authenticate)

export default router;