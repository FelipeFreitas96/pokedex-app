export type PokemonType = {
  primary: string;
  secondary: string;
};

export interface IPokemon {
  name: string;
  type: Partial<PokemonType>;
}
