import React from 'react'
import './Sidebar.css';
import { RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from "@mui/icons-material"
// import { Users } from '../dummyData';
import { FavFriend } from './FavFriend';
import { useSelector } from 'react-redux';
export const Sidebar = () => {
    const Users = useSelector(state => state.counter.Users);
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">

                    <li className="sidebarListItem">
                        <RssFeed className='sidebarIcon' />
                        <span className="sidebarListItemText">Feed</span>
                    </li>

                    <li className="sidebarListItem">
                        <Chat className='sidebarIcon' />
                        <span className="sidebarListItemText">Chats</span>
                    </li>

                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className='sidebarIcon' />
                        <span className="sidebarListItemText">Videos</span>
                    </li>

                    <li className="sidebarListItem">
                        <Group className='sidebarIcon' />
                        <span className="sidebarListItemText">Group</span>
                    </li>

                    <li className="sidebarListItem">
                        <Bookmark className='sidebarIcon' />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>

                    <li className="sidebarListItem">
                        <HelpOutline className='sidebarIcon' />
                        <span className="sidebarListItemText">Questions</span>
                    </li>

                    <li className="sidebarListItem">
                        <WorkOutline className='sidebarIcon' />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>

                    <li className="sidebarListItem">
                        <Event className='sidebarIcon' />
                        <span className="sidebarListItemText">Events</span>
                    </li>

                    <li className="sidebarListItem">
                        <School className='sidebarIcon' />
                        <span className="sidebarListItemText">Courses</span>
                    </li>

                </ul>
                <button className='sidebarButton'>Show More</button>
                <hr className='sidebarFriendList' />
                <ul className="sidebarFriendList">

                    {Users.map((user) => (
                        <FavFriend key={user.id} user={user} />
                    ))}


                </ul>
            </div>
        </div>
    )
}
