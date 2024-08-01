<<<<<<< Updated upstream:src/fighter/createFighters.ts
import createCharacter from "../character/createCharacter";
import type { SkillRange, Fighter } from "./type";
=======
import createCharacter from "../character/createCharacter.js";
import type { SkillRange, Fighter } from "./types.js";
>>>>>>> Stashed changes:src/fighter/createFighter.ts

export const createFighter = (
  characterIdentity: { name: string; surname: string; age: number },
  skill: SkillRange,
  weapon: string,
): Fighter => {
  const newFighter = createCharacter(
    characterIdentity.name,
    characterIdentity.surname,
    characterIdentity.age,
  ) as Fighter;

  newFighter.weapon = weapon;
  newFighter.skill = skill;
  newFighter.talk = () => "Primero pego y luego pregunto";

  return newFighter;
};

export default createFighter;
