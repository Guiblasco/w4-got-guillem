import createKings from "./createKings";

describe("Given the function createKings", () => {
  describe("When it recives the values {'Joffrey', 'Baratheon', '16'}, 4", () => {
    test("Then it sohuld return an object type Character with properties name:'Joffrey', surname: 'Baratheon', age: '16', yearsOfReign: 4", () => {
      const kingSpects = { name: "Joffrey", surname: "Baratheon", age: 16 };
      const expectedKing = {
        name: "Joffrey",
        surname: "Baratheon",
        age: 16,
        yearsOfReign: 4,
      };

      const newKing = createKings(kingSpects, 4);

      expect(newKing.name).toBe(expectedKing.name);
      expect(newKing.surname).toBe(expectedKing.surname);
      expect(newKing.age).toBe(expectedKing.age);
      expect(newKing.yearsOfReign).toBe(expectedKing.yearsOfReign);
    });
  });
});
