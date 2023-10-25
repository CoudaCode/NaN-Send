import imgLogo from "./../assets/images/log.png";
function Connect() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
          <div className="container-fluid footer">
            <div className="section1">
              <h1>Prêt à commencer?</h1>
              <p>
                Libérez la puissance de NaN_Send pour faciliter <br /> vos
                conversation avec vos clients.
              </p>
            </div>
            <div className="BoxCard">
              <div className="card">
                <p style={{ marginRight: "10px" }}>
                  <i
                    className="fa-solid fa-check"
                    style={{ marginRight: "40px" }}
                  ></i>
                  14 Jours d’essaies
                </p>
                <p>
                  <i className="fa-solid fa-check"></i>
                  Pas de carte de crédit
                </p>
                <p>
                  <i
                    className="fa-solid fa-check"
                    style={{ marginLeft: "25px" }}
                  ></i>
                  Annuler à tout moment
                </p>
                <button className="butonCard">Abonnement</button>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="card">
                <p>
                  <i className="fa-solid fa-check"></i>
                  Chattez plus facilement
                </p>
                <p>
                  <i
                    className="fa-solid fa-check"
                    style={{ marginLeft: "25px" }}
                  ></i>
                  Avantages de NaN_Send
                </p>
                <p>
                  <i className="fa-solid fa-check"></i>
                  Annuler à tout moment
                </p>
                <button className="butonCard">Réservation</button>
              </div>
            </div>
          </div>

          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">
              <h3>
                NaN_
                <span
                  style={{
                    color: "#6870e0",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  SEND
                </span>
              </h3>
              <img src={imgLogo} alt="" style={{ width: "30%" }} />
            </div>
            <div className="text-xs uppercase text-gray-500 font-medium">
              Useryy
            </div>
            <a className="my-3 block" href="/#">
              Sign in <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              New Account <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Demo <span className="text-teal-600 text-xs p-1">New</span>
            </a>
            <a className="my-3 block" href="/#">
              Career{" "}
              <span className="text-teal-600 text-xs p-1">Were hiring</span>
            </a>
            <a className="my-3 block" href="/#">
              Surveys <span className="text-teal-600 text-xs p-1">New</span>
            </a>
          </div>
          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Resources
            </div>
            <a className="my-3 block" href="/#">
              Documentation <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Tutorials <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Support <span className="text-teal-600 text-xs p-1">New</span>
            </a>
          </div>
          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Product
            </div>
            <a className="my-3 block" href="/#">
              Our Products <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Great Deals <span className="text-teal-600 text-xs p-1">New</span>
            </a>
            <a className="my-3 block" href="/#">
              Analytics <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Mobile <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Support
            </div>
            <a className="my-3 block" href="/#">
              Help Center <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Conditions <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Contact us
            </div>
            <a className="my-3 block" href="/#">
              XXX XXXX, Floor 4 San Francisco, CA{" "}
              <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              contact@company.com{" "}
              <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 pt-2 ">
        <div
          className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      md:flex-row max-w-6xl"
        >
          <div className="mt-2">NaN-Send</div>
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="/#" className="w-6 mx-1">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="/#" className="w-6 mx-1">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="/#" className="w-6 mx-1">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="/#" className="w-6 mx-1">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="/#" className="w-6 mx-1">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Connect;

{
  /* <hr className="w-100 clearfix d-md-none" /> */
}
