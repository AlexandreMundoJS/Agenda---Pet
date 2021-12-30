import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background-color: ${theme.white};
  color: ${theme.white};
  padding: 0px 40px;
  border: 1px solid ${theme.grey};

  @media (max-width: 410px) {
    padding: 6px 40px;
    justify-content: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${theme.darkGrey};
  h1 {
    margin-left: 8px;
    font-size: 25px;
  }
`;

export const UserDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #f0d351;
  h1,h2,h3,h4,h5s {
    margin-left: 8px;
  }
`;
export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  cursor: pointer;
  color: black;
  h1 {
    margin-left: 8px;
  }
`;

export const userImage = styled.img`
  position: absolute;
  width: 36px;
  height: 36px;
  left: 1196px;
  top: 23px;
`;
