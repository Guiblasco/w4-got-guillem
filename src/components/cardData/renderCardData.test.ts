import { jaimeLannister } from "../../characters/character/data.js";
import renderCardData from "./renderCardData";

describe("Given a card component with a character Jaime Lannister", () => {
  describe("When is rendered with character Jaime Lannister", () => {
    test("Then it should show a card with white background and character's name inside background hard grey", () => {
      const screen = document.createElement("div");
      const cardData = renderCardData(jaimeLannister);
      screen.appendChild(cardData);

      const cardRendered = screen.querySelector("span");

      expect(cardRendered).not.toBeNull();
      expect(cardRendered?.innerHTML).toBe(
        jaimeLannister.name + " " + jaimeLannister.surname,
      );
    });
  });
});
