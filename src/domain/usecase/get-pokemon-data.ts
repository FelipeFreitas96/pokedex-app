import { IPokemon } from '../entities/pokemon';
export interface IGetPokemonData {
  execute(id: number): Promise<IPokemon>;
}
