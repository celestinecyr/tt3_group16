import React, { Component } from 'react'
import axios from 'axios';
import DashHeader from './dashboardheader/DashboardHeader';
import Axios from 'axios';
import jwt_decode from 'jwt-decode';

function ViewUserDetails() {

    const user = localStorage.getItem("token");
    const decoded = jwt_decode(user);
    console.log(decoded);

    // useEffect(() => {
    //     fetchUserDetails()
    // })

    // const fetchUserDetails() => {
    //    Axios.post("http://localhost:3000/login")
    //    {
    //        id:decoded.id
    //    }).then((response)=>{
    //        if(respose) {
    //            console.log(response)
    //        }
    //    })
    // }
        return (
            <div>
                <DashHeader />

            </div>
        )
}

export default ViewUserDetails;
