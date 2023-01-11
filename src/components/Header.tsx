import React from "react";
import {
  HeaderContainer,
  HeaderTitle,
  HeaderTime,
  HeaderLeft,
  HeaderRight,
} from "../assets/styles/componentsStyles";
import { HamburgerIcon } from "../assets/icons/icons";
type Props = { count: number };

const Header: React.FC<Props> = ({ count }) => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HamburgerIcon />
      </HeaderLeft>
      <HeaderRight>
        <HeaderTitle>Remaining Time:</HeaderTitle>
        <HeaderTime>{count}</HeaderTime>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
