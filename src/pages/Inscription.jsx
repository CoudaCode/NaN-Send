import React from "react";
import google from "./../assets/images/goog.png";
import "./../assets/css/Inscription.css";
function Inscription() {
  return (
    <div className="Inscription">
      <form>
        <div className="text">
          <h3>Foumulaire d&apos;Inscription</h3>
          <button className="google">
            <img src={google} alt="" />
            <p>S&apos;incrire avec votre compte Coogle</p>
          </button>
          <div className="content__or-text">
            <span></span>
            <span>Ou</span>
            <span></span>
          </div>
          <label htmlFor="email">Adresse Email</label>
          <br />
          <input type="text" id="email" />
          <br />
          <label htmlFor="mdp">Mot De Passe</label>
          <br />
          <input type="text" id="mdp" />
          <br />
          <button type="submit" className="btnInscription">
            Inscription
          </button>
        </div>
      </form>
    </div>
  );
}

export default Inscription;
