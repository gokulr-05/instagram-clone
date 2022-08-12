import React from "react";
import data from "../../../data/data";
import "./posts.css";
import Post from "./Post";
import { useSelector } from "react-redux";

const Posts = () => {
  let postsData = useSelector((state, action) => {
    return state.postDataReducer.data;
  });
  console.log("postsData=", postsData);
  return (
    <div className="posts-area">
      <div className="posts-sec">
        {postsData.posts.map((val, ind, arr) => {
          return <Post postData={val} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
