import { IPokemon, PokemonTypes, PokemonTypesColor } from '#/domain/entities/pokemon';
import { IGetPokemonList} from '#/domain/usecase/get-pokemon-list';
import { capitalize } from '#/helper/capitalize';
import { IApi } from '#/data/protocols/api';

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
        if (!regex) {
          continue;
        }

        const pokemonRegex = regex.exec(pokemon.url);
        if (!pokemonRegex || !pokemonRegex[1]) {
          continue;
        }

        const pokemonId = Number(pokemonRegex[1]);
        if (pokemonId > 151) {
          continue;
        }  

        if (pokemonList[pokemonId - 1] === undefined) {
          pokemonList[pokemonId - 1] = {
            id: pokemonId,
            name: capitalize(pokemon.name),
          }
        }

        const pokemonTypeByCondition = (slot === 1 ? "primary" : "secondary");
      }
    }

  }
}