import { Link, useLocation } from "react-router-dom";

import {
  FaBorderAll,
  FaUsers,
  FaClipboardList,
  FaCalendar,
  FaUserCircle,
  FaHourglassStart,
  FaComments,
  FaArrowLeft,
} from "react-icons/fa";

function SideBar() {
  const path = useLocation().pathname;

  const sidebarLinks = [
    { path: "/dashbord", text: "Dashboard", icon: <FaBorderAll /> },

    { path: "/contact", text: "Contacts", icon: <FaUsers /> },

    { path: "/message", text: "Messages", icon: <FaClipboardList /> },

    { path: "/broadcasts", text: "Broadcasts", icon: <FaCalendar /> },

    { path: "/profile", text: "Profiles", icon: <FaUserCircle /> },

    {
      path: "/workspace",
      text: "Workspace setting",
      icon: <FaHourglassStart />,
    },

    { path: "/reports", text: "Reports", icon: <FaComments /> },

    { path: "/", text: "Déconnexion", icon: <FaArrowLeft /> },
  ];

  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-none min-h-screen">
      <div className="bg-white min-h-60 flex flex-col justify-start items-center sm:items-start px-3 rounded-4 pt-2">
        <Link
          to="/"
          className="text-violet-500 text-decoration-none pb-3 mb-sm-0 me-sm-auto">
          <span className="text-lg hidden sm:inline">Menu</span>
        </Link>

        <ul
          className="nav nav-pills flex-col mb-sm-0 mb-0 sm:items-start"
          id="menu">
          {sidebarLinks.map((link) => (
            <li key={link.path} className="nav-item">
              <Link
                to={link.path}
                className={`nav-link align-middle px-0 ${
                  path === link.path
                    ? "bg-purple-500 text-blue-900"
                    : "hover:bg-purple-200 text-violet-700"
                }`}>
                <span className="flex items-center">
                  {link.icon}

                  <span
                    className={`ml-2 hidden sm:inline ${
                      path === link.path ? "text-red-300" : "text-gray-700"
                    }`}>
                    {link.text}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <hr />
      </div>

      <div
        className="dropdown rounded-4 m-2 p-4 bg-white absolute bottom-0 start-0"
        id="btnBottom">
        <h5>NAN DIGITAL ACADEMY</h5>

        <h6>Version: 1.0.0.11</h6>
      </div>
    </div>
  );
}

export default SideBar;
