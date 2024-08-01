import type { Fighter } from "../fighter/types";
import type Character from "../character/types";

export type AssKissingRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Squire extends Character {
  companion: Fighter;
  assKissing: AssKissingRange;
  talk: () => "Soy un loser";
}
