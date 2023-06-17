import { Result } from "../utils/result.js";
import Post from "../models/post.Model.js";

export const listPostController = async (req, res,next) =>{
    try {
        const listPost = await Post.find({}).populate("comments");
        Result(res,listPost);
    } catch (error) {
        next(error);
    }
};

export const createPostController = async (req, res,next) =>{
    try {
        const { title } =req.body;
        const newPost = await Post.create({
            title:title,
        });
        Result(res,newPost);
    } catch (error) {
        next(error);
    }
};