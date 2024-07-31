interface Character {
  name: string;
  surname: string;
  age: number;
  isAlive: boolean;
  die: () => void;
  talk: () => string;
}

export default Character;
