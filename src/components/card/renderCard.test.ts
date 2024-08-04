import { characters, jaimeLannister } from "../../characters/character/data";
import renderCard from "./renderCard";

describe("Given a card component", () => {
  describe("When is rendered ", () => {
    test("Then it should show a card with white background", () => {
      const screen = document.createElement("div");
      const card = renderCard(jaimeLannister);
      screen.appendChild(card);

      const cardRendered = screen.querySelector("article");

      expect(cardRendered).not.toBeNull();
      expect(cardRendered?.classList.contains("container-card__card")).toBe(
        true,
      );
    });
  });
});
