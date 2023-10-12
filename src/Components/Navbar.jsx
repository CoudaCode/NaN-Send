import { useRef } from "react";
import "./../assets/css/Navbar.css";
import { Link } from "react-router-dom";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiEyeCloseLine } from "react-icons/ri";

function Navbar() {
  const nav = useRef(null);
  const toggle = (event) => {
    const close = document.getElementById("close");

    close.style.display = "block";
    close.addEventListener("click", (evn) => {
      nav.current.classNameList.remove("active");
      event.target.style.display = "block";
      evn.target.style.display = "none";
    });
    event.target.style.display = "none";
    console.log(event.target);
    nav.current.classNameList.toggle("active");
  };
  return (
    <div className="Navbar">
      <nav>
        <a href="#">
          <span className="reactIcon-logo">
            <BiSolidMessageRoundedDots />
          </span>
          <span className="span1">NaN-</span>
          <span className="span2">SEND</span>
        </a>
        <ul className="navlist" ref={nav}>
          <li>
            <a href="" className="Acceuil-active">
              Accueil
            </a>
          </li>
          <li>
            <a href="">À propos</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="partie-login">
          <Link to="/Login" className="btn">
            Se connecter
          </Link>
        </div>
        <span className="menuBurger" onClick={toggle} id="burger">
          <TfiMenuAlt />
        </span>
        <span className="close" id="close">
          <RiEyeCloseLine />
        </span>
      </nav>
    </div>
  );
}

export default Navbar;
