import React from "react";
import { PageTitle, PageTitleBox } from "./styles/globalPageStyle";

import { PageWrapper } from "./styles/landingPage";
import VehicleCardDefault from "./subPages/vehicles/vehicleCardDefault";

function Vehicles() {
  return (
    <PageWrapper>
      <PageTitleBox>
        <PageTitle>Vehicles</PageTitle>
      </PageTitleBox>
      <VehicleCardDefault />
    </PageWrapper>
  );
}

export default Vehicles;
