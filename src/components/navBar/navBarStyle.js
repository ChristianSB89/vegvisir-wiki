import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.nav`
  /* border: 4px red double; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 8em;
  background: #826a48;
  background: linear-gradient(
    0deg,
    rgba(102, 83, 57, 1) 0%,
    rgba(130, 106, 72, 1) 8%
  );
`;

export const TitleWrapper = styled.div`
  /* border: purple 2px solid; */
  /* padding: 0 1em; */
`;

export const LogoStyle = styled.img`
  width: 10em;
  padding: 0;
`;

export const LinkFlex = styled.div`
  border: 2px yellow solid;
  border-radius: 0.3em;
  padding: 0 2em;
  display: flex;
  justify-content: flex-end;
`;

export const StyledLi = styled.li`
  border: 2px blue solid;
  list-style: none;
  margin: 1em 0.5em;
  padding: 0 1em;
  border-radius: 0.3em;
  text-align: center;
`;

export const LinkStyle = styled(NavLink)`
  /* border: 2px solid magenta; */
  text-decoration: none;
  padding: 5.45em 1em;
  text-transform: uppercase;
  font-weight: 500;
  background: #826a48;
  background: linear-gradient(
    0deg,
    rgba(102, 83, 57, 1) 0%,
    rgba(130, 106, 72, 1) 8%
  );
  &:hover {
    padding-bottom: 6.5em;
    border-radius: 0 0 0.5em 0.5em;
    background: linear-gradient(
      0deg,
      rgba(102, 83, 57, 1) 5%,
      rgba(130, 106, 72, 1) 15%
    );
  }
  &.active {
    padding-bottom: 6.5em;
    border-radius: 0 0 0.5em 0.5em;
    background: linear-gradient(
      0deg,
      rgba(102, 83, 57, 1) 5%,
      rgba(130, 106, 72, 1) 15%
    );
  }
`;
