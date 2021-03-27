import { IPokemon, PokemonTypes } from '../../domain/entities/pokemon';
import { IGetPokemonList} from '../../domain/usecase/get-pokemon-list';
import { capitalize } from '../../helper/capitalize';
import { IApi } from '../protocols/api';

export class GetPokemonListService implements IGetPokemonList {
  constructor(private readonly pokemonApi: IApi) {}
  async execute(): Promise<IPokemon[]> {
    const pokemonList: IPokemon[] = [];
    for (const pokemonType of PokemonTypes) {
      const response = await this.pokemonApi.get(`https://pokeapi.co/api/v2/type/${pokemonType}`);
      if (!response ||
          !response.data) {
        throw new Error('Cannot access the endpoint /api/v2/type');
      }

      for (const pokemonData of response.data.pokemon) {
        const { pokemon, slot } = pokemonData;
        const regex = new RegExp('/pokemon/(.*)/', 'g');
        const pokemonId = Number(regex.exec(pokemon.url)[1]);
        if (pokemonId > 151) {
          continue;
        }  

        if (pokemonList[pokemonId - 1] === undefined) {
          pokemonList[pokemonId - 1] = {
            name: capitalize(pokemon.name),
            type: {},
          }
        }

        const pokemonTypeByCondition = (slot === 1 ? "primary" : "secondary");
        pokemonList[pokemonId - 1].type[pokemonTypeByCondition] = capitalize(pokemonType);
      }
    }

    return pokemonList;
  }
}