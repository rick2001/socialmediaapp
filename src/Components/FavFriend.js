import React from 'react'
import "./FavFriend.css"
export const FavFriend = ({user}) => {
    return (
        <div>
            <li className="sidebarFriend">
                <img className='sidebarFriendImg' src={user.profilePicture} alt="sidebarImage" />
                <span className="sidebarFriendName">{user.username}</span>
            </li>
        </div>
    )
}
