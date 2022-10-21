import styled from "styled-components";

export const PageWrapper = styled.section`
  border: 2px #4f6b6a inset;
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
  background: rgba(246, 212, 194, 0.69);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.3px);
  -webkit-backdrop-filter: blur(16.3px);
`;

export const StyledAside = styled.aside`
  border: burlywood solid 2px;
  border-radius: 0.5em;
  padding: 1em;
  z-index: -1;
  background: rgba(246, 212, 194, 0.69);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.3px);
  -webkit-backdrop-filter: blur(16.3px);
`;
