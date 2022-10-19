import React from "react";
import ProfilePic from "../../../img/profile-placeholder.png";
import { CardWrapper, ProfileImg } from "./characterSmallCard";

function CharacterCard() {
  return (
    <CardWrapper>
      <h3>Name</h3>
      <ProfileImg src={ProfilePic} />
      <h4>About</h4>
      <p>Race:</p>
      <p>Origins:</p>
      <p>Description:</p>
    </CardWrapper>
  );
}

export default CharacterCard;
