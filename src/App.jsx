import React from "react";
import NotFound from "./Component/NotFound";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Shop from "./Component/Shop";
import Contact from "./Component/Contact ";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App(){
  return(
    <div> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
    </div>
   
  );
}