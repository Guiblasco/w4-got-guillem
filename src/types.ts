export interface Character {
  name: string;
  surname?: string;
  age: number;
  state: "alive" | "dead";
  die: () => void;
  talk: () => string;
}

export interface King extends Character {
  yearsOfReign: number;
  talk: () => "Vais a morir todos";
}
export interface Fighter extends Character {
  weapon: string;
  skill: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  talk: () => "Primero pego y luego pregunto";
}
export interface Adviser extends Character {
  characterAdvises: Character;
  talk: () => "No sé por qué, pero creo que voy a morir pronto";
}
export interface Squire extends Character {
  companion: Fighter;
  assKissing: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  talk: () => "soy un looser";
}
