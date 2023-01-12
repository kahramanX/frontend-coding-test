import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  border: 4px solid ${({ theme }) => theme.colors.borderColor};

  @media (max-width: 500px) {
    div {
      &:first-child {
        display: block;
      }

      &:last-child {
      }
    }
  }

  .sidebar.true {
    display: block;
  }

  .sidebar.false {
    display: none;
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

  svg {
    fill: ${({ theme }) => theme.colors.text};
  }
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
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: 10%;
  color: ${({ theme }) => theme.colors.text};
  border-color: ${({ theme }) => theme.colors.borderColor};

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 75%;
  height: 100vh;
  border: 4px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.background};
`;

const SidebarTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
  padding: 18px;
  display: flex !important;
  justify-content: space-between !important;
  border-bottom: 4px solid ${({ theme }) => theme.colors.borderColor};
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
  SidebarContainer,
  SidebarTitle,
};
