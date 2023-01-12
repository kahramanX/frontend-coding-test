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

type Props = {
  count: number;
  setThemeMode: React.Dispatch<React.SetStateAction<"light" | "dark" | string>>;
  themeMode: "light" | "dark" | string;
};

const Header: React.FC<Props> = ({ count, setThemeMode, themeMode }) => {
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
        <HeaderTitle>Time:</HeaderTitle>
        <HeaderTime>{count}</HeaderTime>
      </HeaderRight>
      <div>
        <select
          onChange={e => {
            setThemeMode(e.target.value);
          }}
          defaultValue={themeMode}
        >
          <option value={"light"}>Light</option>
          <option value={"dark"}>Dark</option>
        </select>
      </div>
      <Sidebar setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
    </HeaderContainer>
  );
};

export default Header;
