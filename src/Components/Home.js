import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        This is Home.js
        <Link to="/"><button className='btn btn-primary'>Home</button></Link>
    </div>
  )
}
