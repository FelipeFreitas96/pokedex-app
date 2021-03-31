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

export const PokemonTypesColor: {
  [type: string]: string;
} = {
  bug: '#C5D162',
  dragon: '#BCA1FF',
  electric: '#F8D030',
  fighting: '#F2544B',
  fire: '#FFA666',
  flying: '#D9CCFF',
  ghost: '#B09FCC',
  grass: '#78C850',
  ground: '#E0C068',
  ice: '#C2F2F2',
  normal: '#C2C29D',
  poison: '#D494D4',
  psychic: '#FF8CAF',
  rock: '#D1BA54',
  water: '#A1BCFF',
};

export type PokemonTypeObject = {
  name: string;
  color: string;
}

export type PokemonType = {
  primary: PokemonTypeObject;
  secondary: PokemonTypeObject;
};

export type IPokemon = {
  id: number;
  name: string;
  types: Partial<PokemonType>;
}
