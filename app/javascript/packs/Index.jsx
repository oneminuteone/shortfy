import React from "react";
import { render } from "react-dom";

import App from "../components/App";

document.addEventListener("DOMContentLoaded", () => {
  const mainDiv = document.createElement("div");
  mainDiv.className = "main-div";

  render(
    <App />,
    document.body.appendChild(mainDiv)
  );
});