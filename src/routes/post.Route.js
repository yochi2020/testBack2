import express from "express";
import * as postController from "../controllers/post.Controller.js";
const router = express.Router();

router.get("/list",postController.listPostController);
router.post("/create",postController.createPostController);

export default router;
