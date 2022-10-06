import express from "express";
import { verifyToken } from "../controllers/auth.js";
import { listUsers, getUsers, getUserByJwt, getUser } from "../controllers/user.js";

const router = express.Router();


router.post('/find', getUsers)
router.get("/findByJwt", getUserByJwt)
router.get("/getuser/:id", getUser)

export default router;