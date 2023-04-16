import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function CommentsSection({id , comments , setPost }) {
    const [comment , setComment] = useState()
    const [commentList , setCommentList] = useState()
    const submitComment =(e) =>{
        e.preventDefault()
        console.log(comment)
        axios.post(`http://localhost:5000/posts/${id}/addComment` , {text : comment})
        .then(response => setCommentList(response.data.newpost.comments))
        .catch(error => console.log(error))
        setComment("")
    }
    useEffect(()=>{
        setCommentList(comments)
    },[])
  return (
    <div>
        <div>CommentsSection</div>
        <div>
            <input value={comment} placeholder='addComment' onChange={e => setComment(e.target.value)}/>
            <button onClick={e => submitComment(e)}>Add Comment</button>
        </div>
        <div>
            {commentList?.map(c =>{
                return(
                    <div> {c.text} </div>
                )
            })}
        </div>
    </div>
  )
}
