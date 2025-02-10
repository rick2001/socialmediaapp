import React from 'react'

import './Feed.css'
import { Share } from './Share'
import { Post } from './Post'
export const Feed = () => {
  return (
    <div className='feed'>
        <div className="feedWrapper">
          <Share/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
    </div>
  )
}
