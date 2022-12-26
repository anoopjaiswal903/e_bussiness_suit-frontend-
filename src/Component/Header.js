import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import Sidebar from "./Sidebar";

function Header() {
  const [open, setOpen] = useState(true);
  const [User, setUser] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="header">
        <div className="align-item-center">
          <MenuIcon className="menu-icon mx-1 " onClick={handleClick} />
          <span className="logo ">EBS</span>
        </div>
        <div className="mx-4">
          <span>
            <AccountCircleIcon className="mx-1" />
          </span>
          <span>
            <SettingsIcon className="mx-1" />
          </span>
          <span>
            <AppsIcon className="mx-1" />
          </span>
        </div>
      </div>

      <div>
        <div className="sidebar-menu">
          <Sidebar open={open} />
        </div>
        <div
          className={
            open
              ? "Header-body-collapse   "
              : "Header-body-collapse  header-body"
          }
        >
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
