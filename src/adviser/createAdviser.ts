import createCharacter from "../character/createCharacter";
import type Character from "../character/types";
import type { Adviser } from "./types";

export const createAdviser = (
  characterIdentity: { name: string; surname: string; age: number },
  characterAdvises: Character,
): Adviser => {
  const newAdviser = createCharacter(
    characterIdentity.name,
    characterIdentity.surname,
    characterIdentity.age,
  ) as Adviser;

  newAdviser.characterAdvises = characterAdvises;
  newAdviser.talk = () => "No sé por qué, pero creo que voy a morir pronto";

  return newAdviser;
};

export default createAdviser;
