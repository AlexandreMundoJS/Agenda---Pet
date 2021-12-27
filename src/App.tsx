import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./Components/Header";
import NavBar from "./Components/Sidenav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faPlusCircle,
  faCogs,
  faUser
} from "@fortawesome/free-solid-svg-icons";

const App: React.FC = () => {
  return (
      <>
      <Header />
      <GlobalStyle/>
      <NavBar/>
      </>
  );
};

export default App;