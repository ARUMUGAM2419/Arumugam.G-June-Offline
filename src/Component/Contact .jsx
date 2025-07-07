import React from "react";
import img from "../gray3.jpg";
export default function Contact (){
    return(
        <div className="ca">
            <img src={img}className="co" alt="" />
            <div className="ca1">
                <h1>Contact Us</h1>
            </div>
            <div className="cabut1">
                <button>Learn More</button>
            </div>
            <div>
                <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-icon-png-image_6315986.png" alt="" id="caimg1"/>
            </div>
            <div>
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/698/non_2x/facebook-logo-facebook-icon-transparent-free-png.png" id="caimg2" alt="" />
            </div>
            <div>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/572/small/youtube-logo-youtube-icon-transparent-free-png.png" id="caimg3" alt="" />
            </div>
        </div>
    );
}