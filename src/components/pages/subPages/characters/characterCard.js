import React from "react";
import ProfilePic from "../../../img/profile-placeholder.png";
import { characterDataShort } from "./characterData";
import {
  CardWrapper,
  ProfileImg,
  RaceOriginFlex,
  TxtDeco,
} from "./characterSmallCard";

function CharacterCard() {
  return (
    <CardWrapper>
      {characterDataShort.map(
        ({ id, image, name, race, origin, description }) => {
          return (
            <article key={id}>
              <h3>{name}</h3>
              <ProfileImg src={image} />
              <RaceOriginFlex>
                <TxtDeco>Race:</TxtDeco>
                <p>{race}</p>
                <TxtDeco>Origins:</TxtDeco>
                <p>{origin}</p>
              </RaceOriginFlex>
              <TxtDeco>Description:</TxtDeco>
              <p>{description}</p>
            </article>
          );
        }
      )}
    </CardWrapper>
  );
}

export default CharacterCard;
