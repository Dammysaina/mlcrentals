import React from "react";
import Logo from "../assests/images/logo.svg";
// import { Link } from "react-router-dom";
import "../assests/css/header.css"

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_logo">
        <img src={Logo} alt="mlcLogo" />
      </div>
      <div className="header_link">
        <ul>
          <li>
            Home
          </li>
          <li>
           Landlord
          </li>
          <li>
           Tenants
          </li>
          <li>
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
