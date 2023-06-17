import express from "express";
import * as commentController from "../controllers/comment.Controller.js";
const router = express.Router();

router.post("/create",commentController.createCommentController);

export default router;
