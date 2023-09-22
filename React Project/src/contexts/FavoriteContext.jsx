import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { headers, servUrl } from "../utils/utils";

const initialState = { favoriteList: [], handleFavClick: (cardId) => {} };

const FavoriteContext = createContext(initialState);

const FavoriteContextProvider = ({ children }) => {
  const [favoriteList, setFavoriteList] = useState([`123`]);

  const handleFavClick = (cardId) => {
    axios
      .patch(`${servUrl}/cards/${cardId}`, {}, headers)
      .then((res) => window.location.reload());
  };
  const contextValues = { favoriteList, handleFavClick };
  return (
    <FavoriteContext.Provider value={contextValues}>
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteContext, FavoriteContextProvider };

export default FavoriteContext;
