// import React from "react";
// import "../assets/css/ComposantBienvenu.css"
// import canalDiff1 from "../assets/images/canalDiff1.jpg";
// import statistique from "../assets/images/statistiq.jpg";
// import msgillimit from "../assets/images/msgillimit.jpg";
// import msgGroupe2 from "../assets/images/msgGroupé2.jpg";
// import { Link } from "react-router-dom";

// function Apropos(params) {
//     return (
//         <div className="apropos">
//         <h1>
//           Une plateforme de messagerie unique pour l’envoie de vos messages{" "}
//           <br />
//           groupés, entre entreprises ou organisations
//         </h1>
//         <h3 className="apropos-title">
//           Plus besoin de jongler entre les équipes et les plateformes. Un
//           ensemble de chaînes, une plateforme.
//         </h3>
//         <div className="ligne-cardre">
//           <div className="ligne-cardre1">
//             <div className="cardre-photo">
//               <img src={msgGroupe2} alt="" />
//             </div>
//             <div className="cardre-descrip">
//               <h3>MESSAGE GROUPE</h3>
//               <h4>
//                 Avec NAN-SEND vous pouvez envoyer des messages à un groupe de
//                 personnes sans avoir a ecrire plusieurs fois le message
//               </h4>
//             </div>
//             <button className="cta">
//               <div className="links">
//               <span>
//                 {" "}
//                 <Link to="/connexion" className="lien-voirplus" >Voir plus</Link>
//               </span>
//               <svg viewBox="0 0 13 10" height="10px" width="15px">
//                 <path d="M1,5 L11,5"></path>
//                 <polyline points="8 1 12 5 8 9"></polyline>
//               </svg>
//               </div>
              
//             </button>
//           </div>
//           <div className="ligne-cardre1">
//             <div className="cardre-photo">
//               <img src={statistique} alt="" />
//             </div>
//             <div className="cardre-descrip">
//               <h3>STATISTIQUE D’ENVOI</h3>
//               <h4>
//                 Avec NAN-SEND vous pouvez voir les statistiques de tout vos
//                 messages envoyés comme reçu, quel que soit le canaux de
//                 communication.
//               </h4>
//             </div>
//             <button className="cta">
//               <div className="links">
//               <span>
//                 {" "}
//                 <Link to="/connexion" className="lien-voirplus" >
//                   Voir plus
//                 </Link>
//               </span>
//               <svg viewBox="0 0 13 10" height="10px" width="15px">
//                 <path d="M1,5 L11,5"></path>
//                 <polyline points="8 1 12 5 8 9"></polyline>
//               </svg>
//               </div>
              
//             </button>
//           </div>
//           <div className="ligne-cardre1">
//             <div className="cardre-photo">
//               <img src={canalDiff1} alt="" />
//             </div>
//             <div className="cardre-descrip">
//               <h3>CANAL DE DIFFUSION</h3>
//               <h4>
//                 Avec NAN-SEND vous pouvez choisir le canal de diffusion qui vous
//                 est favorables pour faciliter vos échanges et discussion,
//                 notamment WhatsApp, Message ou par Email.
//               </h4>
//             </div>
//             <button className="cta">
//               <div className="links">
//               <span>
//                 {" "}
//                 <Link to="/connexion" className="lien-voirplus">Voir plus</Link>
//               </span>
//               <svg viewBox="0 0 13 10" height="10px" width="15px">
//                 <path d="M1,5 L11,5"></path>
//                 <polyline points="8 1 12 5 8 9"></polyline>
//               </svg>
//               </div>
              
//             </button>
//           </div>
//           <div className="ligne-cardre1">
//             <div className="cardre-photo">
//               <img src={msgillimit} alt="" />
//             </div>
//             <div className="cardre-descrip">
//               <h3>MESSAGE ILLIMITE</h3>
//               <h4>
//                 Avec NAN-SEND vous pouvez envoie des messages a un nombre
//                 illimité de personnes ou d’entreprise, en toute facilité et
//                 sécurité via tous nos canaux de diffusion.
//               </h4>
//             </div>
//             <button className="cta">
//               <div className="links">
//               <span>
//                 {" "}
//                 <Link to="/connexion" className="lien-voirplus">Voir plus</Link>
//               </span>
//               <svg viewBox="0 0 13 10" height="10px" width="15px">
//                 <path d="M1,5 L11,5"></path>
//                 <polyline points="8 1 12 5 8 9"></polyline>
//               </svg>
//               </div>
              
//             </button>
//           </div>
//         </div>
//       </div>
//     )
// }
// export default Apropos;