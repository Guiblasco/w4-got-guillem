import type Character from "../../characters/character/types.js";
import renderCardData from "../cardData/renderCardData.js";

const renderCard = (character: Character) => {
  const card = document.createElement("article");
  card.classList.add("container-card__card");

  const cardData = renderCardData(character);
  card.appendChild(cardData);

  return card;
};

export default renderCard;
