import type Character from "../../characters/character/types.js";
import renderCard from "../card/renderCard.js";

const renderContainerCard = (characters: Character[]) => {
  const containerCard = document.createElement("div");
  containerCard.classList.add("container-card");

  characters.forEach((character) => {
    const characterCard = renderCard(character);
    containerCard.appendChild(characterCard);
  });

  return containerCard;
};

export default renderContainerCard;
