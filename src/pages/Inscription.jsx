import { useForm } from "react-hook-form";
import "./../assets/css/Inscription.css";
import { FcGoogle } from "react-icons/fc";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
                                    

const {register, handleSubmit, watch ,formState:{errors}} = useForm({
  fullname:'',
  email:'',
  telephone:'',
  nationalite:'',
  password:''
})

function Inscription() {
  return (
    <div className="Inscription">
      <div className="container">
        <div className="heading">Inscription</div>
        <form action=""   className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            required=""
            className="input"
            type="text"
            name="fullname"
            id="nom"
            placeholder="Votre nom et Prénom"
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
            type="number"
            name="tel"
            id="tel"
            placeholder="Téléphone"
          />
            <input
            required=""
            className="input"
            type="text"
            name="nationalite"
            id="nationalite"
            placeholder="Votre nationalité"
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
