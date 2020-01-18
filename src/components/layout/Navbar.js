import React, { useState } from "react";
import SidebarLeft from "./SidebarLeft";
// import SidebarRight from "./SidebarRight";

const Navbar = () => {
  const [sideBarToggled, setSideBarToggled] = useState(false);
  const toggleSideBar = () => {
    setSideBarToggled(!sideBarToggled);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">MyBlog</div>
      <button
        className={
          !sideBarToggled ? "navbar__button" : "navbar__button toggled"
        }
        onClick={() => {
          toggleSideBar();
        }}
      >
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </button>
      <SidebarLeft toggle={sideBarToggled} />
    </nav>
  );
};

export default Navbar;
