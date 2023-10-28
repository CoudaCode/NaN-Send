import React from "react";
import "./../assets/css/Prix.css";
import { BsCheckLg } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
function Prix() {
  return (
    <>
    <div className="Prix">
      <div className="container-card">
        <div className="card-prix1">
          <div className="entete-card">
            <h4>Basic</h4>
          </div>
          <div className="triangle-down"></div>
          <div className="card-prix-trait"></div>
          <div className="container-symbole"><span className="card-prix-check">{<BsCheckLg/>}</span><span className="prix-text">premier essaie</span></div>
          <div className="container-symbole-red"><span className="card-prix-cross">{<ImCross/>}</span><span className="prix-text">deuxieme idee</span></div>
          <div className="container-symbole-red"><span className="card-prix-cross">{<ImCross/>}</span><span className="prix-text">deuxieme idee</span></div>
          <div className="container-symbole-red"><span className="card-prix-cross">{<ImCross/>}</span><span className="prix-text">deuxieme idee</span></div>
          <div className="card-prix-trait"></div>
          <div className="card-price"><span className="price">200 000 FCFA</span></div>
        </div>
        <div className="card-prix2">
          <div className="entete-card">
            <h4>Standart</h4>
          </div>
          <div className="triangle-down"></div>
          <div className="card-prix-trait"></div>
          <div className="container-symbole"><span className="card-prix-check">{<BsCheckLg/>}</span><span className="prix-text">premier essaie</span></div>
          <div className="container-symbole"><span className="card-prix-check">{<BsCheckLg/>}</span><span className="prix-text">premier essaie</span></div>
          <div className="container-symbole"><span className="card-prix-check">{<BsCheckLg/>}</span><span className="prix-text">premier essaie</span></div>
          <div className="container-symbole-red"><span className="card-prix-cross">{<ImCross/>}</span><span className="prix-text">deuxieme idee</span></div>
          <div className="card-prix-trait"></div>
          <div className="card-price"><span className="price">200 000 FCFA</span></div>
        </div>
        <div className="card-prix3">
          <div className="entete-card">
            <h4>Premium</h4>
          </div>
          <div className="triangle-down"></div>
          <div className="card-prix-trait"></div>
          <div className="container-symbole"><span className="card-prix-check">{<BsCheckLg/>}</span><span className="prix-text">premier essaie</span></div>
          <div className="container-symbole"><span className="card-prix-check">{<BsCheckLg/>}</span><span className="prix-text">premier essaie</span></div>
          <div className="container-symbole"><span className="card-prix-check">{<BsCheckLg/>}</span><span className="prix-text">premier essaie</span></div>
          <div className="container-symbole"><span className="card-prix-check">{<BsCheckLg/>}</span><span className="prix-text">premier essaie</span></div>
          <div className="card-prix-trait"></div>
          <div className="card-price"><span className="price">200 000 FCFA</span></div>
        </div>
      </div>
    
    </div>
    
    </>
  )
}

export default Prix;
