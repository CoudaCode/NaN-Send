import React from "react";
import "./../assets/css/Automatisation.css";
import { RxHamburgerMenu, RxTarget } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import { BiTimeFive, BiMicrophone } from "react-icons/bi";
import {
  AiOutlineCheck,
  AiFillStar,
  AiOutlineStar,
  AiOutlinePlus,
  AiOutlineCamera,
} from "react-icons/ai";
import { MdInsertEmoticon } from "react-icons/md";
import things from "./../assets/images/pourDashboard.jpeg";
import img1 from "./../assets/images/Message.png";
import img2 from "./../assets/images/callCenter.jpeg";
function Automatisation() {
  return (
    <div className="Automatisation">
      <div>
        <div className="colore">
          <div className="container">
            <div className="titre">
              <h1>
                Automatisation flexible via{" "}
                <span className="barre">NAN-SEND</span>
              </h1>
            </div>

            <div className="boton">
              <button className="etpe">Design</button>

              <button className="etpe1">Route Message</button>

              <button className="etpe1">Qualification</button>

              <button className="etpe1">Processus Interne</button>

              <button className="etpe1">Action Externe</button>

              <button className="etpe1">Compagnie</button>

              <button className="etpe1">Requis</button>
            </div>

            <div className="flex">
              <div className="flex1">
                <p>
                  Conversation <br /> debut
                </p>

                <div className="ball">
                  <div className="bull">
                    <div className="saiPas">
                      <p>ytfjhyvhhgjhvjhjjhvjgh,vnjhvjhvjgjjgjhngfdc</p>
                    </div>
                  </div>
                  <div className="tracer"></div>
                </div>
              </div>

              <div className="flex1">
                <p>
                  Menu
                  <br /> Canals
                </p>

                <div className="ball">
                  <div className="bull">
                    <RxHamburgerMenu className="icon" />
                  </div>
                  <div className="tracer"></div>
                </div>
              </div>

              <div className="flex1">
                <p>
                  Canal
                  <br /> selectionné
                </p>

                <div className="ball">
                  <div className="bull">
                    <FaWhatsapp className="icon" />
                  </div>
                  <div className="tracer"></div>
                </div>
              </div>

              <div className="flex1">
                <p>
                  tagget
                  <br /> d'intérêt
                </p>

                <div className="ball">
                  <div className="bull">
                    <RxTarget className="icon" />
                  </div>
                  <div className="tracer"></div>
                </div>
              </div>

              <div className="flex1">
                <p>
                  <br /> <br />{" "}
                </p>

                <div className="ball">
                  <div className="bulle">
                    <BiTimeFive className="icon" />
                  </div>
                  <div className="tracer"></div>
                </div>
              </div>

              <div className="flex1">
                <p>
                  Conversation <br /> fermé
                </p>

                <div className="ball">
                  <div className="bull">
                    <AiOutlineCheck className="icon" />
                  </div>
                </div>
              </div>

              <div className="chat">
                <h4>Message Chat</h4>
                <div className="texto">
                  <p>
                    Créez une expérience client de haute qualité avec des menus
                    de discussion polyvalents. Invitez vos contacts à explorer
                    des produits et services et marquez leurs intérêts pour une
                    utilisation future dans des listes de prospects, des
                    diffusions marketing ou des campagnes goutte à goutte.
                  </p>
                </div>
                <div className="trai"></div>
                {/* <div className='trai'></div>
<div className='trai'></div> */}
              </div>
            </div>
          </div>
        </div>

        {/* DEUXIEME PARTIE */}

        <div className="supervisor">
          <div className="separe">
            <div className="carre">
              <img src={img1} alt="" />
            </div>
            <div className="carre">
              <img src={img2} alt="" />
            </div>
          </div>

          <div className="tire">
            <h1>
              Tableau de bord <span className="barre">du superviseur</span>
            </h1>
            <br />
            <div className="loi">
              <div className="par">
                <p>
                  Un tableau de bord quotidien permettant aux managers de
                  détecter en un coup d'œil les anomalies des conversations ou
                  des agents. Identifiez les conversations en attente ou non
                  résolues depuis trop longtemps et surveillez les performances
                  et la charge de travail des agents en temps réel.
                </p>
              </div>
            </div>
          </div>

          <div className="separe">
            <div className="carre">
              <img src={img2} alt="" />
            </div>
            <div className="carre">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>

        {/* TROISIEME PARTIE */}
        <div className="send">
          <div className="container">
            <div className="flax">
              <div className="premiText">
                <div className="misApart">
                  <h1>NAN - SEND</h1>
                </div>
                <div className="paragraphe">
                  <p>
                    Rejoignez plus de 10 000 <br />
                    organisations à succès
                  </p>
                </div>
                <div className="etoile">
                  <div className="cors">
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiOutlineStar className="icon" />
                  </div>
                  <p>Basé sur plus de 100 avis</p>
                </div>
              </div>

              <div className="cool">
                <div className="cara">
                  <div className="caro">
                    <div className="second">
                      <p>
                        La vision de NaN repose sur ce que doit être l’avenir de
                        l'Afrique francophone
                      </p>
                      <div className="forImg">
                        <div className="photo">
                          <img src={things} alt="" />
                        </div>
                        <div className="look">
                          <p>Marie Kossiwa Mariam</p>
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                        </div>
                      </div>

                      <div className="bout">
                        <div className="search">
                          <AiOutlinePlus />
                          <div className="recher">
                            <input type="text" />
                            <MdInsertEmoticon className="ic" />
                          </div>
                          <div className="fin">
                            <AiOutlineCamera />
                            <BiMicrophone />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="caro">
                    <div className="second">
                      <p>
                        La vision de NaN repose sur ce que doit être l’avenir de
                        l'Afrique francophone
                      </p>
                      <div className="forImg">
                        <div className="photo">
                          <img src={things} alt="" />
                        </div>
                        <div className="look">
                          <p>Marie Kossiwa Mariam</p>
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                        </div>
                      </div>

                      <div className="bout">
                        <div className="search">
                          <AiOutlinePlus />
                          <div className="recher">
                            <input type="text" />
                            <MdInsertEmoticon className="ic" />
                          </div>
                          <div className="fin">
                            <AiOutlineCamera />
                            <BiMicrophone />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="caro">
                    <div className="second">
                      <p>
                        La vision de NaN repose sur ce que doit être l’avenir de
                        l'Afrique francophone
                      </p>
                      <div className="forImg">
                        <div className="photo">
                          <img src={things} alt="" />
                        </div>
                        <div className="look">
                          <p>Marie Kossiwa Mariam</p>
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                        </div>
                      </div>

                      <div className="bout">
                        <div className="search">
                          <AiOutlinePlus />
                          <div className="recher">
                            <input type="text" />
                            <MdInsertEmoticon className="ic" />
                          </div>
                          <div className="fin">
                            <AiOutlineCamera />
                            <BiMicrophone />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="care">
                  <div className="caro">
                    <div className="second">
                      <p>
                        La vision de NaN repose sur ce que doit être l’avenir de
                        l'Afrique francophone
                      </p>
                      <div className="forImg">
                        <div className="photo">
                          <img src={things} alt="" />
                        </div>
                        <div className="look">
                          <p>Marie Kossiwa Mariam</p>
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                        </div>
                      </div>

                      <div className="bout">
                        <div className="search">
                          <AiOutlinePlus />
                          <div className="recher">
                            <input type="text" />
                            <MdInsertEmoticon className="ic" />
                          </div>
                          <div className="fin">
                            <AiOutlineCamera />
                            <BiMicrophone />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="caro">
                    <div className="second">
                      <p>
                        La vision de NaN repose sur ce que doit être l’avenir de
                        l'Afrique francophone
                      </p>
                      <div className="forImg">
                        <div className="photo">
                          <img src={things} alt="" />
                        </div>
                        <div className="look">
                          <p>Marie Kossiwa Mariam</p>
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                        </div>
                      </div>

                      <div className="bout">
                        <div className="search">
                          <AiOutlinePlus />
                          <div className="recher">
                            <input type="text" />
                            <MdInsertEmoticon className="ic" />
                          </div>
                          <div className="fin">
                            <AiOutlineCamera />
                            <BiMicrophone />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />

                  <div className="caro">
                    <div className="second">
                      <p>
                        La vision de NaN repose sur ce que doit être l’avenir de
                        l'Afrique francophone
                      </p>
                      <div className="forImg">
                        <div className="photo">
                          <img src={things} alt="" />
                        </div>
                        <div className="look">
                          <p>Marie Kossiwa Mariam</p>
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                          <AiFillStar className="ico" />
                        </div>
                      </div>

                      <div className="bout">
                        <div className="search">
                          <AiOutlinePlus />
                          <div className="recher">
                            <input type="text" />
                            <MdInsertEmoticon className="ic" />
                          </div>
                          <div className="fin">
                            <AiOutlineCamera />
                            <BiMicrophone />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Automatisation;
