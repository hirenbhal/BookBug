import React from "react";
import "./navbar.css";
import Frame from "../Images/Frame.png";

const Navbar = () => {
  return (
    <header>
      <div>
        <img src={Frame} alt="" className="logo" />
        <h1 className="bookbug">bookBUG</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="">Sign In</a>
          </li>
          <li>
            <a href="#" className="signup">Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
