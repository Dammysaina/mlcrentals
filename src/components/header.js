import React from "react";
import Logo from "../../public/assests/images/logo.svg";
import {Link} from "react-router-dom"
 
const Header = () => {
    return (
        <div>
            <div><img src={Logo} alt="mlcLogo"/></div>
            <div>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>Landlord</li></Link>
                    <Link to="/"><li>Tenants</li></Link>
                    <Link to="/"><li>Contact Us</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header