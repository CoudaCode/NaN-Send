import React from "react";
import "./../assets/css/Profile.css";
import Topbar from "./../components/Topbar";
import SideBar from "../Components/SideBar";
import { Link } from "react-router-dom";

import person from "../assets/images/person.jpg";
function Profile() {
  return (
    <div className="Profile">
      <Topbar />
      <div className="container-fluid mt-4">
        <div className="row flex-nowrap">
          <SideBar />
          <div className="col py-3 cardRassemblement profilCard">
            <div className="card col-10 m-">
              <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="card">
                    <h1 className="m-5">Profile</h1>
                    <div className="card-body ">
                      <div className="mx-auto col-6 mb-4 cardProfilImg">
                        <img src={person} alt="" className="rounded-circle" />
                      </div>
                      <div className="mx-auto d-flex justify-content-evenly cardOnline col-6 p-2">
                        <i className="fa-solid fa-circle"></i> <h4>En ligne</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mt-5 profile_Email p-5">
                  <div className="card mt-5">
                    <div className="card-body ">
                      <div className="card ">
                        <div className="card-body">
                          <h1>Email</h1>
                          <p className="mt-5">abrahamkonan@gmail.com</p>
                        </div>
                        <hr />
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <h1>Nom Et Prenom</h1>
                          <p className="mt-5">Abraham konan</p>
                        </div>
                        <hr />
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <h1>Langue</h1>
                          <p className="mt-5">Français</p>
                        </div>
                        <hr />
                      </div>
                      <div className="card">
                        <div className="card-body d-flex profilebtn justify-content-between">
                          <h3>Changer le mot de passe</h3>
                          <Link to={"/dashboard"}>
                            <button type="button" className="btn btn-primary ">
                              Enregistrer le profil
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
