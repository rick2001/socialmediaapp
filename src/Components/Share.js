import React, { useState } from 'react'
import "./Share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"
import { addPost } from '../redux/counter/counterSlice'
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';


export const Share = ({ profilePic }) => {

  const [file, setFile] = useState(null); // State for storing uploaded file
  const [caption, setCaption] = useState(""); // State for storing post caption
  const dispatch = useDispatch();
  const user = useSelector((state) => state.counter.Users[0]); // Fetching user from Redux state
  // console.log("This is share.js", user);
  

  // Function to handle file selection and preview it
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile)); // Generate preview
    }
  };


  const formatDate = () => {
    const date = new Date();
    // date
    const day = String(date.getDate()).padStart(2, "0"); // dd
    const month = String(date.getMonth() + 1).padStart(2, "0"); // mm
    const year = String(date.getFullYear()).slice(-2); // yy


    // time
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours > 12 ? "pm":"am"
    hours = hours>12? hours%12 : hours
    return `${day}/${month}/${year} ${hours}.${minutes} ${ampm}`; // Only date
  };


  // Function to handle posting content
  const handlePost = () => {
    if (!file && !caption.trim()) return; // Preventing posting empty content

    const newPost = {
      id: Math.random(),
      desc: caption,
      photo: file,
      date: formatDate(),
      // userId: user.id,
      userId: 100,
      like: 0,
      comment: 0,
      new:"yes"
    };

    dispatch(addPost(newPost)); // dispatching the data to redux store
    toast.success("Posted Successfully!",{
      autoClose: 1000
    })
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
