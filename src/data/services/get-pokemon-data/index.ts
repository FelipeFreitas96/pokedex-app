import {IPokemon, PokemonTypesColor} from '#/domain/entities/pokemon';
import {IGetPokemonData} from '#/domain/usecase/get-pokemon-data';
import {IApi} from '#/data/protocols/api';

export class GetPokemonDataService implements IGetPokemonData {
  constructor(private readonly pokemonApi: IApi) {}
  async execute(id: number): Promise<IPokemon> {
    const { data } = await this.pokemonApi.get(`/pokemon/${id}`);
    if (!data) {
      return Promise.reject(new Error("Pokemon not found"));
    }

    const result: IPokemon = {
      id,
      name: data.name,
      types: {
        primary: {
          name: data.types[0].type.name,
          color: PokemonTypesColor[data.types[0].type.name],
        },
        secondary: {
          name: data?.types[1]?.type?.name || null,
          color: PokemonTypesColor[data.types[0].type.name],
        },
      },
    };
    
    return result;
  }
}
