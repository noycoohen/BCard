import { Cards } from "./Cards";
import { useEffect, useState } from "react";

export default function MyCard() {
  const [cards, setCards] = useState([]);
  let getdata = async () => {
    const res = await fetch("http://localhost:8181/cards/my-cards/", {
      headers: {
        "x-auth-token": JSON.parse(localStorage.getItem("token")),
      },
    });
    const data = await res.json();
    console.log(data);
    setCards(data);
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div className="homePage">
        <h1>My Card</h1>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <b> Here you can find your business cards</b>
          </p>
        </div>
        <Cards cards={cards} />
      </div>
    </>
  );
}
