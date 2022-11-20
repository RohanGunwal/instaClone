import React from "react";
import "./PostLists.css";

export default function PostLists(props) {
  return (
    <div className="container mt-3 post">
      <ul>
        {props.data.map((e) => {
          return (
            <li key={e._id} className="card mb-3">
              <div className="card-header">
                <div className="details">
                  <p className="name">{e.name}</p>
                  <p className="location">{e.location}</p>
                </div>
                <i className="fa-solid fa-ellipsis"></i>
              </div>
              <img src={e.postImage} alt="postImage" />
              <div className="card-footer">
                <div className="post-details">
                  <div className="interact">
                    <div className="logo">
                      <i className="fa-regular fa-heart"></i>
                      <i className="fa-regular fa-paper-plane"></i>
                    </div>
                    <div className="likes">
                      {e.likes > 1 ? `${e.likes} likes` : `${e.likes} like`}
                    </div>
                  </div>
                  <div className="date">{`${e.date}`}</div>
                </div>
                <div className="description">{e.description}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
