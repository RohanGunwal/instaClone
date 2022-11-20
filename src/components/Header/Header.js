import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="container-fluid header navbar border-bottom px-3">
      <Link to="/posts" className="navbar-brand fs-4">
        Instaclone
      </Link>
      <Link to="/create">
        <i className="fa-solid fa-camera"></i>
      </Link>
    </div>
  );
}
