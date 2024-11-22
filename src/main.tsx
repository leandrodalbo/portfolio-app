import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BugFree from "./components/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BugFree />
  </StrictMode>
);
