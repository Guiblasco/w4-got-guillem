import {
  type SkillRange,
  type Adviser,
  type Fighter,
  type King,
  type Squire,
  type Character,
  type AssKissingRange,
} from "./types";

export const createKing = (
  name: string,
  age: number,
  yearsOfReign: number,
  surname?: string,
): King => {
  const king: King = {
    name,
    surname,
    age,
    isAlive: true,
    yearsOfReign,
    die() {
      king.isAlive = false;
    },
    talk() {
      return "Vais a morir todos";
    },
  };

  return king;
};

export const createFighter = (
  name: string,
  age: number,
  skill: SkillRange,
  weapon: string,
  surname?: string,
): Fighter => {
  const fighter: Fighter = {
    name,
    surname,
    age,
    isAlive: true,
    weapon,
    skill,
    die() {
      fighter.isAlive = false;
    },
    talk() {
      return "Primero pego y luego pregunto";
    },
  };

  return fighter;
};

export const createAdviser = (
  name: string,
  age: number,
  characterAdvises: Character,
  surname?: string,
): Adviser => {
  const adviser: Adviser = {
    name,
    surname,
    age,
    isAlive: true,
    characterAdvises,
    die() {
      adviser.isAlive = false;
    },
    talk() {
      return "No sé por qué, pero creo que voy a morir pronto";
    },
  };

  return adviser;
};

export const createSquire = (
  name: string,
  age: number,
  companion: Fighter,
  assKissing: AssKissingRange,
): Squire => {
  const squire: Squire = {
    name,
    age,
    companion,
    isAlive: true,
    assKissing,
    die() {
      squire.isAlive = false;
    },
    talk() {
      return "Soy un loser";
    },
  };

  return squire;
};
