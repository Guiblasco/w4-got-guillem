export interface Character {
  name: string;
  surname: string;
  age: number;
  state: "alive" | "dead";
  die: () => void;
  talk: () => string;
}

interface King extends Character {
  yearsOfReign: number;
  talk: () => "Vais a morir todos";
}
