import Button from "./Button.jsx";
import SantaClaus from "./SantaClaus.jsx";

import styled from "styled-components";

const JuleSection = styled.section`
  height: 15rem;
  width: 100%;
`;

export default function Juletid() {
  return (
    <>
      <JuleSection>
        <Button />
        <SantaClaus />
      </JuleSection>
    </>
  );
}
