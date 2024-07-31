import createFighter from "./createFighters";

describe("Given the function createFighter", () => {
  describe("When it recives the values {weapon:'sword', skill: '6'", () => {
    test("Then it should return and object type Fighter with properties weapon:'sword' skill: 6", () => {
      const characterIdentity = { name: "khal", surname: "Dogo", age: 30 };
      const weapon = "sword";
      const skill = 6;
      const expectKhal = {
        weapon: "sword",
        skill: 6,
      };

      const khal = createFighter(characterIdentity, skill, weapon);

      expect(khal.weapon).toBe(expectKhal.weapon);
      expect(khal.skill).toBe(expectKhal.skill);
    });
  });
});
