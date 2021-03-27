import { PokemonTypes } from '../../domain/entities/pokemon';
import {GetPokemonDTO, IGetPokemonList} from '../../domain/usecase/get-pokemon-list';
import { IApi } from '../protocols/api';

export class GetPokemonListService implements IGetPokemonList {
  constructor(private readonly pokemonApi: IApi) {}
  async execute(): Promise<GetPokemonDTO> {
    const pokemonList: GetPokemonDTO = {};
    for (const pokemonType of PokemonTypes) {
      const response = await this.pokemonApi.get(`https://pokeapi.co/api/v2/type/${pokemonType}`);
      if (!response ||
          !response.data) {
        throw new Error('Cannot access the endpoint /api/v2/type');
      }

      for (const pokemonData of response.data.pokemon) {
        const { pokemon, slot } = pokemonData;
        const pokemonId = Number([...pokemon.url.matchAll(/\/pokemon\/(.*)\//gm)][0][1]);
        if (pokemonId > 151) {
          continue;
        }  

        if (pokemonList[pokemonId - 1] === undefined) {
          pokemonList[pokemonId - 1] = {
            name: pokemon.name,
            type: {},
          }
        }

        const pokemonTypeByCondition = (slot === 1 ? "primary" : "secondary");
        pokemonList[pokemonId - 1].type[pokemonTypeByCondition] = pokemonType;
      }
    }

    return pokemonList;
  }
}