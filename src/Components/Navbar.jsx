// import { Link } from "react-router-dom";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import "./../assets/css/Navbar.css";
import {useState, useEffect} from "react";
//ok 
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = (nav) =>{
    console.log("test",nav.classList);
    return ()=>{
      if (window.pageYOffset > 0) {
        nav.classList.add("scrolled");
        
      }else{
        nav.classList.remove("scrolled")
      }
    } 

  };

  useEffect(()=>{
    const nav = document.querySelector('.maNav');


    window.addEventListener("scroll", handleScroll(nav));
    return () => {
       window.removeEventListener("scroll", handleScroll(nav))
    }

  }, []);

  return (
    <header className="main-header">
      <div className="container-fluid maNav" >
        <nav className="navbar navbar-expand-lg main-nav">
          <a href="#" className="logo">
          <span className="log-msg">{<BiSolidMessageRoundedDots/>}</span>
            <span className="log1">NaN-</span>
            <span className="log2">SEND</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="mainMenu"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="icon-bar icon-bar-1"></span>
            <span className="icon-bar icon-bar-2"></span>
            <span className="icon-bar icon-bar-3"></span>
          </button>
          <div
            className={`collapse justify-content-center navbar-collapse ${
              isMenuOpen ? "show" : ""
            }`}
            id="mainMenu"
          >
            <ul className="navbar-nav ms-5 text-uppercase f1">
              <li>
                <a href="#home" className="active active-first">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about">À propos</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="#service">Prix</a>
              </li>
              <li>
                <a href="#project">Contact</a>
              </li>
              
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
