import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import vr from "../assets/vr.svg";
import styled from "styled-components";
const VirtualContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 576px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

const VirtualInfo = styled.div`
  text-align: center;

  @media (max-width: 992px) {
    text-align: left;
    max-width: 400px;
  }
`;

const VirtualBtn = styled.div`
 

  @media (max-width: 992px) {
    flex-direction: row;
  }
`;

const VirtualImg = styled.div`
  max-width: 100%;
  margin-top: 20px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Virtual = () => {
  return (
    <VirtualContainer className="virtual">
      <VirtualInfo className="virtual__info">
        <div className="virtual__title">Virtual Reality Business Solutions</div>
        <div className="virtual__desc">
          We have over 15 year exprience in business consultting arena. We have
          over 15 year exprience in business consultting arena and artficial
          intelligence.
        </div>

        <VirtualBtn className="virtual__btn">
          <div className="virtual__join">
            <a href="/"> Join Us</a>
          </div>
          <a href="/">
            <PlayCircleOutlineIcon color="primary" />
          </a>
          <div className="virtual__video">
            <a href="/">Watch video</a>
          </div>
        </VirtualBtn>
      </VirtualInfo>

      <VirtualImg className="virtual__img">
        <img src={vr} alt="" />
      </VirtualImg>
    </VirtualContainer>
  );
};
