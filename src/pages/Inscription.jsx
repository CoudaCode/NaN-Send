import {useForm} from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom/dist";
import Cookies from "js-cookie";
const url = "https://nan-send-api.onrender.com";

import "./../assets/css/inscription.css"



                                
function Inscription() {
  let navigate = useNavigate();
  const {register, handleSubmit, watch ,formState:{errors}} = useForm({
  fullname:'',
  email:'',
  telephone:'',
  nationalite:'',
  password:''
})
const {mutate:user} = useMutation({
  mutationFn: async (send)=>{
      console.log("ok", send)

      let response = await axios.post(`${url}/api/user/create`,send);
      return response;
  },
  onSuccess: (success)=>{
      toast.success(success.data.message)
      Cookies.set('token', success.data.token,{ expires: 3600*24, path: '' })
      setTimeout(()=>{
          navigate('/formulaire')
      },3050)
      },
  onError: (e)=>{
    toast.error(e.response.data.message)
    // toast.errors(erro)
      // setErrorMessage(errors.response)
  }


})
let onSubmit = data=> user(data);
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
