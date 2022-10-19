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
  CardSeparator,
} from "./characterCardStyles";

function CharacterCardDefault() {
  return (
    <CardWrapper>
      {characterData.map(({ id, image, name, race, origin, description }) => {
        return (
          <CardSeparator key={id}>
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
          </CardSeparator>
        );
      })}
    </CardWrapper>
  );
}

export default CharacterCardDefault;
