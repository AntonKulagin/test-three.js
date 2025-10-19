import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TableScene from "./app.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TableScene />
  </StrictMode>
);
