import renderHeader from "./renderHeader";

describe("Given the header component", () => {
  describe("When is rendered", () => {
    test("Then it should show 'Game of Thrones' inside a heading", () => {
      const screen = document.createElement("div");
      const header = renderHeader();

      screen.appendChild(header);

      const title = screen.querySelector("h1");

      expect(title).not.toBeNull();
      expect(title?.textContent).toBe("Game of Thrones");
    });
  });
});
