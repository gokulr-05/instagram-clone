import React from "react";
import "./header.css";

import logo from "../../../assets/img.png";

const Header = () => {
  return (
    <div className="header-area">
      <div className="header-sec ">
        {/* header row  */}
        <div className="header-row row">
          {/* logo  */}
          <div className="instagram-logo-container col-3 m-0">
            <img className="instagram-logo" src={logo} alt="logo" />
          </div>

          {/* search bar  */}
          <div className="header-searchbar-area d-none d-sm-block  col-sm-3">
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
          <div className="header-menu-area col-6 col-sm-6">
            <div className="header-menu-icons col-2"></div>
            <div className="header-menu-icons col-2"></div>
            <div className="header-menu-icons col-2"></div>
            <div className="header-menu-icons col-2"></div>
            <div className="header-menu-icons col-2"></div>
            <div className="header-menu-icons col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
