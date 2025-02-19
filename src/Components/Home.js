import React, { useState } from 'react'
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Feed } from './Feed';
import { Rightbar } from './Rightbar';
import './Home.css'
import { Profile } from './Profile';
export const Home = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [profilePic, setProfilePic] = useState(localStorage.getItem('profilePic') || '/assets/person/7.jpeg');
  return (
    <>
      <Navbar onProfileClick={()=>setShowProfile(!showProfile)} profilePic={profilePic}/>
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        {showProfile ? <Profile profilePic={profilePic} setProfilePic={setProfilePic}/>:<Rightbar/>}
        {/* <Rightbar/> */}

      </div>
    </>
  )
}
