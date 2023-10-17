import "./../assets/css/Verification.css";
import whatsap from "./../assets/images/whatsapp.jpeg";
import Mail from "./../assets/images/Mail.png";
import sms from "./../assets/images/sms.png";
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
            <legend>
              Quels es votre ojectiifs principals en utilisant NaN Send{" "}
            </legend>

            <div className="champ">
              <input type="radio" id="entrantes" name="entrantes" />
              <label htmlFor="entrantes">
                Gerer les conversations entrantes
              </label>
            </div>
            <div className="champ">
              <input type="radio" id="diffusion" name="entrantes" />
              <label>Diffusion WathsApp</label>
            </div>
            <div className="champ">
              <input type="radio" id="annonces" name="entrantes" />
              <label htmlFor="annonces">Annonces Click-to Chat</label>
            </div>
            <div className="champ">
              <input type="radio" id="Professionnels" name="entrantes" />
              <label htmlFor="Professionnels">
                Envoyer des Campagnes Professionnels
              </label>
            </div>
            <div className="champ">
              <input type="radio" id="business" name="entrantes" />
              <label htmlFor="business">
                WathsApp Business Plusieurs Utilisateurs
              </label>
            </div>
            <div className="champ">
              <input type="radio" id="autre" name="entrantes" />
              <label>Autre</label>
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
