import renderContainerCard from "../containerCard/renderContainerCards.js";
import renderHeader from "../header/renderHeader.js";

const renderApp = () => {
  const container = document.createElement("div");
  container.classList.add("container");

  const header = renderHeader();
  const containerCard = renderContainerCard();

  container.appendChild(header);
  container.appendChild(containerCard);

  return container;
};

export default renderApp;
