import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Characters from "../pages/Characters";
import Places from "../pages/Places";
import Vehicles from "../pages/Vehicles";

import Compass from "../img/compass.png";
import LogoText from "../img/logo-text.png";

import {
  LinkFlex,
  LinkStyle,
  LogoStyle,
  NavWrapper,
  StyledLi,
  TitleWrapper,
} from "./navBarStyle";

function NavBar() {
  return (
    <Router>
      <NavWrapper>
        <TitleWrapper>
          <LogoStyle src={Compass} />
          <LogoStyle src={LogoText} />
        </TitleWrapper>

        <LinkFlex>
          <StyledLi>
            <LinkStyle exact to="/" end>
              Home
            </LinkStyle>
          </StyledLi>
          <StyledLi>
            <LinkStyle to="/characters">Characters</LinkStyle>
          </StyledLi>
          <StyledLi>
            <LinkStyle to="/places">Places</LinkStyle>
          </StyledLi>
          <StyledLi>
            <LinkStyle to="/vehicles">Vehicles</LinkStyle>
          </StyledLi>
        </LinkFlex>
      </NavWrapper>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/places" element={<Places />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>
    </Router>
  );
}

export default NavBar;
