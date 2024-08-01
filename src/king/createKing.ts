import createCharacter from "../character/createCharacte";
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
