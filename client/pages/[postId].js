import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import CommentsSection from '../components/CommentsSection'
export default function Post() {
    
const router = useRouter()

const [post , setPost] = useState()

  useEffect(()=>{
    const { postId } = router.query
    axios.get(`http://localhost:5000/posts/${postId}/`)
    .then(response => setPost(response.data.data))
    .catch(error => console.log(error))
  }, [router.isReady])

  if(!post) return <div> No such post </div>

  return (
    <div>
        <div>{post.title}</div>
        <div>{post.description}</div>
        <div><img src={post.image}/></div>
        <div>
            <CommentsSection id={post._id} comments={post.comments} setPost={setPost}/>
        </div>
    </div>
  )
}
