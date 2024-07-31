import Character from "../character/types";
import createCharacter from "./createCharacter";

describe("Given the function createCharacter", () => {
  describe("When it recives the values {'Jaime', 'Lannister', '23'}", () => {
    test("Then it sohuld return an object type Character with properties name:'Jaime', surname: 'Lannister', age: '23'", () => {
      const characterSpects = { name: "Jaime", surname: "Lannister", age: 23 };
      const newCharacter = createCharacter(
        characterSpects.name,
        characterSpects.surname,
        characterSpects.age,
      );
      const expectedJaime = {
        name: "Jaime",
        surname: "Lannister",
        age: 23,
      };

      expect(newCharacter.name).toBe(expectedJaime.name);
      expect(newCharacter.surname).toBe(expectedJaime.surname);
      expect(newCharacter.age).toBe(expectedJaime.age);
    });
  });
});
