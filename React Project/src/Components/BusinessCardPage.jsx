import { useNavigate } from "react-router-dom";
import "../Styles/CreateCard.css";
import { toast } from "react-toastify";

export default function BusinessCardPage() {
  const nav = useNavigate();
  function handlecard(e) {
    e.preventDefault();
    createCard();
  }
  async function createCard() {
    const title = document.getElementById("title").value;
    const sub = document.getElementById("sub").value;
    const des = document.getElementById("des").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("mail").value;
    const img = document.getElementById("img").value;
    const alt = document.getElementById("alt").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;
    const street = document.getElementById("street").value;
    const house = document.getElementById("house").value;
    const zip = document.getElementById("zip").value;
    const token = localStorage.getItem("token");
    const userToken = JSON.parse(token);
    console.log(userToken);
    await fetch("http://localhost:8181/cards", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        subtitle: sub,
        description: des,
        phone: phone,
        email: email,
        image: {
          url: img,
          alt: alt,
        },
        address: {
          state: state,
          country: country,
          city: city,
          street: street,
          houseNumber: house,
          zip: zip,
        },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-auth-token": userToken,
      },
    }).then((x) => {
      if (x.status === 201) {
        toast("The card has been successfully added");
        setTimeout(() => {
          nav("/");
        }, 300);
      }
    });
  }
  return (
    <>
      <div className="SignUp">
        <form className="form">
          <h1>CREATE CARD</h1>
          <input type="text" placeholder="title" id="title" />
          <input type="text" placeholder="sub" id="sub" />
          <input type="text" placeholder="des" id="des" />
          <input type="text" placeholder="phone" id="phone" />
          <input type="text" placeholder="email" id="mail" />
          <input type="text" placeholder="img" id="img" />
          <input type="text" placeholder="alt" id="alt" />
          <input type="text" placeholder="state" id="state" />
          <input type="text" placeholder="country" id="country" />
          <input type="text" placeholder="city" id="city" />
          <input type="text" placeholder="street" id="street" />
          <input type="text" placeholder="house" id="house" />
          <input type="text" placeholder="zip" id="zip" />
          <br></br>
          <button onClick={handlecard} className="submitCard" type="submit">
            Add Card
          </button>
        </form>
      </div>
    </>
  );
}
