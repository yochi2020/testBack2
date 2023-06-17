import express from "express";
import postRoute from "./post.Route.js";
import commentRoute from "./comment.Route.js";
const router = express.Router();

router.use("/post",postRoute);
router.use("/comment",commentRoute);

export default router;
