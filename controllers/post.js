import {Post} from '../Models/Post.js'

export const addPost = async(req,res) => {
    const {title,description,imgUrl} = req.body;
    const post  = await Post.create({
        title,
        description,
        imgUrl,
        user: req.user
    });

    res.json({message:"Post Uploaded..! :)",post})
}

export const getPosts = async(req,res) => {
    const posts = await Post.find();

    if(posts.length == 0) return res.json({message:"no posts.."})

    res.json({posts});

}

export const updatePost = async(req,res) => {
    const id = req.params.id;
    
    const {title, description , imgUrl} = req.body;

    let post = await Post.findById(id);
    
    if(!post) return res.json({message:"invalid Id"});
    post.title = title,
    post.description = description,
    post.img = imgUrl

    await post.save();

    res.json({message:"Your post have been updated..!",post});
 };

export const deletePost = () => {}

export const getPostById = async(req,res) => {
    const id = req.params.id

    let post = await Post.findById(id)

    if(!post) return res.json({message:"Post does not exist . . . !"})

    res.json({post}); 
}