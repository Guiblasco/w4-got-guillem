<<<<<<< Updated upstream:src/squire/createSquires.ts
import createCharacter from "../character/createCharacter";
import type { Squire, AssKissingRange } from "./type";
import type { Fighter } from "../fighter/type";
=======
import createCharacter from "../character/createCharacter.js";
import type { Squire, AssKissingRange } from "./types.js";
import type { Fighter } from "../fighter/types.js";
>>>>>>> Stashed changes:src/squire/createSquire.ts

export const createSquire = (
  characterIdentity: { name: string; surname: string; age: number },
  companion: Fighter,
  assKissing: AssKissingRange,
): Squire => {
  const newSquire = createCharacter(
    characterIdentity.name,
    characterIdentity.surname,
    characterIdentity.age,
  ) as Squire;

  newSquire.companion = companion;
  newSquire.assKissing = assKissing;
  newSquire.talk = () => "Soy un loser";

  return newSquire;
};

export default createSquire;
