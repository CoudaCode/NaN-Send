import React from "react";
import "./../assets/css/Footer.css";
import imgLogo from "./../assets/images/log.png";
import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  return (
    <div className="Footer">
      <div className="container-fluid">
        <footer className="text-center text text-white">
          <div className="container-fluid footer">
            <div className="section1">
              <h1>Prêt à commencer?</h1>
              <p>
                Libérez la puissance de NaN_Send pour faciliter <br /> vos
                conversation avec vos clients.
              </p>
            </div>
            <div className="BoxCard">
              <div className="card">
                <p style={{ marginRight: "10px" }}>
                  <i
                    className="fa-solid fa-check"
                    style={{ marginRight: "40px" }}
                  ></i>
                  14 Jours d’essaies
                </p>
                <p>
                  <i className="fa-solid fa-check"></i>
                  Pas de carte de crédit
                </p>
                <p>
                  <i
                    className="fa-solid fa-check"
                    style={{ marginLeft: "25px" }}
                  ></i>
                  Annuler à tout moment
                </p>
                <button className="butonCard">Abonnement</button>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="card">
                <p>
                  <i className="fa-solid fa-check"></i>
                  Chattez plus facilement
                </p>
                <p>
                  <i
                    className="fa-solid fa-check"
                    style={{ marginLeft: "25px" }}
                  ></i>
                  Avantages de NaN_Send
                </p>
                <p>
                  <i className="fa-solid fa-check"></i>
                  Annuler à tout moment
                </p>
                <button className="butonCard">Réservation</button>
              </div>
            </div>
          </div>
          <hr
            className="container my-3"
            style={{ border: "1.5px solid #c7caf6" }}
          />
          <div className="container-fluid p-10 pb-0">
            <section>
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h3>
                    NaN_
                    <span
                      style={{
                        color: "#6870e0",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                      }}
                    >
                      SEND
                    </span>
                  </h3>
                  <img src={imgLogo} alt="" style={{ width: "30%" }} />
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h5>Apropos</h5>
                  <p>
                    <a style={{ color: "white" }}>Blog</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>carrière</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>À propos de nous </a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>Feuille de routeAffiliés</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>Programme de partenariat </a>
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h5>Support</h5>
                  <p>
                    <a style={{ color: "white" }}>Accueil</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>A propos</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>Services</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>Contacts</a>
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-3 col-lg-2 col-xl-2  mt-3">
                  <h5>WhatsApp Guides</h5>
                  <p>
                    <a style={{ color: "white" }}>Entreprise WhatsApp</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>API WhatsApp</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>Tarifs API WhatsApp</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>
                      WhatsApp plusieurs utilisateurs
                    </a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>WhatsApp CRM</a>
                  </p>
                  <p>
                    <a style={{ color: "white" }}>Diffusion WhatsApp</a>
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h5>Bulletin</h5>
                  <input type="email" placeholder="email" />
                  <button
                    style={{
                      padding: "10px",
                      background: "#6870e0",
                      border: "none",
                      color: "#fff",
                      borderRadius: "5PX",
                    }}
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </section>

            <hr
              className="container my-3"
              style={{ border: "1.5px solid #c7caf6" }}
            />

            <section className="p-3 pt-0 bas">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start">
                  <div className="p-3">
                    {" "}
                    NaN_
                    <span style={{ color: "#6870e0" }}>SEND</span>
                  </div>
                </div>
                <div className="col-md- col-lg-4 ml-lg-0 text-center text-md-end">
                  <a className="" role="button">
                    <i className="fa-brands fa-telegram"></i>
                  </a>

                  <a className="" role="button">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="" role="button">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a className="" role="button">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="" role="button">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a className="" role="button">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
