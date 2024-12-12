import "./Title.css";
import Stars from "./Stars.jsx";

export default function Title() {
  return (
    <>
      <section class="Container-Stars">
        <Stars />
        <h1 class="title">Ønskelister</h1>
        <Stars />
      </section>
    </>
  );
}
