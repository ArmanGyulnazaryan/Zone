import React from "react";
import sunny from "../assets/sunny.svg";
import alina from "../assets/alina.svg";
import alex from "../assets/alex.svg";
import afroza from "../assets/afroza.svg";
import skype from "../assets/skype.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";

export const Team = () => {
  return (
    <div className="team">
      <div className="team__title">Met Our Team</div>
      <div className="team__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
      </div>

      <div className="team__list">
        <div className="team-item">
          <div className="team-item__img">
            <img src={sunny} alt="" />
          </div>
          <div className="team-item__name">Sunny Khan</div>
          <div className="team-item__profession">Executive officer</div>
          <div className="team-item__social">
            <ul className="team-item__nav">
              <li className="team-item__li">
                <a href="/">
                  <img src={skype} alt="" />
                </a>
              </li>
              <li className="team-item__li">
                <a href="/">
                  <img src={linkedin} alt="" />
                </a>
              </li>
              <li className="team-item__li">
                <a href="/">
                  <img src={twitter} alt="" />
                </a>
              </li>
              <li className="team-item__li">
                <a href="/">
                  <img src={facebook} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="team-item">
          <div className="team-item__img">
            <img src={alina} alt="" />
          </div>
          <div className="team-item__name">Alina Jesia</div>
          <div className="team-item__profession">UX/UI DESIGNER</div>
          <div className="team-item__social">
            {" "}
            <ul className="team-item__nav">
              <li className="team-item__li">
                {" "}
                <a href="/">
                  <img src={skype} alt="" />
                </a>
              </li>
              <li className="team-item__li">
                <a href="/">
                  <img src={linkedin} alt="" />
                </a>
              </li>
              <li className="team-item__li">
                <a href="/">
                  <img src={twitter} alt="" />
                </a>
              </li>
              <li className="team-item__li">
                <a href="/">
                  <img src={facebook} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="team-item">
          <div className="team-item__img">
            <img src={alex} alt="" />
          </div>
          <div className="team-item__name">Alex Sohag</div>
          <div className="team-item__profession">BUSINESS DEVELOPMENT</div>
          <div className="team-item__social">
            <ul className="team-item__nav">
              <li className="team-item__li">
                {" "}
                <a href="/">
                  <img src={skype} alt="" />
                </a>
              </li>
              <li className="team-item__li">
                <a href="/">
                  <img src={linkedin} alt="" />
                </a>
              </li>
              <li className="team-item__li">
                <a href="/">
                  <img src={twitter} alt="" />
                </a>
              </li>
              <li className="team-item__li">
                <a href="/">
                  <img src={facebook} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="team-item">
          <div className="team-item__img">
            <img src={afroza} alt="" />
          </div>
          <div className="team-item__name">Afroza Mou</div>
          <div className="team-item__profession">Head of marketing</div>
          <div className="team-item__social">
            <ul className="team-item__nav">
              <li className="team-item__li">
                {" "}
                <a href="/">
                  <img src={skype} alt="" />
                </a>
              </li>
              <li className="team-item__li">
                <a href="/">
                  <img src={linkedin} alt="" />
                </a>
              </li>
              <li className="team-item__li">
                <a href="/">
                  <img src={twitter} alt="" />
                </a>
              </li>
              <li className="team-item__li">
                <a href="/">
                  <img src={facebook} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
