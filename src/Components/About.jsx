import React from "react";
import logo from "../assets/logo.svg";
import location from "../assets/location.svg";
import tel from "../assets/tel.svg";
import message from "../assets/message.svg";
import social from "../assets/social.svg";
import styled from "styled-components";

const AboutContainer = styled.div`
  @media (max-width: 992px) {
    flex-direction: column;
    padding-left: 93px;
    
  }
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
export const About = () => {
  return (
    <AboutContainer className="about">
      <div class="about-zone">
        <a href="/">
          <img src={logo} alt="" />
          <span>Zone.</span>
        </a>
        <a href="/">
          <img src={location} alt="" />
          Dhaka, Bangladesh
        </a>
        <a href="/">
          <img src={tel} alt="" />
          0943833399
        </a>
        <a href="/">
          <img src={message} alt="" />
          support@zone.com
        </a>
        <div className="about-social">
          <a href="/">
            <img src={social} alt="" />
          </a>
        </div>
      </div>
      <div class="about-service">
        <a href="/">Service</a>
        <a href="/">Order Management </a>
        <a href="/"> Social Assistant</a>
        <a href="/">Crypto Platform</a>
        <a href="/">Analyzer of the News</a>
      </div>
      <div class="about-service">
        <a href="/"> Company</a>
        <a href="/">About Us</a>
        <a href="/">News</a>
        <a href="/">Our trusted partner</a>
        <a href="/">New users FAQ</a>
      </div>
      <div class="about-service">
        <a href="/">Supports</a>
        <a href="/">Help center</a>
        <a href="/">Feedbcak</a>
        <a href="/">Contact us</a>
        <a href="/">Terms conditins</a>
      </div>

      <div class="about-service">
        <a href="/">Resources</a>
        <a href="/">Download app</a>
        <a href="/">Blog</a>
        <a href="/">What’s new</a>
        <a href="/">Sitemap</a>
      </div>
    </AboutContainer>
  );
};