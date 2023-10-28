import "./../assets/css/Inscription.css";
import google from "./../assets/images/goog.png";
function Inscription() {
  return (
    <div className="Inscription">
      <form>
        <h3>Foumulaire d&apos; Inscription</h3>
        <button className="google">
          <img src={google} alt="" />
          <p>S&apos;incrire avec votre compte Coogle</p>
        </button>
        <div className="content__or-text">
          <span></span>
          <span>Ou</span>
          <span></span>
        </div>
        <div className="labInp">
          <div className="mb-6">
            <label htmlFor="email">Adress Email</label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="**********"
              required
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className=" text-white py-3 px-2 mt-2 rounded items-center m-10">
            Incris
          </button>
        </div>
      </form>
    </div>
  );
}

export default Inscription;
