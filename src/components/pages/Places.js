import React from "react";
import { PageTitle, PageTitleBox } from "./styles/globalPageStyle";

function Places() {
  return (
    <section>
      <PageTitleBox>
        <PageTitle>Places Page</PageTitle>
      </PageTitleBox>
      <p>
        This is the places page. Here you can click on different regions and
        towns to read more about them. Maybe even a map in the style of google
        maps is displayed here?
      </p>
    </section>
  );
}

export default Places;
