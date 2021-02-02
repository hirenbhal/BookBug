import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Frame from "../Images/Frame.png";

const Navbar = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={Frame} alt="" className="logo" />
          <h1 className="bookbug">bookBUG</h1>
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="login">
              <button className="btn3">Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
