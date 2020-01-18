import React from "react";
import { Link } from "react-router-dom";

const SidebarLeft = ({ toggle }) => {
  return (
    <div className={toggle ? "sidebar-left toggled" : "sidebar-left"}>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/cinema">Cinema</Link>
      <Link to="/television">Television</Link>
      <Link to="/games">Games</Link>
      <Link to="/books">Books</Link>
    </div>
  );
};

export default SidebarLeft;
