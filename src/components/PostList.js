import React, { Component } from 'react'

import PostItem from './PostItem';

class PostList extends Component {
  state={
    posts: [
      {
        id: 1,
        author: {
          avatar: 'https://i.pravatar.cc/150?img=1',
          name: 'Helena Macedo',
        },
        date: '20 Nov 2019',
        content: 'Este é meu primeiro post',
        comments: [
          {
            id: 1,
            author: {
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
              name: 'Diego Oliveira',
            },
            date: '21 Nov 2019',
            content: 'Meu primeiro comentário'
          },
        ]
      },
      {
        id: 2,
        author: {
          avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
          name: 'Diego Oliveira',
        },
        date: '20 Nov 2019',
        content: 'Este é meu segundo post',
        comments: [
          {
            id: 1,
            author: {
              avatar: 'https://i.pravatar.cc/150?img=1',
              name: 'Helena Macedo',
            },
            date: '21 Nov 2019',
            content: 'Meu primeiro comentário'
          },
          {
            id: 2,
            author: {
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
              name: 'Diego Oliveira',
            },
            date: '21 Nov 2019',
            content: 'Meu segundo comentário'
          }
        ]
      }, 
    ]
  }

  render(){

    const { posts } = this.state

    return (
        <div className="postlist">
          {posts.map(post => (
            <PostItem key={post.id} {...post} />
          ))}
      </div>
    )
  }

} 

export default PostList
