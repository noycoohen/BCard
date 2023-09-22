import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FavoriteContextProvider } from "./contexts/FavoriteContext";
import { CardContextProvider } from "./contexts/CardsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CardContextProvider>
      <FavoriteContextProvider>
        <App />
      </FavoriteContextProvider>
    </CardContextProvider>
  </BrowserRouter>
);
