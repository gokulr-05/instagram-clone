import React from "react";
import "./home.css";
import Header from "../Header/Header";
import Story from "../story/Story";

const Home = () => {
  return (
    <div className="home-area">
      <div className="home-sec">
        <Header />
        {/* home row 1  */}
        <div className="home-row-1 ">
          {/* home row 2 */}
          <div className="home-row-2">
            <div className="row w-100 h-100 m-0">
              {/* home column 1 */}
              <div className="home-column-1 col-md-8 col-12">
                <Story />
              </div>
              {/* home column 2  */}
              <div className="home-column-2 col-0 col-md-4 d-none d-md-block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
