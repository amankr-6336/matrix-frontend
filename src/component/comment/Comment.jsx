import React from 'react'
import './Comment.scss'
import AuthorInfo from '../authorInfo/AuthorInfo'

function Comment({comment}) {
  return (
    <div className="comment-container">
        <AuthorInfo name={comment?.commentedBy?.userName} />
        <p id='text'>{comment.text}</p>
    </div>
  )
}

export default Comment