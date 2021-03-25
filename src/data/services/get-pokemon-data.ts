import {IGetPokemonData} from '../../domain/usecase/get-pokemon-data';
import {IApi} from '../protocols/api';

export class GetPokemonData implements IGetPokemonData {
  constructor(private readonly pokemonApi: IApi) {}
  execute(): string {
    throw new Error('Method not implemented.');
  }
}
