import React from "react";
import man1 from "../assets/man1.svg";
import styled from "styled-components";
const User1Container = styled.div`
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



export const User1 = () => {
  return (
    <User1Container className="user1">
      <div className="user1__img">
        <img src={man1} alt="" />
      </div>
      <div className="user1-info">
        <div className="user1-info__title">
          We complete every projects extra care as customer need
        </div>
        <div className="user1-info__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
          dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
          amet convallis nuncoe scelerisque in. orem ipsum dolor sit amet,
          consectetur adipisicing elit. Labore eius molestiae facere, natus
          reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit
          laborum iure inventore possimus laboriosam qui nam.{" "}
        </div>
        <div className="user1-info__btn">
          <a href="/">Read more</a>
        </div>
      </div>
    </User1Container>
  );
};
