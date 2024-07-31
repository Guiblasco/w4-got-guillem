import { createSquire } from "./squire/createSquires";
import { createFighter } from "./fighter/createFighters";
import { createAdviser } from "./adviser/createAdvisers";
import { createKing } from "./king/createKings";

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

const characters = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  tyrionLannister,
  bronn,
];
