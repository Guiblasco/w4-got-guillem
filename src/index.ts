import type Character from "./character/types";
import { characters } from "./data.js";

const getCharacterMessage = (characters: Character[]): string[] =>
  characters.map((character) => character.talk());
