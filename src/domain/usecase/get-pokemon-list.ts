import { IPokemon } from "../entities/pokemon";

export type GetPokemonDTO = {
  [pokemonName: string]: IPokemon;
}

export interface IGetPokemonList {
  execute(): Promise<{ [pokemonName: string]: IPokemon }>;
}