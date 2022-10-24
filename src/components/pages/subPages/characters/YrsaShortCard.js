import React from "react";

import {
  CardWrapper,
  ProfileImg,
  RaceOriginFlex,
  TxtDeco,
  CenteringFlex,
} from "./characterCardStyles";

import {
  YrsaAboutShort,
  YrsaProfilePic,
  YrsaRace,
  YrsaPlace,
  YrsaTitle,
} from "./characterData";

function YrsaCardShort() {
  return (
    <CardWrapper>
      <CenteringFlex>
        <h3>{YrsaTitle}</h3>
        <RaceOriginFlex>
          <TxtDeco>Race:</TxtDeco>
          <p>{YrsaRace}</p>
          <TxtDeco>Origins:</TxtDeco>
          <p>{YrsaPlace}</p>
        </RaceOriginFlex>
        <ProfileImg src={YrsaProfilePic} />
        <TxtDeco>Description:</TxtDeco>
        <p>{YrsaAboutShort}</p>
      </CenteringFlex>
    </CardWrapper>
  );
}

export default YrsaCardShort;
