import React, { useState } from "react";

import person from "../assets/images/person.jpg";
import "./../assets/css/Topbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import axios from "axios";
const url = "https://nan-send-api.onrender.com";

function Topbar() {
  const [token, setToken] = useState();
  let navigate = useNavigate();
  let session = Cookies.get("token");
  let userId = JSON.parse(sessionStorage.getItem("userId"));
  console.log(userId);
  if (!session) {
    navigate("/connexion");
  }
  const fetchUser = async () => {
    // let sendToken = Cookies.get("token")
    // setToken(session)
    // const headers = { 'Authorization': `token ${token}`};
    let response = await axios.get(`${url}/api/user/${userId}`, {
      headers: {
        Authorization: `token ${session}`,
      },
    });
    return response;
  };

  const { data, isSuccess, isError } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
  console.log(data);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary dashHead">
      <div className="container-fluid">
        <div className="d-flex">
          <img src={person} className="rounded-circle dashimg" alt="..." />
          <h5 className="mt-3 text-violet-500">
            {data?.data.response.fullname}
          </h5>
        </div>
        <div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success btnHead" type="submit">
              Search
            </button>
          </form>
        </div>

        <div>
          <i className="fa-solid fa-bell"></i>
        </div>
      </div>
    </nav>
  );
}
export default Topbar;
