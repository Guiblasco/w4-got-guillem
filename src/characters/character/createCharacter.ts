import type Character from "./types";

const createCharacter = (
  name: string,
  surname: string,
  age: number,
): Character => {
  const newCharacter: Character = {
    name,
    surname,
    age,
    isAlive: true,
    imageUrl: `images/${name.toLocaleLowerCase()}.webp`,
    die() {
      this.isAlive = false;
    },
    talk() {
      return "";
    },
  };

  return newCharacter;
};

export default createCharacter;
