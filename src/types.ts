export interface Character {
  name: string;
  surname: string;
  age: number;
  state: "alive" | "dead";
  die: () => void;
  talk: () => string;
};

type King = {
  yearsOfReign: number;
  talk: () => "Vais a morir todos";
};

type Fighter = {
  weapon: string;
  skill: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
};