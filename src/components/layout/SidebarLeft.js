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
        to="/cinema"
        className="text-shadow"
        onClick={() => {
          toggleBar();
        }}
      >
        Cinema
      </Link>
      <Link
        to="/television"
        className="text-shadow"
        onClick={() => {
          toggleBar();
        }}
      >
        Television
      </Link>
      <Link
        to="/games"
        className="text-shadow"
        onClick={() => {
          toggleBar();
        }}
      >
        Games
      </Link>
      <Link
        to="/books"
        className="text-shadow"
        onClick={() => {
          toggleBar();
        }}
      >
        Books
      </Link>
    </div>
  );
};

export default SidebarLeft;
