import React from "react";
import "./profile.css";
import pic1 from "../../../assets/pic1.jpg";
import { useSelector, useDispatch } from "react-redux";

import { IoIosArrowDown } from "react-icons/io";
import { GrMenu } from "react-icons/gr";

const Profile = () => {
  let profileData = useSelector((state) => {
    return state.profileDataReducer.profileData;
  });
  return (
    <div className="profile-area">
      {/* profile header  */}
      <div className="profile-header-area sticky-top">
        <div className="profile-header-sec">
          <div className="profile-header">
            <div className="column-1">
              <h5 className="m-0 p-0">{profileData.userName}</h5>
              <div>
                <IoIosArrowDown className="pntr" size="20px" />
              </div>
            </div>
            <div className="column-2">
              <GrMenu className="pntr" size="20px" />
            </div>
          </div>
        </div>
      </div>

      {/* profile row 1 */}
      <div className="profile-row-1">
        <div className="sec">
          <div className="main-content row">
            <div className="col-md-2 col-6 profile-row-1-col-1">
              <div className="profile-pic-container">
                <img src={pic1} className="profile-image" alt="" />
              </div>
              <div className="profile-name-container ">
                <strong className="text-center profile-name">
                  {profileData.name}
                </strong>
              </div>
            </div>
            <div className="col-md-2 col-2 profile-data-container">
              <div className="profile-data">
                <div className="count text-center">
                  <strong>{profileData.posts}</strong>
                </div>
                <div className="topic">
                  <strong className="text-capitalize">Posts</strong>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-2 profile-data-container">
              <div className="profile-data">
                <div className="count text-center">
                  <strong>{profileData.followers}</strong>
                </div>
                <div className="topic">
                  <strong className="text-capitalize">followers</strong>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-2 profile-data-container">
              <div className="profile-data">
                <div className="count text-center">
                  <strong>{profileData.following}</strong>
                </div>
                <div className="topic">
                  <strong className="text-capitalize">following</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
