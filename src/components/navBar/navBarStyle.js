import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyle = styled.header`
  border: 2px yellow solid;
`;

export const NavWrapper = styled.nav`
  border: 2px red solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 8em;
`;

export const TitleWrapper = styled.div`
  border: purple 2px solid;
`;

export const LinkFlex = styled.div`
  border: 2px yellow solid;
  display: flex;
  justify-content: flex-end;
`;

export const StyledLi = styled.li`
  border: 2px blue solid;
  list-style: none;
  margin: 1em 2em;
  text-align: center;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  border: 2px solid magenta;
  padding: 1em;
`;
