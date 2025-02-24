import React from 'react';
import './Profile.css';

export const Profile = ({ profilePic, setProfilePic }) => {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                const base64String = reader.result;
                setProfilePic(base64String);
                localStorage.setItem('profilePic', base64String); // Saving in local storage
            };
        }
    };

    return (
        <div className="profile">
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img className='profileCoverImg' src="assets/post/3.jpeg" alt="cover" />
                        <img className='profileUserImg' src={profilePic} alt="profilepic" />
                    </div>

                    <div className="profileInfo">
                        <h4 className='profileInfoName'>Monojit Palit</h4>
                        <span className='profileInfoDesc'>Hello my friends!</span>
                    </div>

                    {/* <input type='file' accept='image/*' onChange={handleFileChange}/> */}
                    <input type="file" id="fileInput" accept="image/*" onChange={handleFileChange} />
                    <label htmlFor="fileInput" className="fileUploadLabel">Change Profile Pic</label>

                </div>
                <div className="profileRightBottom">
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
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className='rightbarFollowingName'>Riya Sen</span>
                        </div>

                        <div className="rightbarFollowing">
                            <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className='rightbarFollowingName'>Aniket Chakraborty</span>
                        </div>

                        <div className="rightbarFollowing">
                            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className='rightbarFollowingName'>Puja Maity</span>
                        </div>

                        <div className="rightbarFollowing">
                            <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className='rightbarFollowingName'>Anilisha Sen</span>
                        </div>

                        <div className="rightbarFollowing">
                            <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                            <span className='rightbarFollowingName'>Sneha Patro</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};