import {Post} from '../Models/Post.js'

export const addPost = async(req,res) => {
    const {title,description,imgUrl} = req.body;
    const post  = await Post.create({
        title,
        description,
        imgUrl,
        user:"65968d1cae8bc960ff4990d6"
    });

    res.json({message:"Post Uploaded..! :)",post})
}

export const getPosts = () => {}

export const updatePost = () => {}

export const deletePost = () => {}

export const getPostById = () => {}