import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Container, Logo, UserDiv, User } from "./styles";
const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <FontAwesomeIcon icon={faPaw} size="4x" />
        <h1>Agenda Pet</h1>
      </Logo>
      <UserDiv>
        <User>
          <h3>Alexandre Machado</h3>
          <h5>Logged In</h5>
        </User>
      </UserDiv>
    </Container>
  );
};

export default Header;
