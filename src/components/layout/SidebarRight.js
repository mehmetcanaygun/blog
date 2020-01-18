import React from "react";

const SidebarRight = ({ toggle }) => {
  return (
    <div className={toggle ? "sidebar-right toggled" : "sidebar-right"}>
      Sidebar Right
    </div>
  );
};

export default SidebarRight;
