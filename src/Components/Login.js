import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Login.css'
import { resetUserPassword, signUpUser } from '../redux/counter/counterSlice';
export const Login = () => {
    const userDetails = useSelector(state => state.counter.userDetails)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [isResetPassword, setIsResetPassword] = useState(false);
    const [logInData, setLoginData] = useState({ userId: "", userPassword: "" })
    const [signUpData, setSignUpData] = useState({ userId: "", userPassword: "" })
    const [resetData, setResetData] = useState({ userId: "", newPassword: "" });


    const handleOnclickLogin = (e) => {
        setLoginData({ ...logInData, [e.target.id]: e.target.value })
    }

    const handleLogin = () => {
        console.log(logInData);
        console.log(userDetails);

        const index = userDetails.findIndex((ele) => ele.userId === logInData.userId)
        if (index !== -1) {
            if (userDetails[index].userPassword === logInData.userPassword) {
                navigate("/home");
            }
            else {
                alert("Invalid Password!")
            }
        }
        else {
            alert("Invalid Credentials! Please Sign Up")
        }

    }

    const handleOnClickSignUp = (e) => {
        setSignUpData({ ...signUpData, [e.target.id]: e.target.value });
    }

    const handleSignUp = () => {
        console.log(signUpData);
        dispatch(signUpUser(signUpData));
        console.log(userDetails);
        alert("signed up successfully");
        setIsLogin(true);
        console.log(signUpData);
    }


    const handleOnClickReset = (e) => {
        setResetData({ ...resetData, [e.target.id]: e.target.value })
    }

    const handleResetPassword = () => {
        console.log(resetData);
        const index = userDetails.findIndex((ele) => ele.userId === resetData.userId);
        if (index !== -1) {
            dispatch(resetUserPassword(resetData));
            alert("Password changed successfully")
            setResetData({ userId: "", newPassword: "" })
            console.log(userDetails);
        }
        else{
            alert("Mail not found in database!")
            setResetData({ userId: "", newPassword: "" })
        }


    }



    return (
        <div className='container'>
            <div className="form-container">
                <div className="form-toggle">
                    <button className={isLogin ? "active" : ""} onClick={() => { setIsLogin(true); setIsResetPassword(false); }}>Login</button>
                    <button className={!isLogin ? "active" : ""} onClick={() => { setIsLogin(false); setIsResetPassword(false); }}>SignUp</button>
                </div>
                {!isResetPassword ? (
                    isLogin ? (
                        <>
                            <div className='form'>
                                <h2>Login Form</h2>
                                <input type="email" id='userId' name='userId' value={logInData.userId} placeholder='Email' onChange={handleOnclickLogin} />
                                <input type="password" id='userPassword' name='userPassword' value={logInData.userPassword} placeholder='Password' onChange={handleOnclickLogin} />
                                <button className="forgot-password" onClick={() => setIsResetPassword(true)}>Forget Password?</button>
                                <button onClick={handleLogin}>Login</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='form'>
                                <h2>SignUp Form</h2>
                                <input type="email" id='userId' name='userId' value={signUpData.userId} placeholder='Email' onChange={handleOnClickSignUp} />
                                <input type="password" id='userPassword' name='userPassword' value={signUpData.userPassword} placeholder='Password' onChange={handleOnClickSignUp} />
                                <button onClick={handleSignUp}>SignUp</button>
                            </div>
                        </>
                    )
                ) : (
                    <>
                        <div className='form reset-password-container'>
                            <h2>Reset Password</h2>
                            <input type="email" id='userId' name='userId' value={resetData.userId} placeholder='Enter your Email' onChange={handleOnClickReset} />
                            <input type="password" id='newPassword' name='newPassword' value={resetData.newPassword} placeholder='Enter New Password' onChange={handleOnClickReset} />
                            <button onClick={handleResetPassword}>Confirm Reset</button>
                            <button className="back-button" onClick={() => setIsResetPassword(false)}>Back to Login</button>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}
