export const PokemonTypes = [
  "bug",
  "dragon",
  "electric",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "water"
];

export type PokemonType = {
  primary: string;
  secondary: string;
};

export type IPokemon = {
  id: number;
  name: string;
  type: Partial<PokemonType>;
}
