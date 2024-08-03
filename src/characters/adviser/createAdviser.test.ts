import type Character from "../character/types";
import createFighter from "../fighter/createFighter";
import createAdviser from "./createAdviser.js";

describe("Given the function createAdvisers", () => {
  describe("When it recives a Character named Tyrion Lannister, his age 24, and his character advises named Daenerys Targaryen", () => {
    test("Then it should return an Adviser  named Tyrion Lannister and his character advises name is Daenerys Targaryen", () => {
      const characterIdentity = {
        name: "Tyrion",
        surname: "Lannister",
        age: 24,
      };
      const daenerys: Character = createFighter(
        { name: "Daenerys", surname: "Targarien", age: 25 },
        6,
        "sword",
      );
      const expectedTyronName = "Tyrion";

      const tyrion = createAdviser(characterIdentity, daenerys);

      expect(tyrion.name).toBe(expectedTyronName);
      expect(tyrion.characterAdvises).toBe(daenerys);
    });
  });
});
