import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import axios from "axios";
import "./CreatePost.css";

export default function CreatePost() {
  const [userName, setUserName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const submitForm = function (e) {
    e.preventDefault();
    console.log(userName, location, description);
    if (userName.trim() && location.trim() && description.trim()) {
      axios
        .post("/api/posts", {
          name: userName,
          location: location,
          description: description,
        })
        .then(() => navigate("/posts"))
        .catch((err) => alert(err));
    } else {
      alert("All fields are required");
    }
  };
  return (
    <div className="container createPost">
      <Header />
      <form className="form mt-5 p-4 shadow-lg" onSubmit={submitForm}>
        <div className="mb-3">
          <input className="form-control" type="file" name="image" required />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            placeholder="Author"
            className="form-control"
            onChange={(e) => setUserName(e.target.value)}
            name="name"
            required
            autoComplete="off"
          />
          <input
            type="text"
            placeholder="Location"
            className="form-control"
            onChange={(e) => setLocation(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            placeholder="Description"
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <input
            type="submit"
            className="btn btn-success shadow"
            value="Post"
          />
        </div>
      </form>
    </div>
  );
}
