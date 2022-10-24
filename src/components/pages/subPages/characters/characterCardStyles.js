import styled from "styled-components";

//-----------------------------------//
// For both types of character cards //
//-----------------------------------//

export const CardWrapper = styled.section`
  border: #605542 outset 2px;
  border-radius: 1.5em;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: -1;
  padding: 1em;
  z-index: -1;
  background: rgba(246, 212, 194, 0.69);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.3px);
  -webkit-backdrop-filter: blur(16.3px);
`;

export const CardSeparator = styled.article`
  border: #605542 double 3px;
  padding: 1em;
  margin: 0.5em;
  border-radius: 1em;
`;

export const CharName = styled.h3`
  font-weight: bold;
  padding-left: 1em;
`;

export const RaceOriginFlex = styled.section`
  /* border: #ccc3b4 solid 2px; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 15em;
`;

export const TxtDeco = styled.p`
  font-weight: 500;
  padding: 0.2em;
  text-align: start;
`;

export const ProfileImg = styled.img`
  width: 15em;
`;

//-----------------------------------------//
// Specific to the small character cards   //
//-----------------------------------------//

export const CenteringFlex = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: #605542 double 3px;
  padding: 0.5em;
  border-radius: 1em;
  margin: 0.5em;
`;

//-----------------------------------------//
// Specific to the default character cards //
//-----------------------------------------//

// RoCollector is grouping the race text and      //
// origins text in separate groups due to spacing //

export const RoCollector = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em;
`;

export const ImgAboutFlex = styled.section`
  /* border: pink solid 2px; */
  display: flex;
  background: #ccc3b4;
  border-radius: 2em;
`;

export const TitleTxtWrapper = styled.div`
  padding: 1em;
`;

export const RoFlex = styled.div`
  padding-top: 2em;
  display: flex;
  justify-content: space-around;
`;

export const ProfileImgLarge = styled.img`
  width: 15em;
  border-radius: 2em 0 0 2em;
  object-fit: cover;
`;
