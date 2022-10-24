import React from "react";

import { characterData } from "./characterData";
import {
  CardWrapper,
  TxtDeco,
  ImgAboutFlex,
  TitleTxtWrapper,
  RoCollector,
  CardSeparator,
  RoFlex,
  ProfileImgLarge,
  CharName,
} from "./characterCardStyles";

function CharacterCardDefault() {
  return (
    <CardWrapper>
      {characterData.map(({ id, image, name, race, origin, description }) => {
        return (
          <CardSeparator key={id}>
            <CharName>{name}</CharName>
            <ImgAboutFlex>
              <ProfileImgLarge src={image} />
              <TitleTxtWrapper>
                <TxtDeco>Description:</TxtDeco>
                <p>{description}</p>
                <RoFlex>
                  <RoCollector>
                    <TxtDeco>Race:</TxtDeco>
                    <p>{race}</p>
                  </RoCollector>
                  <RoCollector>
                    <TxtDeco>Origins:</TxtDeco>
                    <p>{origin}</p>
                  </RoCollector>
                </RoFlex>
              </TitleTxtWrapper>
            </ImgAboutFlex>
          </CardSeparator>
        );
      })}
    </CardWrapper>
  );
}

export default CharacterCardDefault;
