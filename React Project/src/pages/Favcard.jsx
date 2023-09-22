import React, { useContext, useEffect, useState } from "react";
import CardContext from "../contexts/CardsContext";
import { getUserInfo } from "../Helpers/functions";
import { Cards } from "../Components/Cards";

const Favcard = () => {
  const [favlist, setfavlist] = useState([]);
  const { cardList } = useContext(CardContext);
  const userInfo = getUserInfo(localStorage.getItem("token"));
  useEffect(() => {
    console.log(favlist);
  }, [favlist]);
  useEffect(() => {
    let newArr = [];

    cardList.forEach((cardItem) => {
      const isExist = cardItem?.likes?.some((item) => item === userInfo._id);
      if (isExist) {
        newArr.push(cardItem);
      }
    });
    setfavlist(newArr);
  }, [cardList]);
  return (
    <div>
      <h1>Favorite Card</h1>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "20px", maxWidth: "600px", margin: "0 auto" }}>
          <b>On this page you can see all the cards you liked </b>
        </p>
      </div>

      <Cards cards={favlist} />
    </div>
  );
};
export default Favcard;
