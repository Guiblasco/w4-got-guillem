import renderContainerCard from "./renderContainerCards";

describe("Given component containerCards", () => {
  describe("When is rendered", () => {
    test("Then it showuld show one card", () => {
      const screen = document.createElement("div");
      const container = renderContainerCard();
      screen.appendChild(container);

      const containerRendered = screen.querySelector("div");

      expect(containerRendered).not.toBeNull();
      expect(container.classList.contains("container-card"));
    });
  });
});
