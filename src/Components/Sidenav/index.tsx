import React from "react";
import { SideNav } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  faList,
  faPlusCircle,
  faCogs,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import NavItem from "../NavComponent/index";

const NavBar: React.FC = () => {
  return (
    <>
      <SideNav>
        <NavItem icon={faList} size={"2x"} text={"Atendimentos"} />
        <NavItem icon={faPlusCircle} size={"2x"} text={"Adicionar"} />
        <NavItem icon={faCogs} size={"2x"} text={"Configurações"} />
        <NavItem icon={faUser} size={"2x"} text={"Perfil"} />
      </SideNav>
    </>
  );
};

export default NavBar;
