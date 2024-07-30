import { type Adviser, type Fighter, type King, type Squire } from "./types";

const joffreyBaratheon: King = {
  name: "Joffrey",
  surname: "Baratheon",
  age: 36,
  state: "alive",
  yearsOfReign: 3,
  die() {
    joffreyBaratheon.state = "dead";
  },
  talk() {
    return "Vais a morir todos";
  },
};

const jaimeLannister: Fighter = {
  name: "Jaime",
  surname: "Lannister",
  age: 20,
  state: "alive",
  weapon: "Sword",
  skill: 5,
  die() {
    jaimeLannister.state = "dead";
  },
  talk() {
    return "Primero pego y luego pregunto";
  },
};
const daenerysTargaryen: Fighter = {
  name: "Daenerys",
  surname: "Targaryen",
  age: 30,
  state: "alive",
  weapon: "Dragons",
  skill: 8,
  die() {
    jaimeLannister.state = "dead";
  },
  talk() {
    return "Primero pego y luego pregunto";
  },
};

const tyrionLannister: Adviser = {
  name: "Tyrion",
  surname: "Lannister",
  age: 26,
  state: "alive",
  characterAdvises: daenerysTargaryen,
  die() {
    tyrionLannister.state = "dead";
  },
  talk() {
    return "No sé por qué, pero creo que voy a morir pronto";
  },
};

const bronn: Squire = {
  name: "Bronn",
  age: 25,
  state: "alive",
  assKissing: 6,
  companion: jaimeLannister,

  die() {
    bronn.state = "dead";
  },
  talk() {
    return "soy un looser";
  },
};

const characters = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  tyrionLannister,
  bronn,
];
