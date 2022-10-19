import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.nav`
  border: 4px red double;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 8em;
`;

export const TitleWrapper = styled.div`
  border: purple 2px solid;
  border-radius: 1em;
  padding: 0 1em;
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
  text-decoration: none;
  border: 2px solid magenta;
  padding: 2.7em 1em;
  text-transform: uppercase;
  font-weight: 500;
  background: white;
  &:hover {
    padding-bottom: 4em;
    border-radius: 0 0 0.5em 0.5em;
  }
  &.active {
    padding-bottom: 4em;
    border-radius: 0 0 0.5em 0.5em;
  }
`;
