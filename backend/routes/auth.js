import express from "express";
import { register, login, logout, verifyToken } from "../controllers/auth.js";


const router = express.Router();
router.use(express.json());

router.post("/register", register)
router.post("/login", login);

router.post("/logout", logout)
router.post("/verify", async (req, res) => {
    let response = await verifyToken(req.body.localStorage)
    res.send(response)
})

export default router;