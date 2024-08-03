import renderCard from "../card/card.js";

const renderContainerCard = () => {
  const containerCard = document.createElement("div");
  containerCard.classList.add("container-card");

  const card = renderCard();

  containerCard.appendChild(card);

  return containerCard;
};

export default renderContainerCard;
