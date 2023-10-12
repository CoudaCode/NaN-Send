import React from "react";
import "./../assets/css/Reports.css";
import Topbar from "./../components/Topbar";
import SideBar from "../Components/SideBar";
function Reports() {
  return (
    <>
      <div className="Reports">
        <Topbar />
        <div className="container-fluid mt-4">
          <div className="row flex-nowrap">
            <SideBar />
            <div className="col py-3 cardRassemblement rapportCard">
              <div className="card mb-4 rapportCard1">
                <div className="card-body d-flex justify-content-between row ">
                  <div className="col-sm-8">
                    <form className="d-flex input-group " role="search">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Rechercher un contact"
                        aria-label="Search"
                        aria-describedby="inputGroupPrepend2"
                      />
                      <button
                        className="btn btn-outline-success btnRecherche"
                        type="submit"
                      >
                        Rechercher
                      </button>
                    </form>
                  </div>

                  <div className="col-sm-4 ">
                    <button
                      type="button"
                      className="btn btn-primary btnRestaurer float-sm-end"
                    >
                      <i className="fa-solid fa-plus"></i> Tout Restaurer
                    </button>
                  </div>
                </div>
              </div>

              <ins>
                <h1 className="rapportH1">Contact supprimé</h1>
              </ins>

              <div className="card mt-4 mb-4 rapportCard2">
                <div className="card-body">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Abraha konanny</td>
                        <td className="td_Email">abrahamkonany@gmail.com</td>
                        <td>+225 0141822918</td>

                        <td>
                          <button type="button" className="btn btn-primary">
                            {" "}
                            Restaurer
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Abraha konanny</td>
                        <td className="td_Email">abrahamkonany@gmail.com</td>
                        <td>+225 0141822918</td>
                        <td>
                          <button type="button" className="btn btn-primary">
                            {" "}
                            Restaurer
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Abraha konanny</td>
                        <td className="td_Email">abrahamkonany@gmail.com</td>
                        <td>+225 0141822918</td>
                        <td>
                          <button type="button" className="btn btn-primary">
                            {" "}
                            Restaurer
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Abraha konanny</td>
                        <td className="td_Email">abrahamkonany@gmail.com</td>
                        <td>+225 0141822918</td>
                        <td>
                          <button type="button" className="btn btn-primary">
                            {" "}
                            Restaurer
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <ins>
                <h1 className="rapportH1 ">Teams supprimé</h1>
              </ins>

              <div className="card mt-4 rapportCard2">
                <div className="card-body">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Abraha konanny</td>
                        <td className="td_Email">abrahamkonany@gmail.com</td>
                        <td>+225 0141822918</td>

                        <td>
                          <button type="button" className="btn btn-primary">
                            {" "}
                            Restaurer
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Abraha konanny</td>
                        <td className="td_Email">abrahamkonany@gmail.com</td>
                        <td>+225 0141822918</td>
                        <td>
                          <button type="button" className="btn btn-primary">
                            {" "}
                            Restaurer
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Abraha konanny</td>
                        <td className="td_Email">abrahamkonany@gmail.com</td>
                        <td>+225 0141822918</td>
                        <td>
                          <button type="button" className="btn btn-primary">
                            {" "}
                            Restaurer
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Abraha konanny</td>
                        <td className="td_Email">abrahamkonany@gmail.com</td>
                        <td>+225 0141822918</td>
                        <td>
                          <button type="button" className="btn btn-primary">
                            {" "}
                            Restaurer
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reports;
