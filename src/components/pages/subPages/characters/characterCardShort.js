import React from "react";

import { characterDataShort } from "./characterData";
import {
  CardWrapper,
  ProfileImg,
  RaceOriginFlex,
  TxtDeco,
} from "./characterCardStyles";

function CharacterCardShort() {
  return (
    <CardWrapper>
      {characterDataShort.map(
        ({ id, image, name, race, origin, description }) => {
          return (
            <article key={id}>
              <h3>{name}</h3>
              <RaceOriginFlex>
                <TxtDeco>Race:</TxtDeco>
                <p>{race}</p>
                <TxtDeco>Origins:</TxtDeco>
                <p>{origin}</p>
              </RaceOriginFlex>
              <ProfileImg src={image} />
              <TxtDeco>Description:</TxtDeco>
              <p>{description}</p>
            </article>
          );
        }
      )}
    </CardWrapper>
  );
}

export default CharacterCardShort;
