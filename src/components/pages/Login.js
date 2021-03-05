import React, { useState, useEffect } from 'react';
import { Input } from 'reactstrap';
import axios from 'axios';
import './login.styles.css';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeNavbar from './navigationbar/NavBarComponent';
// import jwt from 'jsonwebtoken';

function Login() {
    
    const history = useHistory();

    //states:
    const [userLogin, setUserLogin] = useState('');
    const [pwdLogin, setPwdLogin] = useState('');

    //const [loginStatus, setLoginStatus] = useState('');

    // useEffect(()=>{
    //     if(localStorage.getItem('token'))
    //     {
    //         history.push('./user-details')
    //     }
    // },[])

    //url
    let loginAPI = "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login";
    
    //headers:
    axios.defaults.headers.common = {
        "X-API-Key": "LAmt7e4YU21vFGBwHT6s4aOdBR040NqE1WUd7XKD",
      };

    //LoginFunction:
    const handleLogin = () => {
        axios.post(loginAPI,
            {
                "username" : "Group16",
                "password" : "zVXQBVfv7lDMW9z"
            }).then((response)=> {
                console.log(response);
            }).catch((error)=>{
                console.log(error);
            })
    }

    return (
        <>
        <Router>
        <HomeNavbar />
        <div className="login-body">
            <div className="login-bg">
                {/* <div><img src={logo} alt={logo} height="200" width="80" /></div> */}
            
                <div className="login-form">
                    <div>
                        <Input className="login-input"
                            type="text"
                            placeholder="Username"
                            onChange={(event)=>{
                                setUserLogin(event.target.value)
                            }}                             
                            />
                    </div>
                    <div>
                        <Input className="login-input"
                            type="password"
                            placeholder="Password"  
                            onChange={(event)=>{
                                setPwdLogin(event.target.value)
                            }}                      
                        />
                    </div>
                    <div>
                        <button type="submit" value="submit" className="submit-loginform" onClick={handleLogin}>Sign in</button>
                        {/* <Link to="/register"><button className="forgot">Forgot Password?</button></Link> */}
                    </div>
                    <div>
                        <div><p className="forgot">Forgot Password?</p></div>
                    </div>
                </div>

            </div>

        </div>
        </Router>
        </>
    );
}

export default Login;