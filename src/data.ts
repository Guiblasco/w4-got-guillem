import {
  createKing,
  createFighter,
  createAdviser,
  createSquire,
} from "./charactersFactories";

const joffreyBaratheon = createKing("Joffrey", 36, 3, "Baratheon");
const jaimeLannister = createFighter("Jaime", 20, 8, "Dagger", "Lannister");
const daenerysTargaryen = createFighter(
  "Daenerys",
  25,
  9,
  "Dragons",
  "Targaryen",
);
const tyrionLannister = createAdviser(
  "Tyrion",
  22,
  daenerysTargaryen,
  "Lannister",
);
const bronn = createSquire("Bronn", 18, jaimeLannister, 10);

const characters = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  tyrionLannister,
  bronn,
];
