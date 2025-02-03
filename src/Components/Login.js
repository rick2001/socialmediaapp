import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import './Login.css'
import { signUpUser } from '../redux/counter/counterSlice';
export const Login = () => {
    const userDetails = useSelector(state=>state.counter.userDetails)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [logInData, setLoginData] = useState({ userId: "", userPassword: "" })
    const [signUpData, setSignUpData] = useState({ userId: "", userPassword: "" })
    // const [userDetails, setUserDetails] = useState([
    //     {
    //         userId: "monojitpalit4@gmail.com",
    //         password: "12345"
    //     },
    //     {
    //         userId: "koly4@gmail.com",
    //         password: "12345"
    //     }
    // ])

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
        // setUserDetails([...userDetails, signUpData])
        // setUserDetails(prevUserDetails => {
            //     const updatedUsers = [...prevUserDetails, { userId: signUpData.userId, password: signUpData.userPassword }];
            //     console.log("Updated Users: ", updatedUsers); // Check if user is added
            //     return updatedUsers;
            // });
            dispatch(signUpUser(signUpData));
            console.log(userDetails);
            alert("signed up successfully");
            setIsLogin(true);
            console.log(signUpData);
    }
    return (
        <div className='container'>
            <div className="form-container">
                <div className="form-toggle">
                    <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>SignUp</button>
                </div>
                {isLogin ?
                    <>
                        <div className='form'>
                            <h2>Login Form</h2>
                            <input type="email" id='userId' name='userId' value={logInData.userId} placeholder='Email' onChange={handleOnclickLogin} />
                            <input type="password" id='userPassword' name='userPassword' value={logInData.userPassword} placeholder='Password' onChange={handleOnclickLogin} />
                            {/* <a href="#">Forget Password?</a> */}
                            <button onClick={handleLogin}>Login</button>
                        </div>
                    </> : <>
                        <div className='form'>
                            <h2>SignUp Form</h2>
                            <input type="email" id='userId' name='userId' value={signUpData.userId} placeholder='Email' onChange={handleOnClickSignUp} />
                            <input type="password" id='userPassword' name='userPassword' value={signUpData.userPassword} placeholder='Password' onChange={handleOnClickSignUp} />
                            <button onClick={handleSignUp}>SignUp</button>
                        </div>

                    </>}
            </div>
        </div>
    )
}
