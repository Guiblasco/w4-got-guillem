<<<<<<< Updated upstream:src/king/createKings.ts
import createCharacter from "../character/createCharacter";
=======
import createCharacter from "../character/createCharacter.js";
>>>>>>> Stashed changes:src/king/createKing.ts
import type { King } from "./type";

export const createKing = (
  characterSpects: { name: string; surname: string; age: number },
  yearsOfReign: number,
): King => {
  const newKing = createCharacter(
    characterSpects.name,
    characterSpects.surname,
    characterSpects.age,
  ) as King;

  newKing.yearsOfReign = yearsOfReign;
  newKing.talk = () => "Vais a morir todos";

  return newKing;
};

export default createKing;
