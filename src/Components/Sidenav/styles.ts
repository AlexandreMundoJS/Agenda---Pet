import styled from "styled-components";
import theme from "../../styles/theme";

export const SideNav = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.white};
  /* background-color: #f0d351; */
  height: calc(100vh - 100px);
  width: 230px;
  top: 100%;
  left: 0;
  position: relative;
  border-right: 1px solid ${theme.grey};
`;
