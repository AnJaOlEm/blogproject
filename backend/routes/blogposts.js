import express from "express";
import { getAllPosts, createPost, getPost, deletePost } from '../controllers/blogpost.js'

const router = express.Router();


router.get("/all", getAllPosts)
router.post("/test", createPost)
router.get("/:id", getPost)
router.delete("/:id", deletePost)

export default router;