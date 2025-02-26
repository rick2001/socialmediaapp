import React, { useState } from 'react'
import "./Share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"
import { addPost } from '../redux/counter/counterSlice'
import { useDispatch, useSelector } from "react-redux";


export const Share = ({ profilePic }) => {

  const [file, setFile] = useState(null); // State for storing uploaded file
  const [caption, setCaption] = useState(""); // State for storing post caption
  const dispatch = useDispatch();
  const user = useSelector((state) => state.counter.Users[0]); // Fetching user from Redux state
  console.log("This is share.js", user);
  

  // Function to handle file selection and preview it
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile)); // Generate preview
    }
  };


  // Function to handle posting content
  const handlePost = () => {
    if (!file && !caption.trim()) return; // Preventing posting empty content

    const newPost = {
      id: Math.random(),
      desc: caption,
      photo: file,
      date: "Just now",
      userId: user.id,
      like: 0,
      comment: 0,
      new:"yes"
    };

    dispatch(addPost(newPost)); // dispatching the data to redux store
    setFile(null);
    setCaption("");
  };

  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <img className='shareProfileImg' src={profilePic} alt="Profile pic" />
          {/* <input placeholder="What's in your mind?" className='shareInput' type="text" /> */}
          <input placeholder="What's on your mind?" className="shareInput" type="text" value={caption} onChange={(e) => setCaption(e.target.value)} />
        </div>

        <hr className='shareHr' />

        {/* Image/Video preview before posting */}
        {file && (
          <div className="shareImgContainer">
            <img className="shareImgPreview" src={file} alt="Preview" />
          </div>
        )}

        <div className="shareBottom">
          <div className="shareOptions">

            {/* newly addition for the media upload*/}

            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor='tomato' className='shareIcon' />
              <span className='shareOptionText'>Photo or Video</span>
              <input
                type="file"
                id="file"
                accept="image/*, video/*"
                className="shareFileInput"
                onChange={handleFileChange}
              />
            </label>

            {/* <div className="shareOption">
              <PermMedia htmlColor='tomato' className='shareIcon' />
              <span className='shareOptionText'>Photo or Video</span>
            </div> */}


            <div className="shareOption">
              <Label htmlColor='blue' className='shareIcon' />
              <span className='shareOptionText'>Tag</span>
            </div>

            <div className="shareOption">
              <Room htmlColor='green' className='shareIcon' />
              <span className='shareOptionText'>Location</span>
            </div>

            <div className="shareOption">
              <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
              <span className='shareOptionText'>Feelings</span>
            </div>
          </div>
          <button className='shareButton' onClick={handlePost}>Share</button>
        </div>
      </div>
    </div>
  )
}
