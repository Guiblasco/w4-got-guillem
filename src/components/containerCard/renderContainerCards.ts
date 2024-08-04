import renderCard from "../card/renderCard.js";

const renderContainerCard = () => {
  const containerCard = document.createElement("div");
  containerCard.classList.add("container-card");

  const characterCard = renderCard();

  containerCard.appendChild(characterCard);

  return containerCard;
};

export default renderContainerCard;
