import type Character from "../../characters/character/types";

const renderCardData = (character: Character): HTMLElement => {
  const cardData = document.createElement("div");
  cardData.classList.add("container-card__card__data");

  cardData.innerHTML = `
    <span class="card__title">${character.name} ${character.surname}</span>
    `;

  return cardData;
};

export default renderCardData;
