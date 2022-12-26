import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";

function Sidebar({ open }) {
  console.log(open);
  return (
    <div>
      <div className={open ? "sidebar" : "sidebar collapse"}>
        <div className="sidebar-menu d-flex  flex-column ">
          <div className="sidebar-menu-feature  ">
            <li>
              <HomeIcon /> HOME
            </li>
            <li>
              <Person2Icon /> USER
            </li>
            <li>
              <SettingsIcon /> SETTING
            </li>
            <li>
              <AppsIcon /> APP
            </li>
          </div>
          <div className="sidebar-setting-feature ">
            <li>
              <ExitToAppSharpIcon />
              Logout
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
