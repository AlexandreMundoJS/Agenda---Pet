import React from "react";
import { NavComponent } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

interface Props {
  icon: IconProp;
  size: "1x" | "2x" | "3x" | "4x";
  text: String;
  url: string;
}
const NavItem: React.FC<Props> = ({ icon, size, text, url, ...props }) => {
  return (
    <>
      <NavComponent>
        <FontAwesomeIcon icon={icon} size={size} {...props} />
        <Link to={url}>
          <h3>{text}</h3>
        </Link>
      </NavComponent>
    </>
  );
};

export default NavItem;
