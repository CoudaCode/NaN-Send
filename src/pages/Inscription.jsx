import "./../assets/css/Inscription.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Inscription() {
  return (
    <div className="Inscription">
      <div className="container">
        <div className="heading">Inscription</div>
        <form action="" className="form">
          <input
            required=""
            className="input"
            type="text"
            name="nom"
            id="nom"
            placeholder="Nom d'Utilisateur"
          />
          <input
            required=""
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="Adresse Email"
          />
          <input
            required=""
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Mot de Passe"
          />
          <span className="forgot-password">
            <a href="#">Mot de passe oublié ?</a>
          </span>
          <input className="login-button" type="submit" value="S'inscrire" />
        </form>
        <div className="social-account-container">
          <span className="title">Ou connectez-vous avec</span>
          <div className="social-accounts">
            <Link>
              <button className="social-button google">
                <span>{<FcGoogle />}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
