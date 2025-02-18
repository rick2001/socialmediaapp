import React from 'react'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Navbar = ({onProfileClick, profilePic}) => {

  const navigate = useNavigate();

  const handleLogOut = ()=>{
    navigate("/")
  }
  return (
    <div className='topbarContainer'>
      
      <div className="topbarLeft">
        <Link to="/home"><span className="logo">SocialMedia</span></Link>
      </div>

      
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input placeholder='Search for friend, post or video' className="searchInput" />
        </div>
      </div>

      
      <div className="topbarRight">
        <div className="topbarLinks">
         <Link to="/home"><span className="topbarLink">Homepage</span></Link> 
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>

          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>


        <img onClick={onProfileClick} src={profilePic} alt="Profile" className="topbarImg" />
        <Button variant="contained" color="secondary" className="logoutButton" onClick={handleLogOut}>
          Logout
        </Button>
      </div>
    </div>
  )
}