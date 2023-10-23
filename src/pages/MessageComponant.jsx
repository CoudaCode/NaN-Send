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
          <div className="col  cardRassemblement">
            <div className="flex">
              <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    Save changes
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageComponant;
