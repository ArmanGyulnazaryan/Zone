import React from "react";
import logo from "../assets/logo.svg";
import styled from "styled-components";

const HeaderContainer = styled.div`
  @media (max-width: 992px) {
    flex-direction: column;
  }
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
const Navigation = styled.div`
  @media (max-width: 992px) {
    margin-top: 15px;
    padding-top: 37px;
  }
  @media (max-width: 576px) {
    margin-top: 15px;
    padding-top: 37px;
  }

  ul {
    @media (max-width: 992px) {
      flex-direction: column;
      text-align: center;
    }
  }

  li {
    @media (max-width: 992px) {
      margin-bottom: 10px;
    }
    }
  }
  }
`;

export const Header = () => {
  return (
    <HeaderContainer className="header">
      <div className="header__logo">
        <a href="">
          <img className="header__img" src={logo} alt="" />
          <span>Zone.</span>
        </a>
      </div>
      <Navigation className="header__nav">
        <ul className="header__ul">
          <li className="header__li">
            <a href="/">Home</a>
          </li>
          <li className="header__li">
            <a href="/">About Us</a>
          </li>
          <li className="header__li">
            <a href="/">Service</a>
          </li>
          <li className="header__li">
            <a href="/">Pricing</a>
          </li>
          <li className="header__li">
            <a href="/">Blog</a>
          </li>
          <div className="header__btn">
            <a href="">Contact Us</a>
          </div>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
};