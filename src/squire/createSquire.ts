import createCharacter from "../character/createCharacte";
import type { Squire, AssKissingRange } from "./type";
import type { Fighter } from "../fighter/type";

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
