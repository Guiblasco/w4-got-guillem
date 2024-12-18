import createKing from "./createKing.js";
import type King from "./types";

describe("Given the function createKings", () => {
  describe("When it recives a Character named Joffrey, his surname Baratheon and their years of reign are 4", () => {
    test("Then it sohuld return a Character with named Joffrey, surname: Baratheon and  yearsOfReign = 4", () => {
      const characterIdentity = {
        name: "Joffrey",
        surname: "Baratheon",
        age: 16,
      };
      const expectedName = "Joffrey";
      const expectedSurname = "Baratheon";
      const expectedYearsOfReign = 4;

      const newKing: King = createKing(characterIdentity, 4);

      expect(newKing.name).toBe(expectedName);
      expect(newKing.surname).toBe(expectedSurname);
      expect(newKing.yearsOfReign).toBe(expectedYearsOfReign);
    });
  });
});
