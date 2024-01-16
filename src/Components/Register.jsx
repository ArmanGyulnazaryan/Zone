import React from "react";
import send from "../assets/send.svg";



export const Register = () => {
  return (
    <div className="register">
      <div className="register__title">Subscribe to get the Latest News</div>
      <div className="register__desc">
        We recommended you to subscribe to our newspaper,drop your email below
        to get daily update about us
      </div>
      <label>
        <form id="subscribeForm">
          <div id="emailContainer">
            <input
              type="email"
              id="emailInput"
              placeholder="Enter your email"
              required
            />
            <button type="submit" id="subscribeButton">
              <img src={send} alt="" />
              Subscribe
            </button>
          </div>
        </form>
      </label>
     
    </div>
  );
};
