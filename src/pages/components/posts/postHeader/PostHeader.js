import React from "react";
import "./postHeader.css";

const PostHeader = ({ profilePic, userName }) => {
  return (
    <div className="post-header-area">
      <div className="post-header-sec">
        {/* profile  */}
        <div className="profile-header-1">
          <div className="profile-img-container">
            <img src={profilePic} alt="profile" className="profile-img" />
          </div>

          <div className="post-header-profile">
            <strong>{userName}</strong>
          </div>
        </div>

        {/* ellipsis icon  */}
        <div>
          <i class="fa-solid fa-ellipsis fs-4"></i>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
