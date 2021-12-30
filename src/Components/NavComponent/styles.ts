import styled from "styled-components";
import theme from "../../styles/theme";

export const NavComponent = styled.div`
  /* box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px; */
  color: ${theme.darkGrey};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  flex: 1 1 auto;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  justify-content: space-between;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: justify;
  text-decoration: none;
  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
  border: 0;
  user-select: none;
  touch-action: manipulation;
  :hover {
    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
  }
  h3 {
    margin-right: 5%;
  }
`;
