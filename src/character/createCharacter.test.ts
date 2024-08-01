import createCharacter from "./createCharacter.js";

describe("Given the function createCharacter", () => {
  describe("When it recives the values Alexis Garcia and 32", () => {
    test("Then it sohuld return a Character  named Alexis, surname Garcia and his age: 32", () => {
      const characterSpects = { name: "Alexis", surname: "Garcia", age: 32 };
      const expectedName = "Alexis";
      const expectedSurname = "Garcia";
      const expectedAge = 32;

      const newCharacter = createCharacter(
        characterSpects.name,
        characterSpects.surname,
        characterSpects.age,
      );

      expect(newCharacter.name).toBe(expectedName);
      expect(newCharacter.surname).toBe(expectedSurname);
      expect(newCharacter.age).toBe(expectedAge);
    });
  });
});
