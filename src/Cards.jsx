import Title from "./Title.jsx";
import App from "./App.jsx";
import "./App.css";

import styled from "styled-components";

const SectionCards = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 1.5rem;
  background-image: url(./public/Logo.webp);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  padding-bottom: 5rem;
  border-radius: 2rem;
`;

function Cards() {
  return (
    <>
      <Title />
      <SectionCards id="juleliste">
        <App />
      </SectionCards>
    </>
  );
}

export default Cards;
