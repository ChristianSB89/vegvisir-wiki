import React from "react";
import { PageTitle, PageTitleBox } from "./styles/globalPageStyle";
import { PageWrapper } from "./styles/landingPage";
import CharacterCardDefault from "./subPages/characters/characterCardDefault";

function Characters() {
  return (
    <PageWrapper>
      <PageTitleBox>
        <PageTitle>The citizens of Hitaöyr</PageTitle>
      </PageTitleBox>
      <CharacterCardDefault />
    </PageWrapper>
  );
}

export default Characters;
