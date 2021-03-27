import {IPokemon} from '../../domain/entities/pokemon';
import {IGetPokemonData} from '../../domain/usecase/get-pokemon-data';
import {IApi} from '../protocols/api';

export class GetPokemonDataService implements IGetPokemonData {
  constructor(private readonly pokemonApi: IApi) {}
  async execute(id: number): Promise<IPokemon> {
    const { data } = await this.pokemonApi.get(`/pokemon/${id}`);
    if (!data) {
      return Promise.reject(new Error("Pokemon not found"));
    }

    const result: IPokemon = {
      name: data.name,
      type: {
        primary: data.types[0].type.name,
        secondary: data?.types[1]?.type?.name || null,
      },
    };
    return result;
  }
}
