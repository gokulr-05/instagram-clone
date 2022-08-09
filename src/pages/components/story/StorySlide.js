import React from "react";
import "./storySlide.css";

const StorySlide = ({ picArr, ind }) => {
  return (
    <div
      class={` story-slide-area carousel-item p-2  h-100 ${
        ind === 0 ? "active" : ""
      }`}
    >
      <div className="d-flex justify-content-center w-100 h-100">
        <div className="row1 d-flex align-items-center justify-content-around h-100 w-100">
          {picArr.map((val, ind, arr) => {
            return (
              <div
                className={`col1-2   story-container ${
                  ind === arr.length - 1 ? "d-lg-block d-none" : ""
                } ${ind === arr.length - 2 ? "d-sm-block d-none" : ""} `}
              >
                <div className="story-bucket">
                  <div className="story-img-container ">
                    <img src={val.pic} className="story-img " alt="story" />
                  </div>
                  <div className="m-0 p-0 story-name-container">
                    <p className="m-0 p-0 story-name text-capitalize text-center">
                      {val.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StorySlide;
