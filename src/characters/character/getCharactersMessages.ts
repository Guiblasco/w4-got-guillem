import type Character from "./types";

const getCharactersMessages = (characters: Character[]): string[] =>
  characters.map((character) => character.talk());
