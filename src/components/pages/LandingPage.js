import React from "react";
import {
  HeroSection,
  LandingPageWrapper,
  StyledAside,
} from "./styles/landingPage";

function LandingPage() {
  return (
    <LandingPageWrapper>
      <HeroSection>
        <h2>Landing Page</h2>
        <p>
          This is the landing page. Links and articles from the other pages are
          usually displayed here.
        </p>
      </HeroSection>
      <StyledAside>
        <h2>Aside section</h2>
        <p>Place stuff here</p>
      </StyledAside>
    </LandingPageWrapper>
  );
}

export default LandingPage;
