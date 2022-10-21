import styled from "styled-components";

//-----------------------------------//
// For both types of character cards //
//-----------------------------------//

export const CardWrapper = styled.section`
  border: #605542 outset 2px;
  border-radius: 1em;
  padding: 1em;
  display: flex;
  gap: 0.1em;
  flex-direction: column;
  align-items: center;
  z-index: -1;
  background: #ccc3b4;
`;

export const CardSeparator = styled.article`
  border-top: #605542 solid 1px;
  border-bottom: #605542 solid 1px;
  padding: 1em;
`;

export const RaceOriginFlex = styled.section`
  border-top: #605542 solid 2px;
  border-bottom: #605542 solid 2px;
  background: linear-gradient(
    90deg,
    rgba(186, 178, 164, 0) 0%,
    rgba(186, 178, 164, 1) 10%,
    rgba(186, 178, 164, 1) 90%,
    rgba(186, 178, 164, 0) 100%
  );
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

export const CarImg = styled.img`
  height: 15em;
`;

//-----------------------------------------//
// Specific to the default character cards //
//-----------------------------------------//

// MoInCollector is grouping the Model text and         //
// Inspiration text in separate groups due to spacing   //

export const MoInCollector = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em;
`;

export const ImgAboutFlex = styled.section`
  /* border: pink solid 2px; */
  display: flex;
  align-items: center;
`;

export const TitleTxtWrapper = styled.div`
  padding: 1em;
`;
