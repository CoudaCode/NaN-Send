import "./../assets/css/connexion.css"
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookie from "js-cookie";
import axios from "axios";
function Connexion() {
  const navigate = useNavigate();

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
      console.log("demo", succes.data);
      toast.success(succes.data.message);
      Cookie.set("token", succes.data.token, { expires: 3600 * 24 });
      setTimeout(() => {
        sessionStorage.setItem("token", JSON.stringify(succes.data.id));
        navigate("/dashboard");
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
      <div className="Connexion">
        <div className="container">
          <div className="heading">Connexion</div>
          <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("email", {
                required: "svp votre  Email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "svp entrer un mail valide",
                },
              })}
              className="input"
              type="email"
              id="email"
              placeholder="Adresse Email"
            />
            <input
              required=""
              className="input"
              type="password"
              id="password"
              placeholder="Mot de Passe"
              {...register("password", { required: true })}
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
}
export default Connexion;
