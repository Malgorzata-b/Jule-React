import "./SatnaClaus.css";
import reindeer from "/reindeer.png";
import sleigh from "/sleigh2.png";

export default function SantaClaus() {
  return (
    <>
      <div id="Santa-Claus">
        <img class="Sleigh" src={sleigh} />
        <img class="Reindeer" src={reindeer} />
      </div>
    </>
  );
}
