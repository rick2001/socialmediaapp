import React from 'react'
// import { Posts } from '../dummyData'
import './Feed.css'
import { Share } from './Share'
import { Post } from './Post'
import { useSelector } from 'react-redux'
export const Feed = () => {
  const Posts = useSelector(state=>state.counter.Posts);
  console.log("This is feed.js",Posts);
  
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post}/>
        ))}

      </div>
    </div>
  )
}
