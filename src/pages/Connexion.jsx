import "./../assets/css/Connexion.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Connexion() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const login = async (data) => {
    const result = await axios.post(
      "https://nan-send-api.onrender.com/api/user/login",
      data
    );
    return result;
  };

  const { register, handleSubmit } = useForm({
    email: "",
    password: "",
  });

  const { mutate: loginUser } = useMutation({
    mutationFn: (Mydata) => login(Mydata),
    onSuccess: (succes) => {
      toast.success(succes.data.message);
      setTimeout(() => {
        navigate("/profil");
        sessionStorage.setItem(
          "user",
          JSON.stringify({ user: "Bailleur", status: true })
        );
      }, 3000);
    },
    onError: (e) => {
      console.log(e.response.data.message);
      toast.error(e.response.data.message);
    },
  });

  const onSubmit = (data) => loginUser(data);
  return (
    <>
      <div className='Connexion'>
        <div className='container'>
          <div className='heading'>Connexion</div>
          <form action='' className='form' onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("email", {
                required: "svp votre  Email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "svp entrer un mail valide",
                },
              })}
              className='input'
              type='email'
              name='email'
              {...register("password", { required: true })}
              id='email'
              placeholder='Adresse Email'
            />
            <input
              required=''
              className='input'
              type='password'
              name='password'
              id='password'
              placeholder='Mot de Passe'
            />
            <span className='forgot-password'>
              <a href='#'>Mot de passe oublié ?</a>
            </span>
            <input
              className='login-button'
              type='submit'
              value='Se connecter'
            />
          </form>
          <div className='social-account-container'>
            <span className='title'>Ou connectez-vous avec</span>
            <div className='social-accounts'>
              <Link>
                <button className='social-button google'>
                  <span>{<FcGoogle />}</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Connexion;
