import React from "react";
import {
  MainSection,
  LandingPageWrapper,
  StyledAside,
} from "./styles/landingPage";

function LandingPage() {
  return (
    <LandingPageWrapper>
      <StyledAside>
        <h2>Aside section</h2>
        <p>Random small cards displayed here</p>
      </StyledAside>
      <MainSection>
        <h2>Main Content</h2>
        <p>Introduction and info</p>
      </MainSection>
      <StyledAside>
        <h2>Aside section</h2>
        <p>Random small cards displayed here</p>
      </StyledAside>
    </LandingPageWrapper>
  );
}

export default LandingPage;
