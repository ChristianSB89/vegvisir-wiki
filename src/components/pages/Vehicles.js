import React from "react";

import { PageWrapper } from "./styles/landingPage";
import VehicleCardDefault from "./subPages/vehicles/vehicleCardDefault";

function Vehicles() {
  return (
    <PageWrapper>
      <h2>Vehicles</h2>
      <VehicleCardDefault />
    </PageWrapper>
  );
}

export default Vehicles;
