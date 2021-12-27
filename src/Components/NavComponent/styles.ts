import styled from "styled-components";
import theme from "../../styles/theme";

export const NavComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  margin-top: 5%;
  width: 273px;
  height: 54px;
  left: 0px;
  top: 191px;
  padding-left: 10%;
  padding-right: 5%;
  margin-bottom: 10%;
  border: 1px solid ${theme.grey};
  h1, h2, h3, h4, h5{
    padding-left: 5%;
  }
`;
