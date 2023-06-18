import React from "react";
import logo from "../images/logo_paddimi.png";

function Header() {
  return (
    <header className="header">
      <div className="logo_paddimi">
        <img src={logo} alt="logo_paddimi" style={{ marginLeft: 30 }} px />
      </div>
      <div className="navbar_links">
        <ul>
          <li>
            <a href="#">Home</a>
            <a href="#">how it works</a>
            <a href="#">About</a>
            <a href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
