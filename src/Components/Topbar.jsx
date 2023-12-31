
import person from "../assets/images/person.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../assets/css/topbar.css";


function Topbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary dashHead">
      <div className="container-fluid">
        <div className="d-flex">
          <img src={person} className="rounded-circle dashimg" alt="..." />
          <h5 className="mt-3 ">Jane S.</h5>
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
