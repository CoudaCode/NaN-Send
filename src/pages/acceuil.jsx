import React from "react";
import "./../assets/css/Acceuil.css";
import ComposantBienvenu from "../Components/ComposantBienvenu";
import Navbar from "./../Components/Navbar";
import Footer from "./../Components/Footer";
import Automatisation from "../Components/Automatisation";
import Prix from "../Components/Prix";
import Message from "../Components/Message";
import Fil from "../Components/Fil";
import Map from "../Components/Map";
function Acceuil() {
  return (
    <div className="Acceuil">
      <Navbar />
      <ComposantBienvenu />
      <Message />
      <Fil />
      <Prix />
      <Automatisation />
      <Map />
      <Footer />
    </div>
  );
}

export default Acceuil;
