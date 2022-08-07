import React from "react";
import "./story.css";
import StorySlide from "./StorySlide";

import p1 from "../../../assets/pic4.jpeg";
import p2 from "../../../assets/pic13.jpeg";
import p3 from "../../../assets/pic6.jpeg";
import p4 from "../../../assets/pic7.jpeg";
import p5 from "../../../assets/pic8.jpeg";
import p6 from "../../../assets/pic9.jpeg";
import p7 from "../../../assets/pic10.jpeg";
import p8 from "../../../assets/pic11.jpeg";
import p9 from "../../../assets/1.jpg";
import p10 from "../../../assets/11.avif";
import p11 from "../../../assets/12.avif";
import p12 from "../../../assets/13.avif";
import p13 from "../../../assets/14.avif";
import p14 from "../../../assets/15.avif";
import p15 from "../../../assets/16.avif";
import p16 from "../../../assets/17.avif";
import p17 from "../../../assets/18.avif";
import p18 from "../../../assets/19.avif";

const Story = () => {
  let pics = [
    [p1, p2, p3, p4, p5, p6],
    [p7, p8, p9, p10, p11, p12],
    [p13, p14, p15, p16, p17, p18],
  ];
  let pics1 = [
    [
      { pic: p1, name: "vikram" },
      { pic: p2, name: "JD" },
      { pic: p3, name: "Micheal" },
      { pic: p4, name: "Rahul" },
      { pic: p5, name: "Guru" },
      { pic: p6, name: "Arun" },
    ],
    [
      { pic: p7, name: "karthik" },
      { pic: p8, name: "karun" },
      { pic: p9, name: "pradeep" },
      { pic: p10, name: "sakthi" },
      { pic: p11, name: "sam" },
      { pic: p12, name: "rolex" },
    ],
    [
      { pic: p13, name: "Dilli" },
      { pic: p14, name: "Joe" },
      { pic: p15, name: "Prakash" },
      { pic: p16, name: "Rocky" },
      { pic: p17, name: "Rakesh" },
      { pic: p18, name: "Kishore" },
    ],
  ];
  return (
    <div className="story-area">
      <div className="story-sec">
        <div
          id="carouselExampleControls"
          class="carousel slide h-100"
          data-bs-interval="false"
        >
          <div class="carousel-inner h-100">
            {pics1.map((val, ind, arr) => {
              return <StorySlide picArr={val} ind={ind} />;
            })}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Story;
