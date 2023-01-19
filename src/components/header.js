import React from "react";
import Logo from "../assests/images/logo.svg";
import {Link} from "react-router-dom";
import '../assests/css/header.css'
 
const Header = () => {
    return (
        <div>
            <div>
                <img src= {Logo} alt="mlcLogo"/>
            </div>
            <div>
                <ul>
                    <Link to="/" className="home">
                        <li>Home</li>
                        </Link>
                    <Link to="/landlord" className="landlord">
                        <li>Landlord</li>
                        </Link>
                    <Link to="/tenants" className="tenants">
                        <li>Tenants</li>
                        </Link>
                    <Link to="/contactus" className="contact_us">
                        <li>Contact Us</li>
                        </Link>
                </ul>
            </div>
        </div>
    )
}

export default Header