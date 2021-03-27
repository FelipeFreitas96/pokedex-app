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
  name: string;
  type: Partial<PokemonType>;
}
