import React from "react";
import "./../assets/css/MessageComponant.css";
import Topbar from "../components/Topbar";
import SideBar from "../Components/SideBar";

function MessageComponant() {
  return (
    <div className="MessageComponant">
      <Topbar />
      <div className="container-fluid mt-4">
        <div className="row flex-nowrap">
          <SideBar />
          <div className="col py-3 cardRassemblement"></div>
        </div>
      </div>
    </div>
  );
}

export default MessageComponant;
