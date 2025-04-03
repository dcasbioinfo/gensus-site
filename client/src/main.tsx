import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Apply Roboto font to the entire app
document.body.classList.add("font-[Roboto]");

createRoot(document.getElementById("root")!).render(<App />);
