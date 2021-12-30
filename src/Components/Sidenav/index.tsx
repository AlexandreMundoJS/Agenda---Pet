import React from "react";
import { SideNav } from "./styles";
import { Link, BrowserRouter as Router } from "react-router-dom";

import {
  faList,
  faPlusCircle,
  faCogs,
  faUser,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import NavItem from "../NavComponent/index";

const NavBar: React.FC = () => {
  return (
    <>
      <Router>
        <SideNav>
          <NavItem
            url="/atendimentos"
            icon={faList}
            size={"2x"}
            text={"Atendimentos"}
          ></NavItem>
          <NavItem
            url={"/adicionar"}
            icon={faPlusCircle}
            size={"2x"}
            text={"Adicionar"}
          ></NavItem>
          <NavItem
            url={"/editar"}
            icon={faEdit}
            size={"2x"}
            text={"Editar"}
          ></NavItem>
          <NavItem
            url={"/configuracoes"}
            icon={faCogs}
            size={"2x"}
            text={"Configurações"}
          ></NavItem>
          <NavItem
            url={"/perfil"}
            icon={faUser}
            size={"2x"}
            text={"Perfil"}
          ></NavItem>
        </SideNav>
      </Router>
    </>
  );
};

export default NavBar;
