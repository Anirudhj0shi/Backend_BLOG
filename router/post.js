import express from "express";
import {
  addPost,
  getPostById,
  getPosts,
  updatePost,
} from "../controllers/post.js";
import { Authenticate } from "../middlewares/auth.js";

export const postRouter = express.Router();

postRouter.post("/addpost", Authenticate, addPost);

postRouter.get("/posts", getPosts);

postRouter.get("/post/:id", getPostById);

postRouter.put("/post/:id", Authenticate, updatePost);
