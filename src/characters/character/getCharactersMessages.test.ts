import createFighter from "../fighter/createFighter";
import { Fighter } from "../fighter/types";
import getCharactersMessages from "./getCharactersMessages";
import type Character from "./types";
import { joffreyBaratheon, daenerysTargaryen, tyrionLannister } from "./data";

describe("Given function getCharactersMessages", () => {
  describe("When it receives a Fighter, an Adviser and a King", () => {
    test("Then it should return 'Primero pego y luego pregunto','No sé por qué, pero creo que voy a morir pronto'and 'Vais a morir todos'", () => {
      const characters: Character[] = [
        joffreyBaratheon,
        daenerysTargaryen,
        tyrionLannister,
      ];
      const expectedMessageKing = joffreyBaratheon.talk();
      const expectedMessageFighter = daenerysTargaryen.talk();
      const expectedMessageAdviser = tyrionLannister.talk();

      const characterMessage: string[] = getCharactersMessages(characters);

      expect(characterMessage[0]).toBe(expectedMessageKing);
      expect(characterMessage[1]).toBe(expectedMessageFighter);
      expect(characterMessage[2]).toBe(expectedMessageAdviser);
    });
  });
});
