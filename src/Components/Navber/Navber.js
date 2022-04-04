import React from "react";
import { Link } from "react-router-dom";
import "./Navber.css";

const Navber = () => {
  return (
    <div className="bg-indigo-400 py-5 text-white navber">
      <Link to="/"></Link>
      <Link to="/home">Home</Link>
      <Link to="/review">Reveiw</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/blog">Blog</Link>
      {/* <Link to="/about">About Us</Link> */}
    </div>
  );
};

export default Navber;
