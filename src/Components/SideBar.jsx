import React, { useState } from "react";
import "./../assets/css/SideBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
function SideBar() {
  const path = useLocation().pathname;
  const [active, setActive] = useState(path);
  console.log(path);

  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-none min-vh-100">
      <div className="d-flex flex-column align-items-center bg-white align-items-sm-start px-3 rounded-4 pt-2 text-white min-vh-60">
        <Link
          to="/"
          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-5 d-none d-sm-inline">Menu</span>
        </Link>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item">
            <Link
              to="/dashbord"
              id={active === "/dashbord" ? "ClickHover" : ""}
              className="nav-link align-middle px-0"
            >
              <i className="fa-solid fa-border-all"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link align-middle px-0">
              <i className="fa-solid fa-users"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Contacts</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/message"}
              href="#"
              className="nav-link align-middle px-0"
              id={active === "/message" ? "ClickHover" : ""}
            >
              <i className="fa-solid fa-clipboard-list"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Messages</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/broadcasts"}
              href="#"
              className="nav-link align-middle px-0"
              id={active === "/broadcasts" ? "ClickHover" : ""}
            >
              <i className="fa-regular fa-calendar"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Broadcasts</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className="nav-link align-middle px-0"
              id={active === "/profile" ? "ClickHover" : ""}
            >
              <i className="fa-regular fa-circle-user"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Profiles</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/workspace"
              className="nav-link align-middle px-0"
              id={active === "/workspace" ? "ClickHover" : ""}
            >
              <i className="fa-solid fa-hourglass-start"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Workspace setting</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/reports"
              className="nav-link align-middle px-0"
              id={active === "/reports" ? "ClickHover" : ""}
            >
              <i className="fa-solid fa-comments"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Reports</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link align-middle px-0"
              id={active === "/" ? "ClickHover" : ""}
            >
              <i className="fa-solid fa-arrow-left"></i>
              <span className="ms-1 d-none d-sm-inline">Deconnexion</span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <div
        className="dropdown position-absolute rounded-4 m-2 p-4 bg-white bottom-0 start-0"
        id="btnBottom"
      >
        <h5> NAN DIGITAL ACADEMY</h5>
        <h6>Version: 1.0.0.11</h6>
      </div>
    </div>
  );
}

export default SideBar;
