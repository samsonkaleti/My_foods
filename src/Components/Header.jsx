import { useState } from "react"
import NavLogo from "../Asscts/NavLogo.png"

 const Header = () =>{ 
    let [btnName,setBtnName] = useState("Log In")
    return(
        <div className="header">
        <div className="logo">
        <img src= {NavLogo} alt="Logo" className="navLogo"  />
        </div> 
        <div className="menu">
           <li>Home</li>
           <li>About Us</li>
           <li>Contact</li>
           <li>Info</li>
           <button className="loginButton" onClick={()=>{
            btnName === "Log In"?(setBtnName("Log Out")) :  (setBtnName("Log In")) 
           }}>{btnName}</button>
        </div>
        
        
        </div>
    )
} 

export default Header