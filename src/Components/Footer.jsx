import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const FooterNav = styled.div`
  @media (max-width: 992px) {
    display: flex;
    padding-top: 20px;
    align-items: center;
  }
`;

const FooterUL = styled.ul`
  @media (max-width: 992px) {
    display: flex;
  }
`;

const FooterLI = styled.li`
  @media (max-width: 992px) {
    margin-right: 20px;
  }
`;

const FooterLink = styled.a`
  &:hover {
    color: #007bff;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer className="footer">
      <div className="line"></div>
      <div className="footer__footer">© 2021 Zone. - All rights reserved.</div>
      <FooterNav className="footer__nav">
        <FooterUL className="footer__ul">
          <FooterLI className="footer__li">
            <a href="/">Privacy</a>
          </FooterLI>
          <FooterLink className="footer__li">
            <a href="/">Security</a>
          </FooterLink>
          <FooterLink className="footer__li">
            <a href="/">Terms</a>
          </FooterLink>
        </FooterUL>
      </FooterNav>
    </FooterContainer>
  );
};
