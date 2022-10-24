import React from "react";
import { MainSection, PageWrapper, StyledAside } from "./styles/landingPage";
import HafgrimCardShort from "./subPages/characters/HafgrimShortCard";
import YrsaCardShort from "./subPages/characters/YrsaShortCard";

function LandingPage() {
  return (
    <PageWrapper>
      <StyledAside>
        <h2>Aside section</h2>
        <p>Random small cards displayed here</p>
        <HafgrimCardShort />
      </StyledAside>
      <MainSection>
        <h2>Main Content</h2>
        <p>Introduction and info</p>
      </MainSection>
      <StyledAside>
        <h2>Aside section</h2>
        <p>Random small cards displayed here</p>
        <YrsaCardShort />
      </StyledAside>
    </PageWrapper>
  );
}

export default LandingPage;
