import React from "react";

import { vehicleData } from "./vehiclesData";
import {
  CardWrapper,
  CarImg,
  RaceOriginFlex,
  TxtDeco,
  ImgAboutFlex,
  TitleTxtWrapper,
  MoInCollector,
  CardSeparator,
} from "./vehicleCardStyles";

function VehicleCardDefault() {
  return (
    <CardWrapper>
      {vehicleData.map(
        ({ id, image, name, model, inspiration, description }) => {
          return (
            <CardSeparator key={id}>
              <h3>{name}</h3>
              {/* Might also add car brand logo later -maybe logo - text -
              image? */}
              <ImgAboutFlex>
                <TitleTxtWrapper>
                  <TxtDeco>Description:</TxtDeco>
                  <p>{description}</p>
                </TitleTxtWrapper>
                <CarImg src={image} />
              </ImgAboutFlex>
              <RaceOriginFlex>
                <MoInCollector>
                  <TxtDeco>Model:</TxtDeco>
                  <p>{model}</p>
                </MoInCollector>
                <MoInCollector>
                  <TxtDeco>Inspiration:</TxtDeco>
                  <p>{inspiration}</p>
                </MoInCollector>
              </RaceOriginFlex>
            </CardSeparator>
          );
        }
      )}
    </CardWrapper>
  );
}

export default VehicleCardDefault;
