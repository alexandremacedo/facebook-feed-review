import React from 'react'
import CommentItem from './CommentItem'

function PostHeader({ author, date }){
  return(
    <div className="post-header">
      <img className="avatar" src={author.avatar}/>
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  )
}

function PostItem({ author, date, content, comments }){
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <CommentItem comments={comments}/>
    </div>
  )
}

export default PostItem