import React from "react";
import { NavComponent } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  icon: IconProp;
  size: "1x" | "2x" | "3x" | "4x";
  text: String;
}
const NavItem: React.FC<Props> = ({ icon, size, text, ...props }) => {
  return (
    <>
      <NavComponent>
        <FontAwesomeIcon icon={icon} size={size} {...props} />
        <h3>{text}</h3>
      </NavComponent>
    </>
  );
};

export default NavItem;
