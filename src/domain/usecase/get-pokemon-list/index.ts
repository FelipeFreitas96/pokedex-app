import { IPokemon } from "#/domain/entities";

export interface IGetPokemonList {
  execute(): Promise<IPokemon[]>;
}