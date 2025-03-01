import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { resetUserPassword, signUpUser } from '../redux/counter/counterSlice';
import './Login.css'
import { toast } from 'react-toastify';
import { Eye, EyeOff } from "lucide-react"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
export const Login = () => {
    // const userDetails = useSelector(state => state.counter.userDetails)
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [isResetPassword, setIsResetPassword] = useState(false);
    const [logInData, setLoginData] = useState({ userId: "", userPassword: "" })
    const [signUpData, setSignUpData] = useState({ userId: "", userPassword: "", userFirstName: "", userLastName: "", userDateOfBirth: "" })
    const [resetData, setResetData] = useState({ userId: "", newPassword: "" });
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showSignUpPassword, setShowSignUpPassword] = useState(false);
    const [showResetPassword, setShowResetPassword] = useState(false);

    const handleOnclickLogin = (e) => {
        setLoginData({ ...logInData, [e.target.id]: e.target.value })
    }

    const handleLogin = async () => {
        // using json server
        try {
            const response = await fetch(`http://localhost:5000/users?userId=${logInData.userId}&userPassword=${logInData.userPassword}`);
            const data = await response.json();
            console.log("This is data->", data);


            if (data.length > 0) {
                toast.success("Logged in successfully..",
                    { autoClose: 1000 }
                )
                navigate("/home");
            }
            else {
                toast.error("Invalid credentials", {
                    autoClose: 1000
                })
            }
        } catch (error) {
            console.log("Logging error..", error)
            toast.warning("Error connecting to server", {
                autoClose: 1000
            })
        }

        // using redux
        // console.log(logInData);
        // console.log(userDetails);

        // const index = userDetails.findIndex((ele) => ele.userId === logInData.userId)
        // if (index !== -1) {
        //     if (userDetails[index].userPassword === logInData.userPassword) {
        //         navigate("/home");
        //     }
        //     else {
        //         alert("Invalid Password!")
        //     }
        // }
        // else {
        //     alert("Invalid Credentials! Please Sign Up")
        // }

    }


    const handleSignUp = async () => {
        // using json server

        try {
            // checking duplicate mail id
            const checkResponse = await fetch(`http://localhost:5000/users?userId=${signUpData.userId}`);
            const existingUser = await checkResponse.json();

            if (existingUser.length > 0) {
                toast.warning("User already exists! Please login")
                setSignUpData({ userId: "", userPassword: "", userFirstName: "", userLastName: "", userDateOfBirth: "" })
                setIsLogin(true);
                return;
            }

            // create a new user
            const createNewUser = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(signUpData)
            })

            if (createNewUser.ok) {
                toast.success("Signed up successfully! Log in now..", {
                    autoClose: 2500
                })
                setIsLogin(true);
                setSignUpData({ userId: "", userPassword: "", userFirstName: "", userLastName: "", userDateOfBirth: "" })
            }
            else {
                toast.error("Sign up failed", {
                    autoClose: 1000
                })
            }


        } catch (error) {
            console.log("Sign up error", error);
            toast.error("Error signing up!", {
                autoClose: 1000
            })

        }



        // using redux
        // console.log(signUpData);
        // dispatch(signUpUser(signUpData));
        // console.log(userDetails);
        // alert("signed up successfully");
        // setIsLogin(true);
        // console.log(signUpData);
    }


    const handleOnClickReset = (e) => {
        setResetData({ ...resetData, [e.target.id]: e.target.value })
    }


    // auto populating
    const handleForgetPassword = () => {
        if (!logInData.userId) {
            toast.warning("Please enter email first!")
            return;
        }
        setResetData({ userId: logInData.userId, newPassword: "" })
        setIsResetPassword(true);
    }


    // resetting the password
    const handleResetPassword = async () => {
        // using json server
        try {
            if (!resetData.userId || !resetData.newPassword) {
                toast.warning("Please enter value in all the fields!")
                return;
            }
            console.log(resetData);

            const resetUserResponse = await fetch(`http://localhost:5000/users?userId=${resetData.userId}`)
            const data = await resetUserResponse.json();

            if (data.length === 0) {
                toast.error("Email not found!", { autoClose: 1000 })
                return;
            }

            console.log(data);

            const user = data[0];

            const updateResponse = await fetch(`http://localhost:5000/users/${user.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userPassword: resetData.newPassword })
            })

            if (updateResponse.ok) {
                toast.success("Password changed successfully! Please Login", { autoClose: 1000 })
                setResetData({ userId: "", newPassword: "" });
            }
            else {
                toast.error("Failed to reset password!", { autoClose: 1000 })
            }


        } catch (error) {
            console.log("Reset error:", error);
            toast.error("Error resetting password", { autoClose: 1000 })
        }






        // using redux
        // console.log(resetData);
        // const index = userDetails.findIndex((ele) => ele.userId === resetData.userId);
        // if (index !== -1) {
        //     dispatch(resetUserPassword(resetData));
        //     alert("Password changed successfully")
        //     setResetData({ userId: "", newPassword: "" })
        //     console.log(userDetails);
        // }
        // else {
        //     alert("Mail not found in database!")
        //     setResetData({ userId: "", newPassword: "" })
        // }


    }


    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
        return passwordRegex.test(password);
    }


    const handleOnClickSignUp = (e) => {
        const { id, value } = e.target;
        setSignUpData({ ...signUpData, [id]: value });

        if (id === "userPassword") {
            if (!validatePassword(value)) {
                setPasswordError("Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.")
                e.target.style.border = "2px solid red"
            }
            else {
                setPasswordError("");
                e.target.style.border = "1px solid green"
            }
        }
    }


    return (
        <div className='login-container'>
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
                                <div className='password-container'>
                                    <input type={showPassword ? "text" : "password"} id='userPassword' name='userPassword' value={logInData.userPassword} placeholder='Password' onChange={handleOnclickLogin} />
                                    <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                    </span>
                                </div>
                                <button className="forgot-password" onClick={handleForgetPassword}>Forget Password?</button>
                                <button onClick={handleLogin}>Login</button>
                            </div>

                        </>
                    ) : (
                        <>
                            <div className='form'>
                                <h2>SignUp Form</h2>
                                <label className='inputText'>First Name:</label>
                                <input type="text" id='userFirstName' name='userFirstName' value={signUpData.userFirstName} placeholder='Enter your first name' onChange={handleOnClickSignUp} />
                                <label className='inputText'>Last Name:</label>
                                <input type="text" id='userLastName' name='userLastName' value={signUpData.userLastName} placeholder='Enter your last name' onChange={handleOnClickSignUp} />
                                <label className='inputText'>DOB:</label>
                                <input type="date" id='userDateOfBirth' name='userDateOfBirth' value={signUpData.userDateOfBirth} max={new Date().toISOString().split("T")[0]} onChange={handleOnClickSignUp} />
                                <label className='inputText'>Email:</label>
                                <input type="email" id='userId' name='userId' value={signUpData.userId} placeholder='Enter your email id' onChange={handleOnClickSignUp} />
                                <label className='inputText'>Password:</label>
                                <div className='password-container'>
                                    <input type={showSignUpPassword ? "text" : "password"} id='userPassword' name='userPassword' value={signUpData.userPassword} placeholder='Enter your password' onChange={handleOnClickSignUp} />
                                    <span className='eye-icon' onClick={() => setShowSignUpPassword(!showSignUpPassword)}>
                                        {showSignUpPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>

                                <i className="info-icon" title="Must be 8+ characters, include uppercase, lowercase, number & special character">ℹ️</i>
                                {/* <p className="password-hint">Must be 8+ characters, include uppercase, lowercase, number & special character.</p> */}
                                {passwordError && <p className="error-message">{passwordError}</p>}
                                <button onClick={handleSignUp}>SignUp</button>
                            </div>
                        </>
                    )
                ) : (
                    <>
                        <div className='form reset-password-container'>
                            <h2>Reset Password</h2>
                            <input type="email" id='userId' name='userId' value={resetData.userId} placeholder='Enter your Email' onChange={handleOnClickReset} />
                            <div className='password-container'>
                                <input type={showResetPassword ? "text" : "password"} id='newPassword' name='newPassword' value={resetData.newPassword} placeholder='Enter New Password' onChange={handleOnClickReset} />
                                <span className='eye-icon' onClick={() => setShowResetPassword(!showResetPassword)}>
                                    {showResetPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            <button onClick={handleResetPassword}>Confirm Reset</button>
                            <button className="back-button" onClick={() => setIsResetPassword(false)}>Back to Login</button>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}
