import React, { useState } from 'react'
import { MoreVert } from "@mui/icons-material"
import "./Post.css"
import { useSelector } from 'react-redux'
import { Users } from '../dummyData'
export const Post = ({ post }) => {
    // const dummy = useSelector(state=>state.counter.Users)
    // console.log("This is dummy users Data-> ", Users);
    
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const likeHandler = ()=>{
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked);
    }

    // console.log("***********debugging**********")
    // console.log("This is post from post.js",post);
    // const checkData = dummy.filter((ele)=>ele.id===post.userId);
    // console.log("This is checkData from post.js",checkData);


     // Filter the user and get the first element
     const user = Users.filter((user) => user.id === post.userId)[0];
     console.log(user);
     
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        {/* <img className='postProfileImg' src={Users.filter((user) => user.id === post.userId)[0].profilePicture} alt="" /> */}
                        <img className='postProfileImg' src={user?.profilePicture} alt="" />
                        {/* {console.log("Post.js filter condition check",Users.filter((user) => user.id === post.userId)[0].profilePicture)} */}
                        {/* <span className="postUserName">{Users.filter((user) => user.id === post.userId)[0].username}</span> */}
                        <span className="postUserName">{user?.username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={post.photo} alt="Post media" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/like.png" alt="" onClick={likeHandler} />
                        <img className='likeIcon' src="/assets/heart.png" alt="" onClick={likeHandler}/>
                        <span className='postLikeCounter'>{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
