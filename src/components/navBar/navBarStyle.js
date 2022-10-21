import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.nav`
  border: 2px inset #5e807e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 8em;
  background: rgba(246, 212, 194, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
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
  border: 2px #4f6b6a inset;
  border-radius: 0.3em;
  padding: 0 2em;
  display: flex;
  justify-content: flex-end;
  background: #a29989;
`;

export const StyledLi = styled.li`
  border: 2px #314241 inset;
  list-style: none;
  margin: 1em 0.5em;
  padding: 0 1em;
  border-radius: 0.3em;
  text-align: center;
  background: #314241;
`;

export const LinkStyle = styled(NavLink)`
  text-decoration: none;
  padding: 5.45em 1em;
  text-transform: uppercase;
  font-weight: 500;
  color: #fff;
  background: #605542;
  border-left: 1px solid #383125;
  border-right: 1px solid #383125;
  border-bottom: 1px solid #383125;
  &:hover,
  &.active {
    padding-bottom: 6.5em;
    border-radius: 0 0 0.5em 0.5em;
    box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.75);
  }
  &.active {
    color: black;
    background: #ccc3b4;
  }
`;
