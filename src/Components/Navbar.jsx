// import { useRef } from "react";
// import "./../assets/css/Navbar.css";
// import { Link } from "react-router-dom";
// import { BiSolidMessageRoundedDots } from "react-icons/bi";
// import { TfiMenuAlt } from "react-icons/tfi";
// import { RiEyeCloseLine } from "react-icons/ri";

// function Navbar() {
// const nav = useRef(null);
// const toggle = (event) => {
//   const close = document.getElementById("close");

//   close.style.display = "block";
//   close.addEventListener("click", (evn) => {
//     nav.current.classNameList.remove("active");
//     event.target.style.display = "block";
//     evn.target.style.display = "none";
//   });
//   event.target.style.display = "none";
//   console.log(event.target);
//   nav.current.classNameList.toggle("active");
// };
// return (
//   <div className="Navbar">
//     <nav class="navbar navbar-expand-custom navbar-mainbg">
//       <a class="navbar-brand navbar-logo" href="#">
//         Navbar
//       </a>
//       <button
//         class="navbar-toggler"
//         type="button"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <i class="fas fa-bars text-white"></i>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul class="navbar-nav ml-auto">
//           <div class="hori-selector">
//             <div class="left"></div>
//             <div class="right"></div>
//           </div>
//           <li class="nav-item">
//             <a class="nav-link" href="javascript:void(0);">
//               <i class="fas fa-tachometer-alt"></i>Dashboard
//             </a>
//           </li>
//           <li class="nav-item active">
//             <a class="nav-link" href="javascript:void(0);">
//               <i class="far fa-address-book"></i>Address Book
//             </a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="javascript:void(0);">
//               <i class="far fa-clone"></i>Components
//             </a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="javascript:void(0);">
//               <i class="far fa-calendar-alt"></i>Calendar
//             </a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="javascript:void(0);">
//               <i class="far fa-chart-bar"></i>Charts
//             </a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="javascript:void(0);">
//               <i class="far fa-copy"></i>Documents
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   </div>
//   // <div className="Navbar">
//   //   <nav>
//   //     <a href="#">
//   //       <span className="reactIcon-logo">
//   //         <BiSolidMessageRoundedDots />
//   //       </span>
//   //       <span className="span1">NaN-</span>
//   //       <span className="span2">SEND</span>
//   //     </a>
//   //     <ul className="navlist" ref={nav}>
//   //       <li>
//   //         <a href="" className="Acceuil-active">
//   //           Accueil
//   //         </a>
//   //       </li>
//   //       <li>
//   //         <a href="">À propos</a>
//   //       </li>
//   //       <li>
//   //         <a href="">Services</a>
//   //       </li>
//   //       <li>
//   //         <a href="">Contact</a>
//   //       </li>
//   //     </ul>
//   //     <div className="partie-login">
//   //       <Link to="/Login" className="btn">
//   //         Se connecter
//   //       </Link>
//   //     </div>
//   //     <span className="menuBurger" onClick={toggle} id="burger">
//   //       <TfiMenuAlt />
//   //     </span>
//   //     <span className="close" id="close">
//   //       <RiEyeCloseLine />
//   //     </span>
//   //   </nav>
//   // </div>
// );
// }
// export default Navbar;
// Navbar.jsx
import React, { useState } from "react";

import "./../assets/css/Navbar.css";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg main-nav">
          <a className="navbar-brand" href="/mojo">
            <img
              src="http://rajeshdas.com/assets/images/logo.svg"
              alt="rajeshdas.com"
            />
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
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="mainMenu"
          >
            <ul className="navbar-nav ml-auto text-uppercase f1">
              <li>
                <a href="#home" className="active active-first">
                  home
                </a>
              </li>
              <li>
                <a href="#about">about us</a>
              </li>
              <li>
                <a href="#service">services</a>
              </li>
              <li>
                <a href="#project">projects</a>
              </li>
              <li>
                <a href="#team">team</a>
              </li>
              <li>
                <a href="#testimony">testimonils</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
