import React from "react";
import { Link } from "react-router-dom";
export default function Shop(){
    return(
        <div className="nav">
        <div className="nav1">
        <button><Link to="/" className="nav11">⛔Sign Out</Link></button><br />
        <button><Link to="/Home" className="nav12">🏚️Home</Link></button><br />
        <button><Link to="/Contact " className="nav13">☎️Contact as</Link></button>
        </div>
        <div className="shoe">
            <p><u>EXPLOREX Sneakers</u> </p>
            <img src="https://m.media-amazon.com/images/I/71zmv0KVUML._UY1000_.jpg" alt="" className="shoeimg" />
            </div>
            <div className="shoe1"> 
            <h3>OFF LIMITS Gladiator EXPLOREX Sneakers for Men |</h3> 
            <h3>Lightweight Breathable Comfortable High-Top Shoes for Men|</h3> 
            <h3> Shock-Absorption Technology for Sports, Fashion, Walking, Hiking|</h3>
            <h3>Casual Workout Footwear |</h3>
            <h3> Mens Boots|</h3>
            </div>      
            <div className="shoe2">
                <h1>📌Product details</h1>
                <table>
                    <tr>
                         <td>Material type </td> <td>mesh</td>
                       
                    </tr>
                    <tr>
                          <td>closure type</td>   <td>Lace-Up</td>
                    </tr>
                    <tr>
                          <td>Heel type</td>   <td>No heel</td>
                    </tr>
                    <tr>
                          <td>closure type</td>   <td>Not water resistant</td>
                    </tr>
                </table>

            </div> 
            <div className="sa">
                <button>6 UK</button>
                <button>7 UK</button>
                <button>8 UK</button>
                <button>9 UK</button>
               </div>
               <div className="sa1">
                <h4>Size</h4>
               </div>
               <div className="sa2">
                <h1>In Stock</h1>
               </div>
               <div className="sa3">
                <table>
                    <tr>
                        <td>Delivered by</td> <td>Amazon</td>
                    </tr>
                    <tr>
                        <td>Sold by </td> <td>GLC-OL</td>
                    </tr>
                    <tr>
                        <td>Payment</td> <td>Secure Transaction</td>
                    </tr>
                </table>
               </div>
               <div className="sa4">
                <select>
                <option >Quantity:1</option>
                <option >Quantity:2</option>
                <option >Quantity:3</option>
                <option >Quantity:4</option>
                </select>
               </div>
               <div className="sa5">
                <button>Add To Card</button>
               </div>
               <div className="sa6">
                <button>Payment</button>
               </div>
            <footer >   
                <div className="sa7">
                    <h4>✉arumuganbe007@Email.com</h4>
                    <h4>☎️phone no:9894315541</h4>
                </div>
                <div className="sa8">
                    <button>✚Add To Wish List</button>
                </div>
            </footer>
            <hr className="hr1" />
            <div className="nxt">
                <div className="nxt1">
                    <img src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b0aecb4c-3e97-4080-a944-dcbd89af7ee7/WMNS+AIR+JORDAN+1+RETRO+HI+OG.png"className="nxt1img" alt="" />
                    <h3 className="nxt1h3">Centrino</h3>
                    <h4>Mens Sneaker for Men | Stylish Lace-Up Design | Soft...</h4>
                    <h5>★★★★☆ 4 Rate</h5>
                    <div className="nxt1but">
                    <button>Limted Time Deal</button>
                        <p>₹ 999 M.R.P:₹2000(62% 0ff) </p>
                    </div>
                </div>
                <div className="prime"><h5>✔prime</h5></div>
                <div className="add">
                    <button>Add To Card</button>
                </div>
                <div className="buy">
                    <button>Buy Now</button>
                </div>
            </div>
            <div className="nxt2">
                    <img src="https://assets.vans.com/images/t_img/c_fill,g_center,f_auto,h_488,w_390,e_unsharp_mask:100/dpr_2.0/v1750720239/VN000D9YY9T-HERO/Old-Skool-Shoe.jpg?$PLP-IMAGE$"className="nxt2img" alt="" />
                    <h3 className="nxt1h3">Bruton</h3>
                    <h4>Men's TARZEN-0340 Casual Sneaker Shoes with Synthetic...</h4>
                    <h5>★★★☆☆ 3 Rate</h5>
                    <div className="nxt1but">
                    <button>Limted Time Deal</button>
                        <p>₹ 2500 M.R.P:₹5000(50% 0ff) </p>
                    </div>
                </div>
                <div className="prime1"><h5>✔prime</h5></div>
                <div className="add1">
                    <button>Add To Card</button>
                </div>
                <div className="buy1">
                    <button>Buy Now</button>
                </div>           
                 <div className="nxt3">
                    <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"className="nxt2img" alt="" />
                    <h3 className="nxt3h3">Doctor Extra Soft</h3>
                    <h4>Men's Sports Shoes with Memory Foam Cushioned...</h4>
                    <h5>★ ★ ★ ★ ★ 5 Rate</h5>
                    <div className="nxt3but">
                    <button>Limted Time Deal</button>
                        <p>₹ 499 M.R.P:₹1000(50% 0ff) </p>
                    </div>
                </div>
                <div className="prime3"><h5>✔prime</h5></div>
                <div className="add3">
                    <button>Add To Card</button>
                </div>
                <div className="buy3">
                    <button>Buy Now</button>
                </div>   
        </div>
        
    );
}