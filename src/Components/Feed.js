import React from 'react'
// import { Posts } from '../dummyData'
import './Feed.css'
import { Share } from './Share'
import { Post } from './Post'
import { useSelector } from 'react-redux'


export const Feed = ({profilePic}) => {
  const Posts = useSelector(state=>state.counter.Posts);
  console.log("This is feed.js",Posts);
  
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share profilePic={profilePic}/>
        {Post.length > 0 ? Posts.map((post) => (
          <Post key={post.id} post={post} profilePic={profilePic}/>
        )) : <h1>No Post Present</h1>}
      </div>
    </div>
  )
}
