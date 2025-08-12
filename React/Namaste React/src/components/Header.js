import {LOGO_URL} from "../utils/constant";
import {useState} from "react";
import { Link } from "react-router";
const Header = ()=>{
    const[ btnNameReact,setbtnNameReact] = useState("Login");
    
    return(
        <div className = "header">
            <div className = "logo-contvainer">
                <img className="logo" src = {LOGO_URL}/>
            </div>
        <div className="nav-items">
            <ul>
                <li>
                <Link to = "/" className="link">Home</Link>
                </li>
                <li>
                        <Link to = "/about" className="link">About Us</Link>
                </li>
                <li>
                    <Link to = "/contact" className="link">Contact Us</Link>
                </li>
                <li>
                <Link to = "/cart" className="link">Cart</Link>
                </li>
                <button
                className="login" onClick={()=>{
                    btnNameReact == "Login"
                    ? setbtnNameReact("Logout")
                    : setbtnNameReact("Login");
                }}>
                    {btnNameReact}

                </button>
            </ul>
        </div>
    </div> 
    ); 
};

export default Header;