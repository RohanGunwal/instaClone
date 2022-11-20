import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="container landingPage">
      <img
        src="https://images.pexels.com/photos/14395900/pexels-photo-14395900.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
        alt=""
        className="shadow-lg"
      />
      <div className="content">
        <h2 className="display-3">InstaClone</h2>
        <Link to="/posts" className="btn btn-outline-success">
          Enter
        </Link>
      </div>
    </div>
  );
}
