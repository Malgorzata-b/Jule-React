import "./Stars.css";
import styled from "styled-components";

const Star = styled.div`
  width: 3rem;
  height: 3rem;
  background: var(--gradient-star);
  clip-path: var(--star);
  transform-style: preserve-3d;
  animation: stars 4s infinite linear;
`;

const StarContainer = styled.div`
  box-shadow: 0px 3px 40px 14px var(--starColor);
`;

export default function Stars() {
  return (
    <>
      <StarContainer class="Star">
        <Star class="element"></Star>
      </StarContainer>
    </>
  );
}
