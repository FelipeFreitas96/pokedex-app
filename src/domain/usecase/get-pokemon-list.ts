import { IPokemon } from "../entities/pokemon";

export interface IGetPokemonList {
  execute(): Promise<IPokemon[]>;
}