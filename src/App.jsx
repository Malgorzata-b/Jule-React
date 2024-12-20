import "./App.css";
import { children } from "./Children.jsx";
import Card from "./Card.jsx";

export default function App() {
  return (
    <>
      {children.map((child) => {
        return <Card data={child} />;
      })}
    </>
  );
}
