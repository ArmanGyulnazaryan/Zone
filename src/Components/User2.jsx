import React from "react";
import man2 from "../assets/man2.svg";
import styled from "styled-components";
const User2Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    @media (min-width: 576px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
export const User2 = () => {
  return (
    <User2Container className="user2">
      <div className="user2__img">
        <img src={man2} alt="" />
      </div>
      <div className="user2-info">
        <div className="user2-info__title">
          We complete every projects extra care as customer need
        </div>
        <div className="user2-info__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
          dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
          amet convallis nuncoe scelerisque in. orem ipsum dolor sit amet,
          consectetur adipisicing elit. Labore eius molestiae facere, natus
          reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit
          laborum iure inventore possimus laboriosam qui nam.
        </div>
        <div className="user2-info__btn">
          <a href="/">Read more</a>
        </div>
      </div>
    </User2Container>
  );
};
