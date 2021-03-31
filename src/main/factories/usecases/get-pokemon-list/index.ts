import { GetPokemonListService } from "#/data/services/get-pokemon-list";
import { IGetPokemonList } from "#/domain/usecase/get-pokemon-list";
import { makePokemonApi } from "#/main/factories/infra";

export const makeGetPokemonList = (): IGetPokemonList => {
  const pokeApi = makePokemonApi();
  return new GetPokemonListService(pokeApi);
}