import { IPokemon } from "#/domain/entities/pokemon";

export interface IGetPokemonList {
  execute(): Promise<IPokemon[]>;
}