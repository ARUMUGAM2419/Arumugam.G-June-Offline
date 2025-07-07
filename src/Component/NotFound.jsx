import React from "react";
import { Link } from "react-router-dom"; 
export default function NotFound(){
    return(
        <div className="no">
        <img src="https://media.tenor.com/U5QXJDAXq_AAAAAi/erro.gif"className="noimg" alt="" />
        
        <div className="no1">
           <button> <Link to="/Home" className="no2">home</Link></button>
        </div>
        </div>
    );
}