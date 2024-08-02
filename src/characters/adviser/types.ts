import type Character from "../character/types";

export interface Adviser extends Character {
  characterAdvises: Character;
  talk: () => "No sé por qué, pero creo que voy a morir pronto";
}

export default Adviser;
