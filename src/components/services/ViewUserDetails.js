import React, { useState } from 'react'
import axios from 'axios';
import DashHeader from './dashboardheader/DashboardHeader';
import jwt_decode from 'jwt-decode';

function ViewUserDetails() {

    //state
    const [userDetails, setUserDetails] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    //decode
    const user = localStorage.getItem("token");
    const decoded = jwt_decode(user);
    console.log(decoded);
    console.log(decoded.response.data);

     //Fetch API
    //#1 url
    let loginAPI = "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login";
    //#2 headers:
    axios.defaults.headers.common = {
        "X-API-Key": "LAmt7e4YU21vFGBwHT6s4aOdBR040NqE1WUd7XKD",
      };

    async function fetchUser() {
        axios.post(loginAPI,
            {
                "accountKey":"4cb6dbea-a84c-4b29-ad43-2c69182681ab"
            })
        .then(response => {
            console.log(response)
            setUserDetails(decoded.response.data)
            localStorage.setItem("token")
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
                <div className="row row-content table-striped table-responsive-sm">
                    <table className="table">
                        <thead className="thead-dark">
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
                            <tr>
                                <td>{decoded.response.data.firstName}</td>
                                <td>{decoded.response.data.lastName}</td>
                                <td>{decoded.response.data.nric}</td>
                                <td>{decoded.response.data.address}</td>                            
                                <td>{decoded.response.data.phoneNumber}</td>
                                <td>{decoded.response.data.email}</td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
            </div>

            </div>
        )
}

export default ViewUserDetails;
