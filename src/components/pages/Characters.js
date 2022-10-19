import React from "react";
import { PageWrapper } from "./styles/landingPage";
import CharacterCardDefault from "./subPages/characters/characterCardDefault";

function Characters() {
  return (
    <PageWrapper>
      <h2>Characters</h2>
      <CharacterCardDefault />
    </PageWrapper>
  );
}

export default Characters;
