import { Result } from "../utils/result.js";
import Comment from "../models/comment.js";
import Post from "../models/post.Model.js";

export const createCommentController = async (req, res,next) =>{
    try {
        const { comment,post_id } =req.body;
        const post = await Post.findById(post_id);

        const commentt = new Comment({
            content:comment,
            post: post_id
        });

        await commentt.save();
        post?.comments.push(commentt);
        await post?.save();

        Result(res,"success");
    } catch (error) {
        next(error);
    }
};
