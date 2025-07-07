import React from "react";
import { Link } from "react-router-dom";
export default function Login(){
    return(
       
        <div className="container1">

            <div className="container11">
                <h1>login page</h1>
                <label htmlFor="username">username:</label>
                <input type="text" placeholder="Enter the username" id="username" required/><br /><br /><br />
                <label htmlFor="">password:</label>
                <input type="password" placeholder="Enter Password" /><br /><br /><br />
                <button><Link to="/Home" className="container111">sign in</Link></button>

            </div>

        </div>
    );
}