import React, { useState } from 'react';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import dbslogo from '../../images/dbslogo.svg';
import './dashheader.styles.css'
import { Jumbotron } from 'reactstrap';
import jwt_decode from 'jwt-decode';

export default function DashHeader() {
    
    //const
    const history = useHistory(); 
    const [username, setUsername]= useState('')
   
    function logOut()
    {
        localStorage.clear();
        history.push('/')
        window.location.reload();
    }

    const user = localStorage.getItem("token");
    const decoded = jwt_decode(user);
    console.log(decoded.id.usernameLogin);

        return (
            <>
                <nav className="navbar">
                    <div className="navbar-container">
                        <div className="logo">
                            <Link to='/' className='dashnavbar-logo'>
                                <img src={dbslogo} height="60" alt="logo" />
                            </Link>
                        </div>

                        <ul className='nav-item'>
                            <Link to='/user-details' className='nav-links' >User Details</Link>
                        </ul>

                        <ul className='nav-item'>
                            <Link to='/transaction' className='nav-links' >Transaction</Link>
                        </ul>

                        <ul className='nav-item'>
                            <Link to='/transfer' className='nav-links' >Transfer & Balance</Link>
                        </ul>

                        <ul className='nav-item'>
                            <Link to='/' className='nav-links' onClick={logOut}>Logout</Link>
                        </ul>
                    </div>
                </nav>


                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <div>
                                    <h1>Welcome {decoded.id.username}, </h1>
                                    <h1>DBS iBanking</h1>
                                    <p>can insert stuff here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        )
    }
