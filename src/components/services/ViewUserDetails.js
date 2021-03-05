import React, { useState, useEffect } from 'react'
import axios from 'axios';
import DashHeader from './dashboardheader/DashboardHeader';
import Axios from 'axios';
import jwt_decode from 'jwt-decode';

function ViewUserDetails() {

    //state
    const [userDetails, setUserDetails] = useState(['']);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(()=>{
        fetchUser();
    })

     //Fetch API
    //#1 url
    let loginAPI = "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login";
    //#2 headers:
    axios.defaults.headers.common = {
        "X-API-Key": "LAmt7e4YU21vFGBwHT6s4aOdBR040NqE1WUd7XKD",
      };

    const fetchUser = () => {
        axios.post(loginAPI,
            {
                "username" : "Group16",
                "password" : "zVXQBVfv7lDMW9z"
            })
        .then(response => {
            console.log(response)
            setUserDetails({
             userDetails: response.data[0]
            })
        })
        .catch(error => {
            console.log(error)
            setErrorMsg({errorMsg: 'Error Retrieving Data'})
        })
    }


        return (
            <div>
                <DashHeader />
                <div className="container">      
                <div className="row row-content table-responsive-sm">
                    <table className="table table-borderless table-dark">
                        <thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">NRIC</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userDetails ? 
                                userDetails.map(user => 
                                <tr key={user.accountKey}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.nric}</td>
                                    <td>{user.address}</td>                            
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.email}</td>
                                </tr> 
                            ) : (null)
                            }
                            {
                                errorMsg ? <div>{errorMsg}</div> : null
                            } 
                        </tbody>
                    </table>
                </div>
            </div>

            </div>
        )
}

export default ViewUserDetails;
