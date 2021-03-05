import React, { useState, useEffect } from 'react';
import { Input } from 'reactstrap';
// import Axios from 'axios';
import './login.styles.css';
// import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeNavbar from './navigationbar/NavBarComponent';
// import jwt from 'jsonwebtoken';

function Login() {
    
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
                            />
                    </div>
                    <div>
                        <Input className="login-input"
                            type="password"
                            placeholder="Password"                       
                        />
                    </div>
                    <div>
                        <button type="submit" value="submit" className="submit-loginform">Sign in</button>
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