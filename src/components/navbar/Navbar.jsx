import React from "react";
import { Avatar } from "@material-ui/core";
import logo from "../../images/monkey-sunglasses-cool-gorilla-600w-1063902011.webp";
import "./navbar.css";
function Navbar() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="nav-title">
            <h2>Kimono</h2>
          </div>
          <div className="nav-avatar">
            <Avatar src={logo} alt="avatar" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
