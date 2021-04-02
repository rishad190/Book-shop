import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Logo.png";
import gridMan from "../../img/grid 1.png";
import plus from "../../img/plus 1.png";
import "./adminSideBar.css";
const AdminSideBar = () => {
  return (
    <div>
      <div className="side_box">
        <div className="side_logo">{/* <img src={logo} alt="" /> */}</div>
        <div className="link_box_side">
          <Link to="/manage">
            <img src={gridMan} alt="" />
            Manage Book
          </Link>
          <Link to="/admin">
            <img src={plus} alt="" />
            Add Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
