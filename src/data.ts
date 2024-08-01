import createSquire from "./squire/createSquire.js";
import createFighter from "./fighter/createFighter.js";
import createAdviser from "./adviser/createAdviser.js";
import createKing from "./king/createKing.js";
import type Character from "./character/types";

const joffreyBaratheon = createKing(
  { name: "Joffrey", surname: "Baratheon", age: 36 },
  3,
);

const jaimeLannister = createFighter(
  { name: "Jaime", surname: "Lannister", age: 20 },
  8,
  "Dagger",
);

const daenerysTargaryen = createFighter(
  { name: "Daenerys", surname: "Targaryen", age: 25 },
  9,
  "Dragons",
);

const tyrionLannister = createAdviser(
  { name: "Tyrion", surname: "Lannister", age: 22 },
  daenerysTargaryen,
);

const bronn = createSquire(
  { name: "Bronn", surname: "", age: 18 },
  jaimeLannister,
  10,
);

export const characters: Character[] = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  tyrionLannister,
  bronn,
];
