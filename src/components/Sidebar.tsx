import React from "react";
import {
  SidebarContainer,
  SidebarTitle,
} from "../assets/styles/componentsStyles";

type Props = {
  openSideBar: boolean;
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: React.FC<Props> = ({ openSideBar, setOpenSideBar }) => {
  return (
    <SidebarContainer className={`sidebar ${openSideBar}`}>
      <SidebarTitle>
        <div>Sidebar</div>
        <div
          onClick={() => {
            setOpenSideBar(false);
          }}
        >
          X
        </div>
      </SidebarTitle>
      😊
    </SidebarContainer>
  );
};

export default Sidebar;
