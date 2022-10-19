import styled from "styled-components";

//-----------------------------------//
// For both types of character cards //
//-----------------------------------//

export const CardWrapper = styled.section`
  border: blue solid 2px;
  border-radius: 1em;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: -1;
`;

export const CardSeparator = styled.article`
  border: green double 3px;
  padding: 1em;
`;

export const RaceOriginFlex = styled.section`
  border: red dotted 2px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const TxtDeco = styled.p`
  font-weight: 500;
  padding: 0.2em;
`;

export const ProfileImg = styled.img`
  width: 15em;
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
  border: pink solid 2px;
  display: flex;
`;

export const TitleTxtWrapper = styled.div`
  padding: 1em;
`;
