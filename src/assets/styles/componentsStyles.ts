import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  border: 4px solid black;

  @media (max-width: 425px) {
    div {
      &:first-child {
        display: block;
      }

      &:last-child {
      }
    }
  }
`;

const HeaderTitle = styled.span`
  font-weight: 600;
  margin-right: 8px;
  font-size: 20px;
`;

const HeaderTime = styled.span`
  font-weight: 700;
  font-size: 24px;
`;

const HeaderLeft = styled.div`
  width: 24px;
  display: none;
`;

const HeaderRight = styled.div``;

const BodyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 10%;
`;

const Count = styled.div`
  font-size: 72px;
`;

const Button = styled.button`
  font-size: 26px;
  padding: 8px 16px;
  background-color: white;
  margin-top: 10%;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: black;
    color: white;
  }
`;

export {
  HeaderContainer,
  HeaderTitle,
  HeaderTime,
  HeaderLeft,
  HeaderRight,
  BodyContainer,
  Count,
  Button,
};
