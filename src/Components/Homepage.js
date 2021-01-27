import React from "react";
import "./homepage.css";
import Vector from "../Images/vector.png";
import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="content">
      <div>
        <h1 className="text">Join the community<br/> of Readers <br/> with bookBUG.</h1>
        <p className="para">Connect with other passionate readers and get book recommendations <br /> and suggestions all at one place.</p>
        <button className="btn">Get Started</button>
      </div>
        <img src={Vector} alt="" className="img" />
        
      </div>
    </>
  );
};

export default Homepage;
