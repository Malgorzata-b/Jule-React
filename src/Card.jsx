import "./Card.css";
import candy from "/stick-candy.png";
import Stars from "./Stars";

export default function Card({ data: { name, age, wishlist, naughty } }) {
  return (
    <>
      <div id="Container-Card" class={naughty ? "true" : "false"}>
        <div class="Name-container">
          <h2 class="name">{name}</h2>
          <p class="age">{age} år.</p>

          <div id="Box-line" class={naughty ? "slem" : "snille"}></div>
        </div>

        <div id="wishList-Container">
          <p class="wishtitle">Ønskelister:</p>
          <ul class="wishlist">
            {wishlist.map((wish) => {
              return <li>{wish}</li>;
            })}
          </ul>
        </div>

        <div id="gift-container">
          <div id="Box-line2" class={naughty ? "slem2" : "snille2"}></div>
          {naughty ? <img class="candy" src={candy} /> : <Stars />}
          <h3 class="name">{naughty ? "Slem" : "Snille"}</h3>
        </div>
      </div>
    </>
  );
}
