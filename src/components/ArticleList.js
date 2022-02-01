import React from 'react';
import Article from './Article';

function ArticleList({blogData}) {
  return (
    <main>
      {blogData.posts.map((post)=>{
        return (
          <Article key={post.id}
          // id = {post.id}
          // title = {post.title}
          // date = {post.date}
          // preview = {post.preview}
          // minutes = {post.minutes}
          {...post}
          />
        )
      })}
    </main>
  )
}

export default ArticleList;
