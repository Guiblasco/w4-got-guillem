
import type { Fighter } from "../fighter/types";
import createSquires from "./createSquire";
import type { AssKissingRange, Squire } from "./types";

describe("Given the function createSquires", () => {
  describe("When it recives a character named Bronn and their character companion named Jaime", () => {
    test("Then it should return a character named Bronn and their companion named Jaime", () => {
      const characterIdentity = { name: "Bronn", surname: "", age: 25 };
      const companionBronn: Fighter = {
        name: "Jaime",
        surname: "Lannister",
        age: 36,
        isAlive: true,
        weapon: "sword",
        skill: 9,
        talk() {
          return "Primero pego y luego pregunto";
        },
        die() {
          this.isAlive = false;
        },
      };
      const assKissingLevel: AssKissingRange = 8;

      const bronn: Squire = createSquires(
        characterIdentity,
        companionBronn,
        assKissingLevel,
      );

      expect(bronn.name).toBe("Bronn");
      expect(bronn.companion.name).toBe("Jaime");
    });
  });
});
