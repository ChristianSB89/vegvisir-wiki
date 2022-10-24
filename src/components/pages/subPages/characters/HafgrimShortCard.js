import React from "react";

import {
  CardWrapper,
  ProfileImg,
  RaceOriginFlex,
  TxtDeco,
  CenteringFlex,
} from "./characterCardStyles";
import {
  HafgrimAboutShort,
  HafgrimPlace,
  HafgrimProfile,
  HafgrimRace,
  HafgrimTitle,
} from "./characterData";

function HafgrimCardShort() {
  return (
    <CardWrapper>
      <CenteringFlex>
        <h3>{HafgrimTitle}</h3>
        <RaceOriginFlex>
          <TxtDeco>Race:</TxtDeco>
          <p>{HafgrimRace}</p>
          <TxtDeco>Origins:</TxtDeco>
          <p>{HafgrimPlace}</p>
        </RaceOriginFlex>
        <ProfileImg src={HafgrimProfile} />
        <TxtDeco>Description:</TxtDeco>
        <p>{HafgrimAboutShort}</p>
      </CenteringFlex>
    </CardWrapper>
  );
}

export default HafgrimCardShort;
