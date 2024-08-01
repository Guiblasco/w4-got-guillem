import type Character from "./character/types";
import { characters } from "./data";

const getCharacterMessage = (characters: Character[]): string[] =>
  characters.map((character) => character.talk());

console.log(getCharacterMessage(characters));
