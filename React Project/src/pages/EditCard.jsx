import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardContext from "../contexts/CardsContext";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { headers, servUrl } from "../utils/utils";
import { toast } from "react-toastify";
import "../Styles/editCard.css";

const EditCard = () => {
  const [cardObj, setCardObj] = useState({});

  const { cardId } = useParams();
  const { findCard, cardList } = useContext(CardContext);
  useEffect(() => {
    console.log(cardObj);
  }, [cardObj]);
  const getCard = () => {
    let foundCard = findCard(cardId);
    setCardObj(foundCard);
  };
  useEffect(() => {
    getCard();
  }, [cardList]);
  const handleInputChange = (value, label, isAddress, isImage) => {
    let newObj = { ...cardObj };

    if (isAddress) {
      newObj.address = newObj.address || {};
      newObj.address[label] = value;
    } else if (isImage) {
      newObj.image = newObj.image || {};
      newObj.image[label] = value;
    } else {
      newObj[label] = label === "houseNumber" ? parseFloat(value) : value;
    }

    setCardObj(newObj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let { likes, ...remainObj } = cardObj;
    remainObj.address.zip = parseFloat(remainObj.address.zip);
    remainObj.address.houseNumber = parseFloat(remainObj.address.houseNumber);
    let { image, ...remainObjj } = remainObj;
    let { _id, ...remainImage } = image;
    let newObj = { ...remainObjj, image: remainImage };
    let { __v, createdAt, _id: busId, bizNumber, ...remainObjjj } = newObj;

    axios
      .put(`${servUrl}/cards/${cardId}`, remainObj, {
        headers: {
          "x-auth-token": JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => console.log(res))
      .finally(() => {
        toast(`the card is update successfully`);
        setTimeout(() => {
          window.location.reload();
        }, 400);
      });
  };
  return (
    <>
      <p style={{ fontSize: "40px" }}>Edit Card</p>

      <div className="SignUp">
        <Form className="form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder=""
            defaultValue={cardObj?.title}
            onChange={(e) => handleInputChange(e.target.value, `title`)}
          />
          <label htmlFor="">Title</label>

          <input
            type="text"
            placeholder=""
            defaultValue={cardObj?.subtitle}
            onChange={(e) => handleInputChange(e.target.value, `subtitle`)}
          />
          <label htmlFor="">Subtitle</label>

          <input
            type="text"
            placeholder=""
            defaultValue={cardObj?.description}
            onChange={(e) => handleInputChange(e.target.value, `description`)}
          />
          <label htmlFor="">Description</label>

          <input
            type="tel"
            placeholder=""
            defaultValue={cardObj?.phone}
            onChange={(e) => handleInputChange(e.target.value, `phone`)}
          />
          <label htmlFor="">Phone</label>

          <input
            type="email"
            placeholder=""
            value={cardObj?.email}
            onChange={(e) => handleInputChange(e.target.value, `email`)}
          />
          <label htmlFor="">Email</label>

          <input
            type="text"
            placeholder=""
            value={cardObj?.address?.country}
            onChange={(e) => handleInputChange(e.target.value, `country`, true)}
          />
          <label htmlFor="">Country</label>

          <input
            type="text"
            placeholder=""
            defaultValue={cardObj?.address?.city}
            onChange={(e) => handleInputChange(e.target.value, `city`, true)}
          />
          <label htmlFor="">City</label>

          <input
            type="text"
            placeholder=""
            defaultValue={cardObj?.address?.street}
            onChange={(e) => handleInputChange(e.target.value, `street`, true)}
          />
          <label htmlFor="">Street</label>

          <input
            type="num"
            placeholder=""
            defaultValue={cardObj?.address?.houseNumber}
            onChange={(e) =>
              handleInputChange(e.target.value, `houseNumber`, true)
            }
          />
          <label htmlFor="">House Number</label>

          <input
            type="num"
            placeholder=""
            defaultValue={cardObj?.address?.zip}
            onChange={(e) => handleInputChange(e.target.value, `zip`, true)}
          />
          <label htmlFor="">Zip Code</label>

          <input
            type="url"
            placeholder=""
            defaultValue={cardObj?.image?.url}
            onChange={(e) =>
              handleInputChange(e.target.value, `url`, false, true)
            }
          />
          <label htmlFor="">Image url</label>

          <input
            type="text"
            placeholder=""
            defaultValue={cardObj?.image?.alt}
            onChange={(e) =>
              handleInputChange(e.target.value, `alt`, false, true)
            }
          />
          <label htmlFor="">Image alt</label>

          <Button className="submitCard" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default EditCard;
