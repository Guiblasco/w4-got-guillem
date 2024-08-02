import renderHeader from "../header/renderHeader.js";

const renderApp = () => {
  const container = document.createElement("div");
  container.classList.add("container");

  const header = renderHeader();

  container.appendChild(header);

  return container;
};

export default renderApp;
