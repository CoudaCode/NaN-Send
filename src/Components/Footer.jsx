// import "./../assets/css/Footer.css";
// import imgLogo from "./../assets/images/log.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// function Footer() {
//   return (
//     <div className="Footer">
//       <div className="container-fluid">
//         <footer className="text-center text text-white">
//           <div className="container-fluid footer">
//             <div className="section1">
//               <h1>Prêt à commencer?</h1>
//               <p>
//                 Libérez la puissance de NaN-Send pour faciliter <br /> vos
//                 conversation avec vos clients.
//               </p>
//             </div>
//             <div className="BoxCard">
//               <div className="card">
//                 <p style={{ marginRight: "10px" }}>
//                   <i
//                     className="fa-solid fa-check"
//                     style={{ marginRight: "40px" }}
//                   ></i>
//                   14 Jours d’essaies
//                 </p>
//                 <p>
//                   <i className="fa-solid fa-check"></i>
//                   Pas de carte de crédit
//                 </p>
//                 <p>
//                   <i
//                     className="fa-solid fa-check"
//                     style={{ marginLeft: "25px" }}
//                   ></i>
//                   Annuler à tout moment
//                 </p>
//                 <button className="butonCard">Abonnement</button>
//               </div>
//               <hr className="w-100 clearfix d-md-none" />
//               <div className="card">
//                 <p>
//                   <i className="fa-solid fa-check"></i>
//                   Chattez plus facilement
//                 </p>
//                 <p>
//                   <i
//                     className="fa-solid fa-check"
//                     style={{ marginLeft: "25px" }}
//                   ></i>
//                   Avantages de NaN-Send
//                 </p>
//                 <p>
//                   <i className="fa-solid fa-check"></i>
//                   Annuler à tout moment
//                 </p>
//                 <button className="butonCard">Réservation</button>
//               </div>
//             </div>
//           </div>
//           <hr
//             className="container my-3"
//             style={{ border: "1.5px solid #c7caf6" }}
//           />

       
//           <div className="container-fluid p-10 pb-0">
//             <section>
//               <div className="row">
//                 <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
//                   <h3>
//                     NaN-
//                     <span
//                       style={{
//                         color: "#6870e0",
//                         fontWeight: "bold",
//                         fontSize: "1.5rem",
//                       }}
//                     >
//                       SEND
//                     </span>
//                   </h3>
//                   <img src={imgLogo} alt="" style={{ width: "30%" }} />
//                 </div>
//                 <hr className="w-100 clearfix d-md-none" />
//                 <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
//                   <h5>Apropos</h5>
//                   <p>
//                     <a style={{ color: "white" }}>Blog</a>
//                   </p>
//                   <p>
//                     <a style={{ color: "white" }}>carrière</a>
//                   </p>
//                   <p>
//                     <a style={{ color: "white" }}>À propos de nous </a>
//                   </p>
//                   <p>
//                     <a style={{ color: "white" }}>Feuille de routeAffiliés</a>
//                   </p>
//                   <p>
//                     <a style={{ color: "white" }}>Programme de partenariat </a>
//                   </p>
//                 </div>
//                 <hr className="w-100 clearfix d-md-none" />
//                 <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
//                   <h5>Support</h5>
//                   <p>
//                     <a style={{ color: "white" }}>Accueil</a>
//                   </p>
//                   <p>
//                     <a style={{ color: "white" }}>A propos</a>
//                   </p>
//                   <p>
//                     <a style={{ color: "white" }}>Services</a>
//                   </p>
//                   <p>
//                     <a style={{ color: "white" }}>Contacts</a>
//                   </p>
//                 </div>
//                 <hr className="w-100 clearfix d-md-none" />
//                 <div className="col-md-3 col-lg-2 col-xl-2  mt-3">
//                   <h5>WhatsApp Guides</h5>
//                   <p>
//                     <a style={{ color: "white" }}>Entreprise WhatsApp</a>
//                   </p>
//                   <p>
//                     <a style={{ color: "white" }}>API WhatsApp</a>
//                   </p>
//                   <p>
//                     <a style={{ color: "white" }}>Tarifs API WhatsApp</a>
//                   </p>
//                   <p>
//                     <a style={{ color: "white" }}>
//                       WhatsApp plusieurs utilisateurs
//                     </a>
//                   </p>
//                   <p>
//                     <a style={{ color: "white" }}>WhatsApp CRM</a>
//                   </p>
//                   <p>
//                     <a style={{ color: "white" }}>Diffusion WhatsApp</a>
//                   </p>
//                 </div>
//                 <hr className="w-100 clearfix d-md-none" />
//                 <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
//                   <h5>Bulletin</h5>
//                   <input type="email" placeholder="email" />
//                   <button
//                     style={{
//                       padding: "10px",
//                       background: "#6870e0",
//                       border: "none",
//                       color: "#fff",
//                       borderRadius: "5PX",
//                     }}
//                   >
//                     Envoyer
//                   </button>
//                 </div>
//               </div>
//             </section>

//             <hr
//               className="container my-3"
//               style={{ border: "1.5px solid #c7caf6" }}
//             />

//             <section className="p-3 pt-0 bas">
//               <div className="row d-flex align-items-center">
//                 <div className="col-md-7 col-lg-8 text-center text-md-start">
//                   <div className="p-3">
//                     {" "}
//                     NaN_
//                     <span style={{ color: "#6870e0" }}>SEND</span>
//                   </div>
//                 </div>
//                 <div className="col-md- col-lg-4 ml-lg-0 text-center text-md-end">
//                   <a className="" role="button">
//                     <i className="fa-brands fa-telegram"></i>
//                   </a>

//                   <a className="" role="button">
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                   <a className="" role="button">
//                     <i className="fa-brands fa-linkedin"></i>
//                   </a>
//                   <a className="" role="button">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                   <a className="" role="button">
//                     <i className="fa-brands fa-youtube"></i>
//                   </a>
//                   <a className="" role="button">
//                     <i className="fa-brands fa-whatsapp"></i>
//                   </a>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default Footer;


import imgLogo from "./../assets/images/log.png";

function Footer() {
  return (
    <div className="Footer bg-gray-900 text-white py-10">
      <div className="container mx-auto">
        <footer className="text-center">
          <div className="container mx-auto">
            <div className="lg:flex lg:justify-between">
              <div className="lg:w-1/2">
                <h1 className="text-3xl font-semibold">Prêt à commencer?</h1>
                <p>
                  Libérez la puissance de NaN-Send pour faciliter <br /> vos
                  conversation avec vos clients.
                </p>
              </div>
              <div className="lg:w-1/2 lg:flex lg:justify-center lg:space-x-4 mt-4">
                <div className="text-center lg:text-left">
                  <p className="mb-2">
                    <i className="fas fa-check mr-2"></i>14 Jours d’essais
                  </p>
                  <p className="mb-2">
                    <i className="fas fa-check mr-2"></i>Pas de carte de crédit
                  </p>
                  <p>
                    <i className="fas fa-check mr-2"></i>Annuler à tout moment
                  </p>
                  <button className="btn-card">Abonnement</button>
                </div>
                <hr className="lg:hidden my-3 w-full border-t border-gray-300" />
                <div className="text-center lg:text-left mt-4 lg:mt-0">
                  <p className="mb-2">
                    <i className="fas fa-check mr-2"></i>Chattez plus facilement
                  </p>
                  <p className="mb-2">
                    <i className="fas fa-check mr-2"></i>Avantages de NaN-Send
                  </p>
                  <p>
                    <i className="fas fa-check mr-2"></i>Annuler à tout moment
                  </p>
                  <button className="btn-card">Réservation</button>
                </div>
              </div>
            </div>
            <hr className="my-3 border-t border-gray-300" />

            <div className="lg:flex lg:justify-between">
              <div className="lg:w-1/2 lg:flex lg:items-center">
                <h3 className="text-3xl font-semibold">
                  NaN-
                  <span className="text-blue-600 font-bold text-3xl">SEND</span>
                </h3>
                <img src={imgLogo} alt="Logo" className="w-20 ml-4" />
              </div>
              <hr className="lg:hidden my-3 w-full border-t border-gray-300" />
              <div className="lg:w-1/2 lg:flex lg:justify-between">
                <div className="lg:w-1/4">
                  <h5 className="mb-2">Apropos</h5>
                  <p>
                    <a href="#" className="text-white">
                      Blog
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Carrière
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      À propos de nous
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Feuille de route Affiliés
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Programme de partenariat
                    </a>
                  </p>
                </div>
                <div className="lg:w-1/4">
                  <h5 className="mb-2">Support</h5>
                  <p>
                    <a href="#" className="text-white">
                      Accueil
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      A propos
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Services
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Contacts
                    </a>
                  </p>
                </div>
                <div className="lg:w-1/4">
                  <h5 className="mb-2">WhatsApp Guides</h5>
                  <p>
                    <a href="#" className="text-white">
                      Entreprise WhatsApp
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      API WhatsApp
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Tarifs API WhatsApp
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      WhatsApp plusieurs utilisateurs
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      WhatsApp CRM
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-white">
                      Diffusion WhatsApp
                    </a>
                  </p>
                </div>
                <div className="lg:w-1/4">
                  <h5 className="mb-2">Bulletin</h5>
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-gray-700 text-white p-2 rounded"
                  />
                  <button
                    className="bg-blue-600 text-white p-2 rounded mt-2"
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </div>
            <hr className="my-3 border-t border-gray-300" />

            <div className="py-3">
              <div className="lg:flex lg:justify-between">
                <div className="lg:w-1/2 text-center lg:text-left">
                  <div className="p-3">
                    {" "}
                    NaN-
                    <span className="text-blue-600">SEND</span>
                  </div>
                </div>
                <div className="lg:w-1/2 text-center lg:text-right mt-4 lg:mt-0">
                  <a className="mr-2" role="button">
                    <i className="fab fa-telegram"></i>
                  </a>

                  <a className="mr-2" role="button">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="mr-2" role="button">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a className="mr-2" role="button">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="mr-2" role="button">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a role="button">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
