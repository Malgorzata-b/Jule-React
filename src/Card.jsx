import "./Card.css";
import candy from "/stick-candy.png";
import Stars from "./Stars";

import styled from "styled-components";

const ContainerCard = styled.div`
  background-color: var(--backgroundColor);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
  margin-top: 3rem;
  height: 17.5rem;
  width: 24rem;
  border-radius: 2.5rem;

  &:hover {
    background-color: var(--hoverBackgroundColor);
    color: var(--hoverColor);
    cursor: pointer;
  }
`;

const NameContainer = styled.div`
  position: relative;
  top: -5rem;
  font-family: "Lobster Two", sans-serif;
  font-size: 1.3rem;
`;

const WishListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  top: 0.8rem;
  left: -1rem;
`;

const GiftContainer = styled.div`
  position: relative;
  top: 5rem;
`;

const Name = styled.h2`
  text-decoration: underline;
  text-shadow: 2px 2px 5px var(--textShadow);
`;

const Age = styled.p`
  padding-top: 0.5rem;
  font-size: 1rem;
`;

const Wishtitle = styled.p`
  font-family: "Lobster Two", sans-serif;
  font-size: 1.2rem;
  /* text-shadow: 0px 0px 1px var(--textShadow); */
  font-weight: 800;
  text-decoration: underline;
`;

const Wishlist = styled.ul`
  list-style-type: none;
  line-height: 1.2;
  font-family: "Nunito Sans", serif;
  font-size: 0.9rem;
  font-weight: 700;
`;

const Wish = styled.li``;

const Image = styled.img`
  height: 2rem;
  width: 2rem;
`;

const Naughty = styled.h3`
  text-decoration: underline;
  text-shadow: 2px 2px 5px var(--textShadow);
`;
export default function Card({ data: { name, age, wishlist, naughty } }) {
  return (
    <>
      <ContainerCard id="Container-Card" className={naughty ? "true" : "false"}>
        <NameContainer className="Name-container">
          <Name className="name">{name}</Name>
          <Age className="age">{age} år.</Age>
        </NameContainer>

        <WishListContainer id="wishList-Container">
          <Wishtitle className="wishtitle">Ønskelister:</Wishtitle>
          <Wishlist className="wishlist">
            {wishlist.map((wish) => {
              return <Wish>{wish}</Wish>;
            })}
          </Wishlist>
        </WishListContainer>

        <GiftContainer id="gift-container">
          {naughty ? <Image className="candy" src={candy} /> : <Stars />}
          <Naughty className="name">{naughty ? "Slem" : "Snille"}</Naughty>
        </GiftContainer>
      </ContainerCard>
    </>
  );
}
