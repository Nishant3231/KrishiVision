const postModel = require("../model/postsModel")
const mongoose = require('mongoose')
const getAllPosts = async(req , res) => {
    try {
        const data = await postModel.find();
        res.status(200).json({data})
    } catch (error) {
       res.status(500).json({msg : "Internal server error"}) 
    }
}

const createPost = async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    
    try {
      const post = new postModel({ title, description , image });
      const newpost = await post.save();
      res.status(201).json({msg : "Inserted successfully" , newpost});
    } catch (err) {
      console.error(err);
      res.status(500).send('Error creating post');
    } 
  };

const createComment = async (req, res) => {
    const postId =  new mongoose.Types.ObjectId(req.params.postId);
    const text = req.body.text;
    
    try {
      const post = await postModel.findById(postId);
      if(!post) return res.status(404).json({msg : "No post with provided ID"})
      post.comments.push({text});
      const newpost = await post.save();
      res.status(200).json({newpost})
    } catch (err) {
      console.error(err);
      res.status(500).send('Error adding comment');
    } 
  }

module.exports = {createPost , createComment , getAllPosts}