import type Character from "../character/types";
import createAdvisers from "./createAdviser.js";

describe("Given the function createAdvisers", () => {
  describe("When it recives a Character named Tyrion Lannister, his age 24, and his companions Character daenerysTargaryen", () => {
    test("Then it should return an Adviser  named Tyrion Lannister and his companion character is Daenerys'", () => {
      const characterSpects = { name: "Tyrion", surname: "Lannister", age: 24 };
      const characterAdvisesTyrion: Character = {
        name: "Daenerys",
        surname: "Targaryen",
        age: 16,
        isAlive: true,
        talk() {
          return "";
        },
        die() {
          this.isAlive = false;
        },
      };
      const expetedTyrion = {
        name: "Tyrion",
        surname: "Lannister",
        characterAdvises: { name: "Daenerys" },
      };

      const tyrion = createAdvisers(characterSpects, characterAdvisesTyrion);

      expect(tyrion.name).toBe(expetedTyrion.name);
      expect(tyrion.characterAdvises.name).toBe(
        expetedTyrion.characterAdvises.name,
      );
    });
  });
});
