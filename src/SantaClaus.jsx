import "./SatnaClaus.css";
import reindeer from "/reindeer.png";
import sleigh from "/sleigh2.png";

import styled from "styled-components";

const SantaClauss = styled.div`
  height: 5rem;
  width: 10rem;
  position: relative;
  top: 5rem;
  left: 0;
  animation: fly 10s infinite;
`;

const Image = styled.img`
  height: 4rem;
  width: 4rem;
`;
export default function SantaClaus() {
  return (
    <>
      <SantaClauss id="Santa-Claus">
        <Image class="Sleigh" src={sleigh} />
        <Image class="Reindeer" src={reindeer} />
      </SantaClauss>
    </>
  );
}
