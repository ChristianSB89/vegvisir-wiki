import React from "react";

import { characterData } from "./characterData";
import {
  CardWrapper,
  ProfileImg,
  RaceOriginFlex,
  TxtDeco,
  ImgAboutFlex,
  TitleTxtWrapper,
  RoCollector,
} from "./characterCardStyles";

function CharacterCardDefault() {
  return (
    <CardWrapper>
      {characterData.map(({ id, image, name, race, origin, description }) => {
        return (
          <article key={id}>
            <h3>{name}</h3>
            <RaceOriginFlex>
              <RoCollector>
                <TxtDeco>Race:</TxtDeco>
                <p>{race}</p>
              </RoCollector>
              <RoCollector>
                <TxtDeco>Origins:</TxtDeco>
                <p>{origin}</p>
              </RoCollector>
            </RaceOriginFlex>
            <ImgAboutFlex>
              <ProfileImg src={image} />
              <TitleTxtWrapper>
                <TxtDeco>Description:</TxtDeco>
                <p>{description}</p>
              </TitleTxtWrapper>
            </ImgAboutFlex>
          </article>
        );
      })}
    </CardWrapper>
  );
}

export default CharacterCardDefault;
