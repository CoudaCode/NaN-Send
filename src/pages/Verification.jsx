import whatsap from "./../assets/images/whatsapp.jpeg";
import Mail from "./../assets/images/Mail.png";
import sms from "./../assets/images/sms.png";

import "./../assets/css/verification.css"
function Verification() {
  return (
    <div className="Verification">
      <div className="ensemble">
        <div className="form">
          <div className="code">
            <label htmlFor="name" style={{ color: "#6870e0" }}>
              Créons votre organisation, XXXXXXXXXXXX !
            </label>
            <input
              required=""
              autoComplete="off"
              type="text"
              placeholder="********************"
            />
          </div>

          <div className="input">
            <p>
              Quels sont les principaux canaux de communication que vous
              souhaitez connecter ? <br />{" "}
              <span>Vous pouriez Choisir que trois canaux</span>
            </p>
          </div>

          <div className="cannaux">
            <ul className="lien">
              <li>
                <a href="">
                  <img src={whatsap} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Mail} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={sms} alt="" />
                </a>
              </li>
            </ul>
          </div>

          <fieldset>
            <p style={{ color: "#333" }}>
              Quels es votre ojectiifs principals en utilisant NaN Send?{" "}
            </p>
            <legend className="sr-only">Countries</legend>

            <div className="flex items-center mb-4">
              <input
                id="country-option-1"
                type="radio"
                name="countries"
                value="USA"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="country-option-1"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Gerer les conversations entrantes
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="country-option-2"
                type="radio"
                name="countries"
                value="Germany"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="country-option-2"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Diffusion WathsApp
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="country-option-3"
                type="radio"
                name="countries"
                value="Spain"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="country-option-3"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Annonces Click-to Chat
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="country-option-4"
                type="radio"
                name="countries"
                value="United Kingdom"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="country-option-4"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Envoyer des Campagnes Professionnels
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="country-option-4"
                type="radio"
                name="countries"
                value="United Kingdom"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="country-option-4"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                WathsApp Business Plusieurs Utilisateurs
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="country-option-4"
                type="radio"
                name="countries"
                value="United Kingdom"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="country-option-4"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Autre
              </label>
            </div>
          </fieldset>

          <div className="input">
            <button>Commencer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verification;
