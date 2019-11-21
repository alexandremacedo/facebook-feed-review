import React from 'react'

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
    </div>
  )
}

export default PostItem