import React from "react";
import "./../assets/css/Connexion.css";
import google from "./../assets/images/goog.png";

function Connexion() {
  return (
    <div className="Connexion">
      <form>
        <div className="text">
          <h3>Formulaire de connexion</h3>
          <button className="google">
            <img src={google} alt="" />
            <p>connecter-vous avec votre compte Coogle </p>
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
          <button type="submit" className="btnconnexion">
            Connexion
          </button>
        </div>
      </form>
    </div>
  );
}

export default Connexion;
