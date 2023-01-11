import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderTitle,
  HeaderTime,
  HeaderLeft,
  HeaderRight,
} from "../assets/styles/componentsStyles";
import { HamburgerIcon } from "../assets/icons/icons";
import Sidebar from "../components/Sidebar";

type Props = { count: number };

const Header: React.FC<Props> = ({ count }) => {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  return (
    <HeaderContainer>
      <HeaderLeft
        onClick={() => {
          setOpenSideBar(true);
        }}
      >
        <HamburgerIcon />
      </HeaderLeft>
      <HeaderRight>
        <HeaderTitle>Remaining Time:</HeaderTitle>
        <HeaderTime>{count}</HeaderTime>
      </HeaderRight>
      <Sidebar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
    </HeaderContainer>
  );
};

export default Header;
