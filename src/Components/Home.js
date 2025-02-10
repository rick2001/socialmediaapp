import React from 'react'
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Feed } from './Feed';
import { Rightbar } from './Rightbar';
import './Home.css'
export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar/>

      </div>
    </div>
  )
}
