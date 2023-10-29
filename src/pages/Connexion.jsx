import "./../assets/css/Connexion.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Connexion() {
  return (
    <>
<<<<<<< HEAD
    <div className="coprs-contenaire">
      <div className="container">
      <div className="heading">Connexion</div>
      <form action="" className="form">
        <input required="" className="input" type="email" name="email" id="email" placeholder="Adresse Email"/>
        <input required="" className="input" type="password" name="password" id="password" placeholder="Mot de Passe"/>
        <span className="forgot-password"><a href="#">Mot de passe oublié ?</a></span>
        <input className="login-button" type="submit" value="Se connecter"/>
        
      </form>
      <div className="social-account-container">
          <span className="title">Ou connectez-vous avec</span>
          <div className="social-accounts">
            <Link>
            <button className="social-button google">
              <span>{<FcGoogle/>}</span>
            </button>
            </Link>

          </div>
        </div>
    </div>
    </div>
   
    </>
  )
=======
      <div className="Connexion">
        <div className="container">
          <div className="heading">Connexion</div>
          <form action="" className="form">
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
            <input
              className="login-button"
              type="submit"
              value="Se connecter"
            />
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
    </>
  );
>>>>>>> fa2189cad2ec9ff1816845e17748734e1eaf37b8
}
export default Connexion;
