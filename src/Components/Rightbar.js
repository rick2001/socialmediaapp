import React from 'react'
import './Rightbar.css'
// import { Users } from '../dummyData'
import { Online } from './Online'
import { useSelector } from 'react-redux'
export const Rightbar = ({ profile }) => {
  const Users = useSelector(state => state.counter.Users)
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/gift.png" alt="" />
          <span className='birthdayText'>
            <b>Amit Majhi</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className='rightbarAd' src="assets/celebration.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Kolkata</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">India</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className="rightbarFollowing">
          <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className='rightbarFollowingName'>Aniket Chakraborty</span>
        </div>

        <div className="rightbarFollowing">
          <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className='rightbarFollowingName'>Aniket Chakraborty</span>
        </div>

        <div className="rightbarFollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className='rightbarFollowingName'>Aniket Chakraborty</span>
        </div>

        <div className="rightbarFollowing">
          <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className='rightbarFollowingName'>Aniket Chakraborty</span>
        </div>

        <div className="rightbarFollowing">
          <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className='rightbarFollowingName'>Aniket Chakraborty</span>
        </div>

        <div className="rightbarFollowing">
          <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
          <span className='rightbarFollowingName'>Aniket Chakraborty</span>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/gift.png" alt="" />
          <span className='birthdayText'>
            <b>Amit Majhi</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className='rightbarAd' src="assets/celebration.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  )
}
