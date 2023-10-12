import React from "react";
import "./../assets/css/Map.css";
function Map() {
  return (
    <div className="Map">
      <div className="frame">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.093516214048!2d-3.966303815471035!3d5.402723021204745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc19316175b8f2b%3A0xf1efa3cf6347ba24!2sPharmacie%20Analya!5e0!3m2!1sfr!2sci!4v1696264972412!5m2!1sfr!2sci"
          width="90%"
          style={{ height: "70vh", margin: "3vw" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="contact">
          <h1>CONTACT INFORMATION</h1>
          {/* <div>
        <ul>
          <li>
            <a href="" className="fa-solid fa-phone"></a>Telephone
            <p>fff</p>
          </li>
          <li>
          <a href="" className="fa-solid fa-phone"></a>Telephone
            <p>fff</p>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
          <a href="" className="fa-solid fa-phone"></a>Telephone
            <p>fff</p>
          </li>
          <li>
          <a href="" className="fa-solid fa-phone"></a>Telephone
            <p>fff</p>
          </li>
        </ul>
      </div> */}
          <div className="row">
            <div className="col">
              <a href="">
                <i className="fa-solid fa-phone"></i>
              </a>{" "}
              <a
                href=""
                className="mesLien"
                style={{ fontSize: "25px", textDecoration: "none" }}
              >
                {" "}
                Telephone
              </a>
              <p>+2250789252529</p>
            </div>
            <div className="col">
              <a href="">
                <i className="fa-solid fa-envelopes-bulk"></i>
              </a>
              <a
                href=""
                className="mesLien"
                style={{ fontSize: "25px", textDecoration: "none" }}
              >
                {" "}
                Mail
              </a>
              <p>info@nan.ci</p>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <a href="">
                <i className="fa-solid fa-location-dot"></i>
              </a>
              <a
                href=""
                className="mesLien"
                style={{ fontSize: "25px", textDecoration: "none" }}
              >
                {" "}
                Adresse
              </a>
              <p>
                Abidjan, Cocody Angré 8éme <br /> Tranche GESTOCI <br />
                (Non loin de la cité DIASPORA)
              </p>
            </div>
            <div className="col">
              <a href="">
                <i className="fa-regular fa-calendar-check"></i>
              </a>
              <a
                href=""
                className="mesLien"
                style={{ fontSize: "25px", textDecoration: "none" }}
              >
                {" "}
                Temps de Travail
              </a>
              <p>
                Lundi Au Vendredi <br /> De 08h00 à 17h00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
