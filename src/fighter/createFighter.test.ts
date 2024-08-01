import createFighter from "./createFighter.js";
import type { SkillRange } from "./types";

describe("Given the function createFighter", () => {
  describe("When it receives a Character with that his weapon is sword and his skillRange is 6 ", () => {
    test("Then it should return a Fighter  with properties weapon is sword and  skill level is 6", () => {
      const characterIdentity = { name: "khal", surname: "Dogo", age: 30 };
      const weapon = "sword";
      const skill: SkillRange = 6;
      const expectWeapon = "sword";
      const expectSkill = skill;

      const khal = createFighter(characterIdentity, skill, weapon);

      expect(khal.weapon).toBe(expectWeapon);
      expect(khal.skill).toBe(expectSkill);
    });
  });
});
