const { createPost, createComment, getAllPosts } = require('../controller/posts')

const router = require('express').Router() 

router.get('/' , getAllPosts)

router.post('/', createPost);

router.post('/:postId/addComment', createComment);

module.exports = router