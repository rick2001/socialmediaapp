import React from 'react'
import './Online.css'
export const Online = ({user}) => {
    return (
        <div>
            <li className="righbarFriend">
                <div className="rightbarProfileImgContainer">
                    <img className='rightbarProfileImg' src={user.profilePicture} alt="" />
                    <span className='rightbarOnline'></span>
                </div>
                <span className='rightbarUsername'>{user.username}</span>
            </li>
        </div>
    )
}
