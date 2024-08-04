interface Character {
  name: string;
  surname: string;
  age: number;
  isAlive: boolean;
  imageUrl: string;
  die: () => void;
  talk: () => string;
}

export default Character;
