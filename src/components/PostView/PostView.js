import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import PostLists from "./PostLists";

export default function PostView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((res) => setData(res.data))
      .catch((err) => console.log("Error"));
  }, []);
  return (
    <div className="container">
      <Header />
      <PostLists data={data} />
    </div>
  );
}
