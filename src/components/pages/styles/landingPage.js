import styled from "styled-components";

export const PageWrapper = styled.section`
  border: blue double 4px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 0.5em;
  padding: 0.5em;
`;

export const MainSection = styled.section`
  border: green solid 2px;
  border-radius: 0.5em;
  padding: 1em;
  z-index: -1;
`;

export const StyledAside = styled.aside`
  border: burlywood solid 2px;
  border-radius: 0.5em;
  padding: 1em;
  z-index: -1;
`;
