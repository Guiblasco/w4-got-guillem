import type { Fighter } from "../fighter/type";
import createSquires from "./createSquires";

describe("Given the function createSquires", () => {
  describe("When it recives the values name: 'Bronn' and companion.name: 'Jaime'", () => {
    test("Then it should return an object type Squire with the properties name: 'Bronn', companion.name: 'Jaime'", () => {
      const characterSpects = { name: "Bronn", surname: "", age: 25 };
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
      const assKissingLevel = 8;
      const expetedBronn = {
        name: "Bronn",
        companion: { name: "Jaime" },
      };

      const bronn = createSquires(
        characterSpects,
        companionBronn,
        assKissingLevel,
      );

      expect(bronn.name).toBe(expetedBronn.name);
      expect(bronn.companion.name).toBe(expetedBronn.companion.name);
    });
  });
});
