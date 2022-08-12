import React from "react";
import "./post.css";
import PostHeader from "./postHeader/PostHeader";
import PostFooter from "./postFooter/PostFooter";

const Post = ({ postData }) => {
  return (
    <div className="post-area">
      <div className="post-sec">
        <PostHeader
          profilePic={postData.profilePic}
          userName={postData.userName}
        />
        <div className="profile-postpic-container">
          <img
            className="profile-post-pic"
            src={postData.postPic}
            alt="postPic"
          />
        </div>
        <PostFooter postData={postData} />
      </div>
    </div>
  );
};

export default Post;
