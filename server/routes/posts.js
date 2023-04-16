const { createPost, createComment, getAllPosts, getPostById } = require('../controller/posts')

const router = require('express').Router() 

router.get('/' , getAllPosts)

router.get('/:id' , getPostById)

router.post('/', createPost);

router.post('/:postId/addComment', createComment);

module.exports = router