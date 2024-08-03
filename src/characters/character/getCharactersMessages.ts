import { characters } from "./data.js";
import type Character from "./types";

const getCharactersMessages = (characters: Character[]): string[] =>
  characters.map((character) => character.talk());

console.log(getCharactersMessages(characters)[1]);

export default getCharactersMessages;
