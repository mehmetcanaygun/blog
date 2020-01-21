import React from "react";
import { Link } from "react-router-dom";

const SidebarLeft = props => {
  const toggleBar = () => {
    props.toggleSideBar();
  };

  return (
    <div className={props.toggle ? "sidebar-left toggled" : "sidebar-left"}>
      <Link
        to="/"
        className="text-shadow"
        onClick={() => {
          toggleBar();
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-shadow"
        onClick={() => {
          toggleBar();
        }}
      >
        About Me
      </Link>
      <Link
        to="/archive"
        className="text-shadow"
        onClick={() => {
          toggleBar();
        }}
      >
        Archive
      </Link>
    </div>
  );
};

export default SidebarLeft;
