import { createContext, useEffect, useState } from "react";

const initialState = { cardList: [], findCard: (cardId) => {} };

const CardContext = createContext(initialState);

const CardContextProvider = ({ children }) => {
  const [cardList, setCardList] = useState([]);

  const findCard = (cardId) => {
    let foundCard = cardList.find((item) => item._id === cardId);
    return foundCard;
  };
  let getdata = async () => {
    const res = await fetch("http://localhost:8181/cards");
    const data = await res.json();
    setCardList(data);
  };

  useEffect(() => {
    getdata();
  }, []);
  const contextValues = { cardList, findCard };
  return (
    <CardContext.Provider value={contextValues}>
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardContextProvider };

export default CardContext;
