import { jaimeLannister } from "../../characters/character/data.js";
import renderCardData from "../cardData/cardData.js";

const renderCard = () => {
  const card = document.createElement("article");
  card.classList.add("container-card__card");

  const cardData = renderCardData(jaimeLannister);
  card.appendChild(cardData);

  return card;
};

export default renderCard;
