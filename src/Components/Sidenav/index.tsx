import React from "react";
import { SideNav } from "./styles";
import {Link } from "react-router-dom";

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
        <NavItem icon={faList} size={"2x"} text={"Atendimentos"}>
          <Link to="/atendimentos"></Link>
        </NavItem>
        <NavItem icon={faPlusCircle} size={"2x"} text={"Adicionar"}>
          <Link to="/adicionar"></Link>
        </NavItem>
        <NavItem icon={faCogs} size={"2x"} text={"Configurações"}>
          <Link to="/configuracoes"></Link>
        </NavItem>
        <NavItem icon={faUser} size={"2x"} text={"Perfil"}>
          <Link to="/perfil"></Link>
        </NavItem>
      </SideNav>
    </>
  );
};

export default NavBar;
