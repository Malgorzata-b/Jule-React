import Stars from "./Stars.jsx";
import styled from "styled-components";

const StarContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Titlee = styled.h1`
  text-align: center;
  margin: 3.5rem;
  font-family: "Lobster Two", sans-serif;
  font-size: 4.5rem;
  text-shadow: 2px 8px 12px var(--textShadow);
`;

export default function Title() {
  return (
    <>
      <StarContainer class="Container-Stars">
        <Stars />
        <Titlee class="title">Ønskelister</Titlee>
        <Stars />
      </StarContainer>
    </>
  );
}
