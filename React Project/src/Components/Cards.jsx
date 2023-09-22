import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { FaPhoneAlt, FaRegHeart, FaEdit, FaTrash } from "react-icons/fa";
import "../Styles/Cards.css";
import { getUserType, getUserInfo } from "../Helpers/functions";
import { useContext, useState } from "react";
import FavoriteContext from "../contexts/FavoriteContext";
import { useNavigate } from "react-router-dom";

export function Cards(props) {
  const nav = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const { favoriteList, handleFavClick } = useContext(FavoriteContext);
  const { cards } = props;
  let usertype = "";
  let token = localStorage.getItem("token");
  if (getUserType(token) == "admin") {
    usertype = "admin";
  }
  if (getUserType(token) == "business") {
    usertype = "business";
  }

  return (
    <CardGroup className="cardContainer">
      {cards.map(
        (
          { _id, user_id, title, description, image, address, phone },
          index
        ) => {
          let resMsg;
          const handleFavoriteClick = () => {
            const result = handleFavClick(_id);

            resMsg = result;
          };

          let isLiked = favoriteList.some((item) => item._id === _id);
          return (
            <div key={index}>
              <Card className="card">
                <Card.Img
                  variant="top"
                  src={image?.url}
                  alt={image?.alt}
                  className="cardImage"
                />
                <Card.Body className="cardBody">
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <hr></hr>
                  <Card.Text>
                    {address.country} <br />
                    {address.street}
                  </Card.Text>
                  <Card.Text>{phone}</Card.Text>
                </Card.Body>
                <Card.Footer className="cardFooter">
                  <div className="cardIcons">
                    <FaPhoneAlt className="phoneIcon" />
                    <FaRegHeart
                      onClick={() => {
                        handleFavoriteClick();
                      }}
                      color={isLiked ? "black" : "red"}
                      className="heartIcon"
                    />
                    {(usertype == "admin" || usertype == "business") &&
                      user_id == getUserInfo(token)._id && (
                        <>
                          <FaEdit
                            className="editIcon"
                            onClick={() => nav(`/card-edit/${_id}`)}
                          />
                          <FaTrash
                            className="trashIcon"
                            onClick={async () => {
                              const res = await fetch(
                                `http://localhost:8181/cards/${_id}`,
                                {
                                  method: "DELETE",

                                  headers: {
                                    "x-auth-token": JSON.parse(
                                      localStorage.getItem("token")
                                    ),
                                  },
                                }
                              );
                              const data = await res.text();
                              window.location.reload();
                            }}
                          />
                        </>
                      )}
                  </div>
                </Card.Footer>
              </Card>
            </div>
          );
        }
      )}
    </CardGroup>
  );
}
