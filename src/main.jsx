import "./index.css";
import Juletid from "./Footer.jsx";
import { createRoot } from "react-dom/client";
import Header from "./Header.jsx";
import Cards from "./Cards.jsx";

createRoot(document.getElementById("julebønn")).render(<Header />);

createRoot(document.getElementById("julenissen")).render(<Cards />);

createRoot(document.getElementById("juletid")).render(<Juletid />);
