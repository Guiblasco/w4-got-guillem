import renderApp from "./components/app/renderApp.js";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Ha habido un problema con el elemento");
}

const app = renderApp();

root.appendChild(app);
