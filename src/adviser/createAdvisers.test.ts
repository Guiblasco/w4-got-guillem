import type Character from "../character/types";
<<<<<<< Updated upstream:src/adviser/createAdvisers.test.ts
import createAdvisers from "./createAdvisers";
=======
import createAdvisers from "./createAdviser.js";
>>>>>>> Stashed changes:src/adviser/createAdviser.test.ts

describe("Given the function createAdvisers", () => {
  describe("When it recives the values {'Tyrion', 'Lannister', '24'}, daenerysTargaryen", () => {
    test("Then it should return an object type Adviser with the properties name: 'Tyrion', advisee.name: 'Daenerys'", () => {
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
