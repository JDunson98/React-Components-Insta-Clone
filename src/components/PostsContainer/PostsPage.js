//Complete the necessary code in this file
// import useState
import { useState } from "react";
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import dummyData from "../../dummy-data.js"

const PostsPage = () => {
  // set up state for your data
  const [postState] = useState(dummyData)
  return (
    <div className="posts-container-wrapper">
      {postState.map(data => (
        
        <Post post = {data}/>
      ))}
    </div>
  );
};

export default PostsPage;
