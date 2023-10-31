
import TopBar from "./../Components/Topbar";
import SideBar from "../Components/SideBar";

import "../assets/css/dashboard.css"
function Dashbord() {
  return (
    <div className="dashboard">
      <TopBar />
      <div className="container-fluid mt-4">
        <div className="row flex-nowrap">
          <SideBar />
          <div className="col py-3 cardRassemblement"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
