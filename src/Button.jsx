import Header from "./Header.jsx";
import { ButtonClaus } from "./Button.js";
import { LinkHeader } from "./Button.js";

export default function Button() {
  return (
    <>
      <ButtonClaus>
        <LinkHeader href={<Header />}>
          <p>Santa Claus</p>
        </LinkHeader>
      </ButtonClaus>
    </>
  );
}
