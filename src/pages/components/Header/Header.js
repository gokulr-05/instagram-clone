import React from "react";
import "./header.css";
import logo from "../../../assets/img.png";

import pic1 from "../../../assets/pic1.jpg";
// import pic2 from "../../../assets/pic2.jpg";
// import pic3 from "../../../assets/pic3.jpg";

const Header = () => {
  return (
    <div className="header-area sticky-top">
      <div className="header-sec ">
        {/* header row  */}
        <div className="header-row row">
          {/* logo  */}
          <div className="instagram-logo-container col-3 m-0">
            <img className="instagram-logo" src={logo} alt="logo" />
          </div>

          {/* search bar  */}
          <div className="header-searchbar-area d-none d-md-block  col-md-3">
            <div className="header-search-bar row">
              <div className="m-0 p-0  col-1">
                <i class="fa-solid fa-magnifying-glass text-muted header-search-icon"></i>
              </div>

              <div className="m-0 col-9">
                <input
                  type="text"
                  placeholder="Search"
                  className="header-search-input "
                />
              </div>
            </div>
          </div>

          {/* menu icons  */}
          <div className="header-menu-area col-8 col-md-6">
            <div className="header-menu-container-row row ">
              <div className="header-menu-container  col-xl-8 col-sm-10 col-12">
                <div className="header-menu-sec row">
                  <div className="header-menu-icons col-2 col-lg-2">
                    <i class="fa-solid fa-house fs-4 m-0"></i>
                  </div>
                  <div className="header-menu-icons col-2 col-lg-2">
                    <i class="fa-brands fa-facebook-messenger fs-4"></i>
                  </div>
                  <div className="header-menu-icons col-2 col-lg-2">
                    <i class="fa-solid fa-square-plus fs-4"></i>
                  </div>
                  <div className="header-menu-icons col-2 col-lg-2">
                    <i class="fa-solid fa-compass fs-4"></i>
                  </div>
                  <div className="header-menu-icons col-2 col-lg-2">
                    <i class="fa-solid fa-heart fs-4"></i>
                  </div>
                  <div className="header-menu-icons  col-2 col-lg-2">
                    <div className="header-profile-img-container">
                      <img src={pic1} className="header-profile-img" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
