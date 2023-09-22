import { useContext } from "react";
import { Cards } from "./Cards";
import CardContext from "../contexts/CardsContext";

export default function HomePage({ userType }) {
  const { cardList } = useContext(CardContext);

  return (
    <>
      <div className="homePage">
        <h1>Cards Page</h1>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <b> Here you can find business cards from all categories</b>
          </p>
        </div>
        <Cards userType={userType} cards={cardList} />
      </div>
    </>
  );
}
