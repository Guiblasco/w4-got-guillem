import type Character from "./character/types";
import { characters } from "./data.js";

const talkCharacters = (characters: Character[]): string[] =>
  characters.map((character) => character.talk());

console.log(talkCharacters(characters));
